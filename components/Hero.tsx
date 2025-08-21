import React from 'react';

const Hero: React.FC = () => {
    const scrollToServices = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <section id="hero" className="relative bg-primary text-center py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-accent opacity-20 rounded-full blur-3xl w-2/3 h-2/3 -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 bg-highlight opacity-10 rounded-full blur-3xl w-1/2 h-1/2 translate-x-1/4 translate-y-1/4"></div>

        <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl md:text-6xl font-black text-light leading-tight mb-4">
                Clareza e velocidade com IA para o seu negócio
            </h1>
            <p className="text-lg md:text-xl text-gray-text max-w-3xl mx-auto mb-8">
                O canal IA ZOOM BR traduz o universo da Inteligência Artificial para o cenário brasileiro, oferecendo conteúdos práticos para acelerar o seu negócio.
            </p>
            <button 
                onClick={scrollToServices}
                className="bg-accent text-light font-bold text-lg px-8 py-4 rounded-full hover:bg-blue-500 transition-transform transform hover:scale-105 duration-300 shadow-lg shadow-accent/30"
            >
                EXPLORAR CONTEÚDOS
            </button>
        </div>
    </section>
  );
};

export default Hero;
