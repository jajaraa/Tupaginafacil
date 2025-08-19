import React from 'react';
import { Server, Mail, Search, Share2, Shield, Zap, Globe, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Server,
      title: 'Hosting + Dominio',
      description: 'Hosting de alta velocidad y dominio personalizado incluido en todos los planes. Sin costos ocultos.',
      color: 'neon-green'
    },
    {
      icon: Mail,
      title: 'Correos Corporativos',
      description: 'Correos electrónicos profesionales con tu dominio. Mantén una imagen corporativa consistente.',
      color: 'electric-blue'
    },
    {
      icon: Search,
      title: 'SEO Básico',
      description: 'Optimización para motores de búsqueda incluida. Mejora tu visibilidad online desde el primer día.',
      color: 'neon-green'
    },
    {
      icon: Share2,
      title: 'Redes Sociales',
      description: 'Integración completa con tus redes sociales. Comparte contenido fácilmente y aumenta tu alcance.',
      color: 'electric-blue'
    },
    {
      icon: Shield,
      title: 'Seguridad SSL',
      description: 'Certificado SSL gratuito para proteger tu sitio y dar confianza a tus visitantes.',
      color: 'neon-green'
    },
    {
      icon: Zap,
      title: 'Velocidad Optimizada',
      description: 'Sitios web optimizados para máxima velocidad. Mejora la experiencia del usuario y el SEO.',
      color: 'electric-blue'
    },
    {
      icon: Globe,
      title: 'Diseño Responsive',
      description: 'Tu sitio se ve perfecto en todos los dispositivos: computadoras, tablets y smartphones.',
      color: 'neon-green'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Diseño optimizado para móviles primero. La mayoría de usuarios navegan desde sus smartphones.',
      color: 'electric-blue'
    }
  ];

  return (
    <section id="caracteristicas" className="section-padding bg-gradient-to-b from-black to-dark-bg">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Todo incluido en tu plan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No solo creamos tu sitio web, también te damos todo lo necesario para que funcione perfectamente 
            desde el primer día.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="group">
                <div className="card h-full text-center hover:border-neon-green/50 transition-all duration-300">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-${feature.color} to-${isEven ? 'electric-blue' : 'neon-green'} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-dark-card to-dark-card border border-dark-border rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gradient mb-4">
              Servicios Adicionales
            </h3>
            <p className="text-xl text-gray-300">
              ¿Necesitas algo más? Ofrecemos servicios adicionales para complementar tu sitio web.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-neon-green" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">SEO Avanzado</h4>
              <p className="text-gray-400 mb-4">Optimización completa para motores de búsqueda</p>
              <span className="text-neon-green font-bold">Desde $30.000 CLP</span>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-electric-blue" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Mantenimiento</h4>
              <p className="text-gray-400 mb-4">Actualizaciones y soporte continuo</p>
              <span className="text-electric-blue font-bold">Desde $15.000 CLP/mes</span>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-neon-green" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Contenido</h4>
              <p className="text-gray-400 mb-4">Redacción de textos y creación de imágenes</p>
              <span className="text-neon-green font-bold">Desde $25.000 CLP</span>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gradient mb-8">
            ¿Por qué elegir TuPáginaFácil?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-neon-green" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Rápido</h4>
              <p className="text-gray-400">Entrega en solo 5 días hábiles</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-electric-blue" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Confiable</h4>
              <p className="text-gray-400">100% de clientes satisfechos</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-neon-green" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Profesional</h4>
              <p className="text-gray-400">Diseño moderno y funcional</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-electric-blue" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Completo</h4>
              <p className="text-gray-400">Todo incluido, sin sorpresas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

