import React from 'react';
import { Check, Star, Zap, ShoppingCart, Palette } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: 'Landing Page',
      price: '$70.000',
      currency: 'CLP',
      description: 'Sitio de 1 página (landing profesional con secciones básicas)',
      features: [
        'Diseño responsive y moderno',
        'Hasta 5 secciones',
        'Formulario de contacto',
        'Optimización SEO básica',
        'Hosting + dominio incluido',
        'Entrega en 5 días hábiles'
      ],
      icon: Zap,
      popular: false,
      color: 'neon-green'
    },
    {
      name: 'Plan Personalizado',
      price: '$140.000',
      currency: 'CLP',
      description: 'Sitio web a medida con diseño único',
      features: [
        'Diseño completamente personalizado',
        'Hasta 10 secciones',
        'Blog integrado',
        'Panel de administración',
        'SEO avanzado',
        'Correos corporativos',
        'Mantenimiento 1 mes'
      ],
      icon: Palette,
      popular: true,
      color: 'electric-blue'
    },
    {
      name: 'Plan E-commerce',
      price: '$200.000',
      currency: 'CLP',
      description: 'Tienda online con carrito de compras y pasarela de pago',
      features: [
        'Tienda online completa',
        'Carrito de compras',
        'Pasarela de pagos',
        'Gestión de inventario',
        'Panel de administración',
        'Correos corporativos',
        'Mantenimiento 3 meses'
      ],
      icon: ShoppingCart,
      popular: false,
      color: 'neon-green'
    }
  ];

  return (
    <section id="planes" className="section-padding bg-gradient-to-b from-dark-bg to-black">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Planes que se adaptan a ti
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Elige el plan perfecto para tu negocio. Todos incluyen hosting, dominio y entrega rápida.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const isPopular = plan.popular;
            
            return (
              <div
                key={index}
                className={`relative ${isPopular ? 'scale-105' : ''} transition-all duration-300`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-neon-green to-electric-blue text-black px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Más Popular
                    </div>
                  </div>
                )}
                
                <div className={`card-neon h-full flex flex-col ${
                  isPopular 
                    ? 'border-electric-blue shadow-lg shadow-electric-blue/30' 
                    : 'border-neon-green/30'
                }`}>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-${plan.color} to-${plan.color === 'neon-green' ? 'electric-blue' : 'neon-green'} rounded-xl mb-4`}>
                      <IconComponent className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-black text-gradient">{plan.price}</span>
                      <span className="text-lg text-gray-400 ml-1">{plan.currency}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <div className="flex-1 mb-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    isPopular
                      ? 'bg-gradient-to-r from-electric-blue to-neon-green text-black hover:shadow-lg hover:shadow-electric-blue/50'
                      : 'border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black'
                  }`}>
                    Elegir {plan.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center bg-dark-card border border-dark-border rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-neon-green mb-4">¿Qué incluye tu plan?</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-neon-green" />
                  <span>Hosting + dominio incluido</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-neon-green" />
                  <span>Correos corporativos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-neon-green" />
                  <span>SEO básico incluido</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-neon-green" />
                  <span>Integración con redes sociales</span>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-electric-blue mb-4">Información importante</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong>Pago único:</strong> No hay cuotas mensuales ocultas</p>
                <p><strong>Tiempo de entrega:</strong> 5 días hábiles garantizados</p>
                <p><strong>Mantenimiento:</strong> Servicio opcional disponible</p>
                <p><strong>Soporte:</strong> 24/7 durante el desarrollo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;

