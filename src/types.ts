export type ProjectCategory =
  | 'Electrónica digital'
  | 'Arduino'
  | 'ESP32'
  | 'IoT'
  | 'PCB'
  | 'Programación';

export type ProjectLevel = 'Básico' | 'Intermedio' | 'Avanzado';

export type ProjectType = 'Proyecto' | 'Tutorial' | 'Código' | 'Hardware';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  level: ProjectLevel;
  type: ProjectType;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  featured?: boolean;
  schematicUrl?: string;
  codeSnippet?: string;
  componentsList: string[];
  status: 'Completado' | 'En desarrollo' | 'Open Source';
  date: string;
}

export interface CategoryInfo {
  id: string;
  title: string;
  categoryKey: ProjectCategory;
  description: string;
  topics: string[];
  icon: string;
  count: number;
}

export interface Product {
  id: string;
  name: string;
  category: 'Kits electrónicos' | 'PCBs' | 'Módulos electrónicos' | 'Proyectos terminados' | 'Accesorios' | 'Componentes';
  price: number;
  currency: string;
  availability: 'En stock' | 'Pocas unidades' | 'Edición limitada' | 'Bajo pedido';
  image: string;
  description: string;
  includes: string[];
  badge?: string;
}

export interface SocialNetwork {
  name: string;
  icon: string;
  url: string;
  handle: string;
  description: string;
  metrics: string;
  colorClass: string;
}

export interface FilterOptions {
  category: string;
  level: string;
  type: string;
  search: string;
}
