import React from 'react';

const CTA: React.FC = () => {
    const openYoutubeChannel = () => {
        window.open('https://youtube.com/@iazoombr', '_blank', 'noopener,noreferrer');
    };

  return (
    <section id="cta" className="py-20 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
          Pronto para acelerar com Inteligência Artificial?
        </h2>
        <p className="text-gray-text max-w-2xl mx-auto mb-8">
          Não fique para trás na revolução digital. Inscreva-se no nosso canal do YouTube e junte-se à nossa comunidade para receber conteúdos exclusivos que vão transformar o seu negócio.
        </p>
        <button 
          onClick={openYoutubeChannel}
          className="bg-accent text-light font-bold text-lg px-8 py-4 rounded-full hover:bg-blue-500 transition-transform transform hover:scale-105 duration-300 shadow-lg shadow-accent/30"
        >
          INSCREVER-SE NO YOUTUBE
        </button>
      </div>
    </section>
  );
};

export default CTA;
