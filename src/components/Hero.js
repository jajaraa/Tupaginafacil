import React from 'react';
import { ArrowRight, Sparkles, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-black">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,157,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,157,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="container-custom text-center relative z-10">
        {/* Logo y Nombre */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-neon-green to-electric-blue rounded-2xl mb-6 shadow-2xl shadow-neon-green/30">
            <Globe className="w-12 h-12 text-black" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-gradient glow-text mb-4">
            TuPáginaFácil
          </h1>
          <div className="flex items-center justify-center gap-2 text-neon-green mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-lg font-medium">Tu sitio web profesional, rápido y fácil</span>
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Eslogan */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transformamos tu idea en una presencia digital impactante. 
          <span className="text-neon-green font-semibold"> Diseño moderno, funcionalidad profesional</span> y 
          <span className="text-electric-blue font-semibold"> entrega rápida garantizada</span>.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="btn-primary text-lg px-10 py-5 group">
            <span className="flex items-center gap-3">
              Quiero mi página
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          <button className="btn-secondary text-lg px-10 py-5">
            Ver planes
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neon-green mb-2">5 días</div>
            <div className="text-gray-400">Tiempo de entrega</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-electric-blue mb-2">100%</div>
            <div className="text-gray-400">Satisfacción garantizada</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neon-green mb-2">24/7</div>
            <div className="text-gray-400">Soporte disponible</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-green rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-green rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
