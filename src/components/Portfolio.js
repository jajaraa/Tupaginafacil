import React from 'react';
import { ExternalLink, Eye, Star, Zap } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Restaurante El Sabor',
      category: 'Landing Page',
      description: 'Sitio web elegante para restaurante con menú digital, reservas online y galería de platos.',
      image: '/api/placeholder/400/300',
      features: ['Diseño responsive', 'Formulario de reservas', 'Galería de imágenes'],
      rating: 5,
      price: '$70.000 CLP',
      tech: ['React', 'TailwindCSS', 'Node.js']
    },
    {
      id: 2,
      title: 'TechStart Solutions',
      category: 'Plan Personalizado',
      description: 'Sitio corporativo completo con blog, panel de administración y integración con CRM.',
      image: '/api/placeholder/400/300',
      features: ['Blog integrado', 'Panel admin', 'SEO avanzado'],
      rating: 5,
      price: '$140.000 CLP',
      tech: ['Next.js', 'MongoDB', 'Stripe']
    },
    {
      id: 3,
      title: 'Moda Express Store',
      category: 'E-commerce',
      description: 'Tienda online completa con carrito de compras, pasarela de pagos y gestión de inventario.',
      image: '/api/placeholder/400/300',
      features: ['Carrito de compras', 'Pasarela de pagos', 'Panel de admin'],
      rating: 5,
      price: '$200.000 CLP',
      tech: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      id: 4,
      title: 'Consultoría Digital Pro',
      category: 'Plan Personalizado',
      description: 'Sitio web profesional para consultoría con formularios de contacto y testimonios.',
      image: '/api/placeholder/400/300',
      features: ['Formularios avanzados', 'Testimonios', 'SEO optimizado'],
      rating: 5,
      price: '$140.000 CLP',
      tech: ['Vue.js', 'Laravel', 'MySQL']
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-dark-bg to-black">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Nuestro Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mira algunos ejemplos de los sitios web que hemos creado para nuestros clientes. 
            Cada proyecto es único y diseñado a medida.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div className="card-neon h-full overflow-hidden">
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-dark-card to-dark-border rounded-t-xl overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-electric-blue/20 flex items-center justify-center">
                    <div className="text-center">
                      <Zap className="w-16 h-16 text-neon-green mx-auto mb-2" />
                      <p className="text-neon-green font-semibold">Vista previa del proyecto</p>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <button className="btn-primary mb-3">
                        <Eye className="w-5 h-5 mr-2" />
                        Ver demo
                      </button>
                      <button className="btn-secondary">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Visitar sitio
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-neon-green/20 text-neon-green text-sm font-semibold rounded-full mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-neon-green fill-current" />
                        ))}
                      </div>
                      <span className="text-neon-green font-bold">{project.price}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Características:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="text-xs text-gray-400 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-neon-green rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-electric-blue/20 text-electric-blue text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full btn-secondary mt-4 group-hover:bg-neon-green group-hover:text-black transition-all duration-300">
                    Solicitar proyecto similar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-dark-card to-dark-card border border-dark-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gradient mb-6">
              ¿Te gustó lo que ves?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Estos son solo algunos ejemplos de nuestro trabajo. 
              <span className="text-neon-green font-semibold"> Podemos crear algo igual de impresionante para tu negocio.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Ver más ejemplos
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Solicitar cotización
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-green mb-2">50+</div>
            <div className="text-gray-400">Proyectos completados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-electric-blue mb-2">100%</div>
            <div className="text-gray-400">Clientes satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-green mb-2">5 días</div>
            <div className="text-gray-400">Tiempo promedio</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-electric-blue mb-2">24/7</div>
            <div className="text-gray-400">Soporte disponible</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

