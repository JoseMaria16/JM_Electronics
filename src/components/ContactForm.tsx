import React, { useState } from 'react';
import { Mail, Send, CheckCircle, MessageSquare, MapPin, Phone, Sparkles, Clock } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contacto" className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden border-t border-white/10">
      {/* Background dot grid and glow */}
      <div className="absolute inset-0 opacity-10 bg-dot-grid pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>COLABORACIÓN &amp; CONSULTORÍA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            ¿Tienes una idea o proyecto?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Si quieres colaborar, realizar una consulta o hablar sobre un proyecto, puedes contactarme.
          </p>
        </div>

        {/* Contact Grid: Details + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Canales directos</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Respondo personalmente cada mensaje sobre desarrollo de hardware, revisiones de esquemáticos y propuestas.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:josejaureguirivas@gmail.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-slate-200 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Correo electrónico</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      josejaureguirivas@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 text-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Tiempo de respuesta</span>
                    <span className="text-sm font-semibold text-white">Generalmente &lt; 24 horas</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 text-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Ubicación del Lab</span>
                    <span className="text-sm font-semibold text-white">Laboratorio de I+D Embebido</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Consultation Badge with Frosted Glass */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white">
              <h4 className="text-sm font-bold text-cyan-400 mb-1 font-mono">
                ¿Asesoría en diseño de PCB?
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Envía tus archivos KiCad o requerimientos para revisión de DRC, selección de componentes y optimización de costos.
              </p>
            </div>
          </div>

          {/* Right Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-xl shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">
                Envíame un mensaje
              </h3>
              <p className="text-sm text-slate-400 mb-8">
                Completa el formulario y me pondré en contacto contigo a la brevedad.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-emerald-500/30 text-center animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    ¡Mensaje transmitido con éxito!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6">
                    Gracias por comunicarte. He recibido tus detalles técnicos y te responderé en breve.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej: Laura Martínez"
                        className="w-full px-4 py-3 text-sm text-slate-100 placeholder-slate-500 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ejemplo@correo.com"
                        className="w-full px-4 py-3 text-sm text-slate-100 placeholder-slate-500 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Ej: Colaboración en diseño de PCB para estación IoT"
                      className="w-full px-4 py-3 text-sm text-slate-100 placeholder-slate-500 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                      Mensaje / Descripción del proyecto *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntame sobre la idea, componentes que planeas usar o el reto técnico..."
                      className="w-full px-4 py-3 text-sm text-slate-100 placeholder-slate-500 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-sm font-bold text-slate-950 bg-cyan-500 hover:bg-cyan-400 shadow-lg shadow-cyan-500/25 transition-all cursor-pointer disabled:opacity-70 active:scale-95"
                  >
                    {isSubmitting ? (
                      <span>Transmitiendo mensaje...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
