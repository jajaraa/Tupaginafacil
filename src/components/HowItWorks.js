import React from 'react';
import { CheckCircle, MessageCircle, Rocket, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Elige tu plan',
      description: 'Selecciona el plan que mejor se adapte a tus necesidades. Desde una landing page hasta una tienda online completa.',
      icon: CheckCircle,
      color: 'neon-green'
    },
    {
      number: '02',
      title: 'Nos contactamos contigo',
      description: 'Nuestro equipo se pondrá en contacto contigo en menos de 24 horas para discutir los detalles de tu proyecto.',
      icon: MessageCircle,
      color: 'electric-blue'
    },
    {
      number: '03',
      title: 'En 5 días hábiles tienes tu web lista',
      description: 'Trabajamos rápidamente para entregarte un sitio web profesional y funcional en solo 5 días hábiles.',
      icon: Rocket,
      color: 'neon-green'
    }
  ];

  return (
    <section id="como-funciona" className="section-padding bg-gradient-to-b from-black to-dark-bg">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            ¿Cómo funciona?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            El proceso es simple, rápido y transparente. En solo 3 pasos tendrás tu sitio web profesional.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-green via-electric-blue to-neon-green transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLast = index === steps.length - 1;
              
              return (
                <div key={index} className="relative">
                  {/* Step Number */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-${step.color} to-${step.color === 'neon-green' ? 'electric-blue' : 'neon-green'} rounded-full text-black font-black text-2xl mb-4 shadow-lg shadow-${step.color}/30`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-dark-card border-2 border-${step.color}/30 rounded-xl mb-6 hover:border-${step.color} transition-all duration-300`}>
                      <IconComponent className={`w-8 h-8 text-${step.color}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow (except for last step) */}
                  {!isLast && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                      <div className="w-12 h-12 bg-dark-card border-2 border-electric-blue/30 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-electric-blue" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-dark-card to-dark-card border border-dark-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gradient mb-6">
              ¿Listo para empezar?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              No esperes más para tener tu presencia digital profesional. 
              <span className="text-neon-green font-semibold"> El proceso es más fácil de lo que piensas.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Comenzar ahora
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Ver ejemplos
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-neon-green" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Sin sorpresas</h4>
            <p className="text-gray-400">Precios claros y transparentes desde el inicio</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-electric-blue" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Entrega rápida</h4>
            <p className="text-gray-400">Tu sitio web listo en solo 5 días hábiles</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-neon-green" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Soporte 24/7</h4>
            <p className="text-gray-400">Estamos aquí para ayudarte en todo momento</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

