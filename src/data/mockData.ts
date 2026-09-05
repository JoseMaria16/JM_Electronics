import { Project, CategoryInfo, Product, SocialNetwork } from '../types';

import heroPcbLabImg from '../assets/images/hero_pcb_lab_1788632711066.jpg';
import makerLabImg from '../assets/images/maker_workbench_lab_1788632723993.jpg';
import customPcbImg from '../assets/images/custom_pcb_design_1788632735397.jpg';

export const ASSET_IMAGES = {
  heroPcb: heroPcbLabImg,
  makerLab: makerLabImg,
  customPcb: customPcbImg,
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'Velocímetro Digital de Alta Precisión',
    category: 'Arduino',
    level: 'Intermedio',
    type: 'Proyecto',
    description: 'Sistema de telemetría y medición de velocidad instantánea, odómetro y tiempo de viaje con calibración magnética y pantalla LCD de alto contraste.',
    longDescription: 'Diseñado para vehículos ligeros, bicicletas eléctricas y prototipos de carreras escolares. Utiliza un sensor de efecto Hall A3144 calibrado mediante interrupciones por hardware en el microcontrolador ATmega328P, sincronizado con un módulo RTC DS3231 con compensación de temperatura para mantener la hora y registro de sesiones.',
    technologies: ['Arduino Nano', 'LCD 16x2 I2C', 'Sensor Hall A3144', 'RTC DS3231', 'C++ / PlatformIO'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    componentsList: [
      'Arduino Nano v3 (ATmega328P)',
      'Display LCD 16x2 con adaptador I2C PCF8574',
      'Sensor magnético Hall A3144 con resistencia pull-up',
      'Módulo de reloj en tiempo real DS3231 con batería CR2032',
      'Regulador lineal de voltaje LM7805 de bajo ruido',
      'Gabinete impreso en 3D en filamento PETG industrial'
    ],
    codeSnippet: `// Interrupción del sensor Hall para cálculo de RPM y velocidad
volatile unsigned long lastPulseTime = 0;
volatile unsigned long pulseInterval = 0;

void IRAM_ATTR onWheelMagnetPass() {
  unsigned long now = micros();
  pulseInterval = now - lastPulseTime;
  lastPulseTime = now;
}

float calculateSpeedKmH(float wheelCircumferenceMeters) {
  if (pulseInterval == 0) return 0.0;
  float speedMps = wheelCircumferenceMeters / (pulseInterval / 1000000.0);
  return speedMps * 3.6; // Convertir m/s a km/h
}`,
    status: 'Completado',
    date: '2025'
  },
  {
    id: 'proj-2',
    title: 'Sistema IoT Industrial con ESP32 & WebSockets',
    category: 'ESP32',
    level: 'Avanzado',
    type: 'Hardware',
    description: 'Nodo de monitorización remota de variables ambientales, control de cargas AC con relés de estado sólido y telemetría en tiempo real por MQTT/WebSockets.',
    longDescription: 'Estación de control inalámbrica industrial construida sobre la arquitectura dual-core de ESP32. Un núcleo gestiona la adquisición continua de datos de sensores ambientales (BME280 y NDIR CO2) y disparo de relés con aislamiento galvánico optoacoplado, mientras que el segundo núcleo administra la pila de red Wi-Fi y servidor local WebSocket.',
    technologies: ['ESP32 Dual-Core', 'Sensores BME280 / MQ-135', 'MQTT & WebSockets', 'Relés Optoacoplados', 'FreeRTOS'],
    image: customPcbImg,
    featured: true,
    componentsList: [
      'Microcontrolador ESP32-WROOM-32D',
      'Sensor de presión, temperatura y humedad Bosch BME280',
      'Sensor de calidad de aire y gas NDIR / MQ-135',
      'Módulo de 4 relés de estado sólido con optoacopladores EL817',
      'Fuente de alimentación conmutada 110V/220V AC a 5V/3.3V DC aislada',
      'Antena externa de 2.4 GHz de alta ganancia (conector IPEX)'
    ],
    codeSnippet: `// Tarea FreeRTOS para lectura de sensores y transmisión MQTT
void vSensorTelemetryTask(void *pvParameters) {
  TickType_t xLastWakeTime = xTaskGetTickCount();
  const TickType_t xFrequency = pdMS_TO_TICKS(1000);

  for (;;) {
    float temp = bme.readTemperature();
    float hum = bme.readHumidity();
    float pres = bme.readPressure() / 100.0F;

    // Publicación en broker MQTT local seguro TLS
    client.publish("lab/node1/telemetry", formatJsonPayload(temp, hum, pres).c_str());
    vTaskDelayUntil(&xLastWakeTime, xFrequency);
  }
}`,
    status: 'Completado',
    date: '2025'
  },
  {
    id: 'proj-3',
    title: 'Máquina Expendedora Inteligente',
    category: 'Electrónica digital',
    level: 'Avanzado',
    type: 'Proyecto',
    description: 'Arquitectura híbrida de lógica combinacional y secuencial acoplada a microcontrolador ESP32, billetero MDB y pantalla OLED con pagos digitales.',
    longDescription: 'Sistema mecatrónico que combina máquinas de estado finitas (FSM) para la lógica de validación de crédito y selección de producto, con multiplexación de motores paso a paso mediante drivers A4988 y sensores de caída infrarrojos por barrera. Integra conectividad para validar transferencias y pagos instantáneos.',
    technologies: ['Electrónica Digital', 'ESP32', 'Motores Paso a Paso', 'Drivers A4988', 'I2C / OLED SSD1306'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    componentsList: [
      'Microcontrolador ESP32-S3 con PSRAM',
      '4x Drivers micropaso A4988 con disipador térmico',
      'Sensores ópticos infrarrojos de haz reflectivo para verificación de dispensado',
      'Display gráfico OLED 128x64 con bus I2C',
      'Teclado matricial 4x4 capacitivo con retroiluminación',
      'Matriz de transistores Darlington ULN2803 para cerraduras solenoides'
    ],
    codeSnippet: `enum VendingState { IDLE, SELECTING, DISPENSING, VERIFYING_DROP, REFUND, ERROR };
VendingState currentState = IDLE;

void processStateMachine() {
  switch(currentState) {
    case IDLE:
      if (creditInserted > 0) currentState = SELECTING;
      break;
    case SELECTING:
      if (keypadSelectionValid()) {
        triggerMotor(selectedSlot);
        currentState = DISPENSING;
      }
      break;
    case DISPENSING:
      if (detectProductDrop()) currentState = IDLE;
      break;
  }
}`,
    status: 'Open Source',
    date: '2024'
  },
  {
    id: 'proj-4',
    title: 'Diseño y Ruteado de PCB Shield para ESP32',
    category: 'PCB',
    level: 'Intermedio',
    type: 'Hardware',
    description: 'Placa de circuito impreso de 2 capas en KiCad 8 con plano de masa mallado, supresión de transitorios TVS y conectores screw-terminal para riel DIN.',
    longDescription: 'Diseño modular de grado industrial para entornos de laboratorio y fábricas. Implementa filtros LC pasivos en las líneas de alimentación, diodos TVS ESD en todas las entradas I/O expuestas para evitar daños electrostáticos, e integración de transceptor RS485 para comunicación Modbus multipunto.',
    technologies: ['KiCad 8', 'Electrónica THT & SMD', 'Ruteado Diferencial', 'Protección ESD / TVS', 'Diseño DRC'],
    image: heroPcbLabImg,
    featured: true,
    componentsList: [
      'Placa PCB FR4 TG150 de 2 capas con acabado ENIG oro de inmersión',
      'Transceptor RS485 MAX485 en encapsulado SOIC-8',
      'Diodos de protección contra transitorios TVS SMBJ5.0A',
      'Borneras de conexión tipo clema paso 5.08mm para riel DIN',
      'Capacitores cerámicos X7R de desacoplo cerca de cada pin VCC',
      'Ferritas de perla SMD 0805 para filtrado de alta frecuencia'
    ],
    codeSnippet: `// KiCad Netlist extract: Rule Check & Impedance targets
Layer Count: 2 Layers (Top Copper / Bottom Copper Ground Plane)
Trace Width: Power traces = 0.8mm (35mil) | Signal = 0.25mm (10mil)
Clearance: 0.2mm (8mil) min spacing for high voltage isolation
Via Specs: Drill = 0.3mm, Annular Ring = 0.6mm`,
    status: 'Completado',
    date: '2025'
  },
  {
    id: 'proj-5',
    title: 'Osciloscopio Digital Portátil USB & Batería',
    category: 'Electrónica digital',
    level: 'Avanzado',
    type: 'Hardware',
    description: 'Instrumento de medición de 2 canales analógicos con muestreo a 20 MSPS, ADC ultrarrápido y visualización en display TFT color SPI.',
    longDescription: 'Un osciloscopio compacto de bolsillo capaz de analizar señales PWM, buses I2C, SPI y UART en campo. Dispone de circuito frontend de amplificación operacional con acoplamiento AC/DC y atenuación 1X/10X.',
    technologies: ['ADC Alta Velocidad', 'Amplificadores Operacionales', 'Pantalla TFT ILI9341', 'Batería LiPo + Cargador TP4056'],
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    componentsList: [
      'Convertidor Analógico-Digital de doble canal',
      'Amplificador operacional de bajo ruido OPA2350',
      'Display LCD TFT SPI 2.8 pulgadas 320x240',
      'Gestor de carga Li-Ion TP4056 con protección contra sobrecorriente',
      'Puntas BNC coaxiales calibradas 10:1'
    ],
    codeSnippet: `void captureBufferDMA() {
  // Disparo analógico por flanco de subida con trigger por hardware
  adc_dma_start(bufferChannelA, BUFFER_SIZE);
  waitForTriggerEdge(TRIGGER_LEVEL);
  renderSignalWaveformToTFT();
}`,
    status: 'En desarrollo',
    date: '2025'
  },
  {
    id: 'proj-6',
    title: 'Monitor de Consumo Eléctrico IoT Trifásico',
    category: 'IoT',
    level: 'Avanzado',
    type: 'Tutorial',
    description: 'Medidor de potencia activa, reactiva y factor de potencia mediante transformadores de corriente no invasivos SCT-013 y panel Grafana en la nube.',
    longDescription: 'Tutorial completo de ingeniería que explica el cálculo RMS de voltaje y corriente alterna, calibración de desfase de fase en software, y publicación de métricas de potencia en tiempo real.',
    technologies: ['Transformadores SCT-013', 'ESP32', 'Cálculo RMS', 'Grafana & InfluxDB', 'Seguridad Eléctrica'],
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    componentsList: [
      '3x Sensores de corriente de pinza SCT-013-000 (100A / 50mA)',
      'Transformador de muestreo de voltaje 230V a 9V AC',
      'Divisores de tensión de precisión al 1% de tolerancia',
      'Condensadores de bypass de tantalio para referencia virtual VCC/2'
    ],
    codeSnippet: `// Cálculo continuo de potencia instantánea y factor de potencia
double realPower = 0;
for (int i = 0; i < SAMPLES; i++) {
  double instantaneousVoltage = readVoltageSample();
  double instantaneousCurrent = readCurrentSample();
  realPower += instantaneousVoltage * instantaneousCurrent;
}
realPower /= SAMPLES;`,
    status: 'Open Source',
    date: '2024'
  }
];

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    id: 'cat-digital',
    title: 'Electrónica Digital',
    categoryKey: 'Electrónica digital',
    description: 'Lógica combinacional, flip-flops, contadores, multiplexores y máquinas de estados.',
    topics: ['Álgebra de Boole', 'Flip-Flops JK/D', 'Contadores síncronos', 'Memorias & ALU'],
    icon: 'Cpu',
    count: 14
  },
  {
    id: 'cat-mcu',
    title: 'Microcontroladores',
    categoryKey: 'Arduino',
    description: 'Arduino, ESP32 y sistemas embebidos de alto rendimiento con FreeRTOS.',
    topics: ['Arduino Nano/Uno', 'ESP32 Dual-Core', 'Interrupciones & Timers', 'Buses I2C/SPI/UART'],
    icon: 'Microchip',
    count: 28
  },
  {
    id: 'cat-iot',
    title: 'IoT & Conectividad',
    categoryKey: 'IoT',
    description: 'Sensores, comunicación inalámbrica, telemetría y automatización en la nube.',
    topics: ['MQTT & WebSockets', 'Wi-Fi & Bluetooth LE', 'Dashboards en tiempo real', 'Sensores de precisión'],
    icon: 'Wifi',
    count: 19
  },
  {
    id: 'cat-pcb',
    title: 'Diseño de PCB',
    categoryKey: 'PCB',
    description: 'Diseño de circuitos, ruteado de pistas y fabricación de placas con KiCad.',
    topics: ['KiCad 8', 'Ruteado multicapa', 'Planos de masa', 'Fabricación & Montaje SMD'],
    icon: 'CircuitBoard',
    count: 12
  },
  {
    id: 'cat-prog',
    title: 'Programación',
    categoryKey: 'Programación',
    description: 'C++, Arduino, JavaScript, desarrollo de firmwares y aplicaciones de interfaz.',
    topics: ['C/C++ Embebido', 'Python para Hardware', 'PlatformIO', 'Optimización de memoria'],
    icon: 'Terminal',
    count: 22
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'prod-1',
    name: 'Kit Prototipado IoT Maker ESP32 v2.0',
    category: 'Kits electrónicos',
    price: 38.50,
    currency: 'USD',
    availability: 'En stock',
    image: customPcbImg,
    badge: 'Más popular',
    description: 'Kit de desarrollo integral listo para conectar. Incluye la placa PCB de diseño propio, microcontrolador ESP32-WROOM y sensores esenciales con manual en PDF.',
    includes: [
      '1x Placa de desarrollo personalizada con regleta clema',
      '1x Módulo ESP32-WROOM-32D soldado con headers dorados',
      '1x Sensor de temperatura y humedad de alta precisión',
      '1x Módulo OLED 0.96" I2C monocromo azul',
      'Cable microUSB con apantallamiento para datos',
      'Guía paso a paso con 6 proyectos de ejemplo en GitHub'
    ]
  },
  {
    id: 'prod-2',
    name: 'PCB Shield Industrial para Riel DIN (Pack x2)',
    category: 'PCBs',
    price: 14.90,
    currency: 'USD',
    availability: 'En stock',
    image: heroPcbLabImg,
    badge: 'Edición Limitada',
    description: 'Placas PCB vírgenes fabricadas en FR4 TG150 de 2 capas con acabado ENIG dorado. Diseñadas específicamente para proyectos permanentes en cuadros eléctricos.',
    includes: [
      '2x PCBs Shield acabado oro de inmersión ENIG',
      'Borneras de tornillo de paso 5.08mm incluidas',
      'Esquemático de ruteado y lista de partes BOM en digital',
      'Archivos Gerber y fuentes en KiCad incluidos'
    ]
  },
  {
    id: 'prod-3',
    name: 'Módulo Driver MOSFET 4 Canales Aislado',
    category: 'Módulos electrónicos',
    price: 18.00,
    currency: 'USD',
    availability: 'Pocas unidades',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    badge: 'Alta potencia',
    description: 'Módulo conmutador de potencia DC hasta 60V / 15A por canal con aislamiento óptico total para controlar tiras LED, electroválvulas y motores sin ruido.',
    includes: [
      'Módulo 4x MOSFET N-Channel de baja Rds(on)',
      'Aislamiento por optoacopladores rápidos',
      'LEDs indicadores de estado por cada canal',
      'Disipadores de aluminio anodizado preinstalados'
    ]
  },
  {
    id: 'prod-4',
    name: 'Estación de Monitoreo Ambiental Terminado',
    category: 'Proyectos terminados',
    price: 54.00,
    currency: 'USD',
    availability: 'Pocas unidades',
    image: makerLabImg,
    badge: 'Listo para usar',
    description: 'Dispositivo completamente ensamblado, probado y calibrado en gabinete impreso en PETG con display e-Paper o LCD y firmware preinstalado.',
    includes: [
      'Dispositivo completo listo para enchufar a 5V USB-C',
      'Firmware con portal cautivo Wi-Fi para configuración sin código',
      'Integración directa con Home Assistant y servidor MQTT',
      'Gabinete con anclaje magnético para pared'
    ]
  },
  {
    id: 'prod-5',
    name: 'Juego de Pinzas Antiestáticas ESD & Puntas de Prueba',
    category: 'Accesorios',
    price: 12.50,
    currency: 'USD',
    availability: 'En stock',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: 'Set de 6 pinzas de precisión no magnéticas con recubrimiento electrostático ESD para manipulación segura de componentes SMD 0805, 0603 e ICs.',
    includes: [
      '6x Pinzas de diferentes ángulos (rectas, curvas, punta fina)',
      '1x Estuche protector reforzado',
      '2x Puntas mini-grabber para osciloscopio y analizador lógico'
    ]
  },
  {
    id: 'prod-6',
    name: 'Pack x3 Microcontroladores ESP32-WROOM-32D',
    category: 'Componentes',
    price: 16.50,
    currency: 'USD',
    availability: 'En stock',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80',
    description: 'Pack de 3 unidades originales con chip Xtensa LX6 dual core, 4MB de memoria Flash, antena PCB integrada y certificados FCC/CE para tus creaciones.',
    includes: [
      '3x Módulos ESP32-WROOM-32D en empaque antiestático',
      'Tira de pines macho dorados para soldar',
      'Pinout impreso a color de referencia rápida'
    ]
  }
];

export const SOCIAL_NETWORKS: SocialNetwork[] = [
  {
    name: 'YouTube',
    icon: 'Youtube',
    url: 'https://youtube.com',
    handle: '@JJTechElectronics',
    description: 'Tutoriales paso a paso de electrónica, análisis de circuitos en osciloscopio y montajes prácticos de proyectos.',
    metrics: '+18K Suscriptores',
    colorClass: 'from-red-600/20 to-red-500/10 border-red-500/30 text-red-400 hover:border-red-400'
  },
  {
    name: 'GitHub',
    icon: 'Github',
    url: 'https://github.com',
    handle: 'josejauregui-tech',
    description: 'Repositorios libres con esquemáticos en KiCad, código en C++/Arduino, librerías y documentación de hardware.',
    metrics: '+45 Repositorios',
    colorClass: 'from-slate-700/20 to-slate-600/10 border-slate-500/30 text-slate-200 hover:border-cyan-400'
  },
  {
    name: 'Instagram',
    icon: 'Instagram',
    url: 'https://instagram.com',
    handle: '@jj_tech_maker',
    description: 'El día a día en el laboratorio, fotos macro de placas PCB soldadas, prototipos y micro reels de tips.',
    metrics: '+24K Seguidores',
    colorClass: 'from-pink-600/20 to-purple-600/10 border-pink-500/30 text-pink-400 hover:border-pink-400'
  },
  {
    name: 'TikTok',
    icon: 'Video',
    url: 'https://tiktok.com',
    handle: '@jjtech_electronica',
    description: 'Consejos rápidos de electrónica, trucos de soldadura con estaño y desmitificación de circuitos.',
    metrics: '+50K Seguidores',
    colorClass: 'from-cyan-500/20 to-pink-500/10 border-cyan-500/30 text-cyan-300 hover:border-cyan-300'
  },
  {
    name: 'LinkedIn',
    icon: 'Linkedin',
    url: 'https://linkedin.com',
    handle: 'José Jáuregui',
    description: 'Perfil profesional de ingeniería, diseño de hardware embebido, publicaciones técnicas y colaboraciones.',
    metrics: '+3.5K Conexiones',
    colorClass: 'from-blue-700/20 to-blue-600/10 border-blue-500/30 text-blue-400 hover:border-blue-400'
  },
  {
    name: 'Facebook',
    icon: 'Share2',
    url: 'https://facebook.com',
    handle: 'JJ Electrónica y Tecnología',
    description: 'Comunidad abierta de creadores, resolución de dudas de circuitos y anuncios de transmisiones en vivo.',
    metrics: '+12K Miembros',
    colorClass: 'from-blue-600/20 to-indigo-600/10 border-blue-400/30 text-blue-300 hover:border-blue-300'
  }
];

export const CREATOR_PROFILE = {
  name: 'José Jáuregui',
  role: 'Creador, Ingeniero & Maker de Hardware Embebido',
  tagline: 'Construyendo ideas con electrónica y tecnología',
  bio: 'Soy José Jáuregui, creador enfocado en electrónica, programación y tecnología. Me gusta convertir ideas en proyectos reales y compartir lo que aprendo durante el proceso, desde el primer esquemático en papel hasta la fabricación de PCBs y la escritura de firmware optimizado.',
  experience: 'Más de 6 años experimentando con sistemas embebidos, diseño de hardware digital y plataformas de internet de las cosas (IoT). Apasionado de la filosofía Open Hardware y la divulgación científica accesible.',
  stats: [
    { label: 'Proyectos completados', value: '35+', icon: 'FolderGit2' },
    { label: 'Tecnologías dominadas', value: '18+', icon: 'Cpu' },
    { label: 'Experimentos y prototipos', value: '120+', icon: 'FlaskConical' },
    { label: 'Tutoriales y guías', value: '45+', icon: 'BookOpen' }
  ],
  skills: [
    { name: 'Diseño de PCB (KiCad & Altium)', percent: 92 },
    { name: 'Firmware C / C++ (ESP32 & AVR)', percent: 95 },
    { name: 'Protocolos IoT (MQTT, HTTP, BLE)', percent: 88 },
    { name: 'Electrónica Analógica & Filtros', percent: 84 },
    { name: 'Prototipado rápido y soldadura SMD', percent: 90 }
  ]
};
