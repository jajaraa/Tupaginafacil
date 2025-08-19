import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contacto@tupaginafacil.cl',
      link: 'mailto:contacto@tupaginafacil.cl',
      color: 'neon-green'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+56 9 1234 5678',
      link: 'https://wa.me/56912345678',
      color: 'electric-blue'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Santiago, Chile',
      link: '#',
      color: 'neon-green'
    }
  ];

  return (
    <section id="contacto" className="section-padding bg-gradient-to-b from-dark-bg to-black">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contáctanos hoy mismo y descubre cómo podemos transformar tu idea en una presencia digital impactante. 
            <span className="text-neon-green font-semibold"> Tu sitio web está a solo un mensaje de distancia.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="lg:order-1">
            <div className="card-neon">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-electric-blue rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Envíanos un mensaje</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-500 focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/20 transition-all duration-300"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-500 focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/20 transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-500 focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/20 transition-all duration-300 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto, qué tipo de sitio web necesitas, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4 group"
                >
                  <span className="flex items-center justify-center gap-3">
                    Enviar mensaje
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & WhatsApp */}
          <div className="lg:order-2">
            {/* Contact Information */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${info.color} to-${info.color === 'neon-green' ? 'electric-blue' : 'neon-green'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{info.title}</h4>
                      <a
                        href={info.link}
                        className={`text-${info.color} hover:text-white transition-colors duration-300`}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-dark-card to-dark-card border border-dark-border rounded-2xl p-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  ¿Prefieres WhatsApp?
                </h3>
                <p className="text-gray-300 mb-6">
                  Escríbenos directamente por WhatsApp para una respuesta más rápida. 
                  Estamos disponibles de lunes a viernes de 9:00 a 18:00.
                </p>
                <a
                  href="https://wa.me/56912345678?text=Hola! Me interesa crear mi sitio web con TuPáginaFácil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Escribir por WhatsApp
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="card">
              <h4 className="text-xl font-bold text-white mb-4">Horarios de atención</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span>10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span>Cerrado</span>
                </div>
              </div>
              <p className="text-sm text-neon-green mt-4">
                * Respuesta por WhatsApp disponible 24/7
              </p>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-dark-card to-dark-card border border-dark-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gradient mb-6">
              ¿Tienes dudas sobre nuestros servicios?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Nuestro equipo está aquí para ayudarte a elegir el plan perfecto para tu negocio. 
              <span className="text-neon-green font-semibold"> La primera consulta es completamente gratuita.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Solicitar consulta gratuita
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Ver planes detallados
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
