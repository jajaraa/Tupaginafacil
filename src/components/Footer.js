import React from 'react';
import { Globe, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: 'Landing Pages', href: '#planes' },
      { name: 'Sitios Web', href: '#planes' },
      { name: 'E-commerce', href: '#planes' },
      { name: 'SEO', href: '#caracteristicas' },
      { name: 'Mantenimiento', href: '#caracteristicas' }
    ],
    empresa: [
      { name: 'Sobre nosotros', href: '#como-funciona' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Testimonios', href: '#portfolio' },
      { name: 'Blog', href: '#' },
      { name: 'Carreras', href: '#' }
    ],
    soporte: [
      { name: 'Centro de ayuda', href: '#contacto' },
      { name: 'Documentación', href: '#' },
      { name: 'Contacto', href: '#contacto' },
      { name: 'Estado del servicio', href: '#' },
      { name: 'Reportar bug', href: '#contacto' }
    ],
    legal: [
      { name: 'Términos de servicio', href: '#' },
      { name: 'Política de privacidad', href: '#' },
      { name: 'Política de cookies', href: '#' },
      { name: 'Condiciones de uso', href: '#' },
      { name: 'Aviso legal', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-black border-t border-dark-border">
      <div className="container-custom py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-electric-blue rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gradient">TuPáginaFácil</h3>
                <p className="text-sm text-gray-400">Tu sitio web profesional, rápido y fácil</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformamos tu idea en una presencia digital impactante. 
              Diseño moderno, funcionalidad profesional y entrega rápida garantizada.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-neon-green" />
                <span className="text-sm">contacto@tupaginafacil.cl</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-electric-blue" />
                <span className="text-sm">+56 9 1234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-neon-green" />
                <span className="text-sm">Santiago, Chile</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-green transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-green transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-green transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-green transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter & Social */}
        <div className="border-t border-dark-border pt-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Suscríbete a nuestro newsletter
              </h4>
              <p className="text-gray-400 mb-4">
                Recibe las últimas noticias sobre desarrollo web, SEO y tendencias digitales.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder-gray-500 focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/20 transition-all duration-300"
                />
                <button className="btn-primary px-6 py-3">
                  Suscribirse
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center lg:text-right">
              <h4 className="text-lg font-semibold text-white mb-4">
                Síguenos en redes sociales
              </h4>
              <div className="flex justify-center lg:justify-end gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-12 h-12 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center text-gray-400 ${social.color} hover:border-neon-green transition-all duration-300`}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-dark-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} TuPáginaFácil - Todos los derechos reservados.
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Hecho con ❤️ en Chile</span>
              <span>•</span>
              <span>Versión 1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

