import React from 'react';

const sectors = [
  'Academias e Esportes',
  'Lojas Virtuais (E-commerce)',
  'Clínicas Médicas e Odontológicas',
  'Educação e Escolas',
  'Oficinas e Serviços Automotivos',
  'Eventos, Shows e Feiras',
  'Comércio e Varejo em Geral',
  'Padarias e Farmácias',
  'Restaurantes e Bares',
  'Startups de Tecnologia',
  'Agências de Marketing',
  'Consultorias',
];

const BusinessSectors: React.FC = () => {
  return (
    <section id="sectors" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Inteligência Artificial para Todos os Negócios
          </h2>
          <p className="text-gray-text">
            Seja qual for o seu ramo de negócios — Academia, Loja virtual, Clínicas, Escolas, Oficinas, Eventos ou Comércio em geral — temos conteúdos e soluções para você.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-primary border border-accent/20 text-gray-text font-medium py-2 px-5 rounded-full shadow-md hover:bg-accent/20 hover:text-light transition-colors duration-300 cursor-default">
              {sector}
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-lg text-highlight font-semibold">
          E muitos outros... Encontre a solução de IA para o seu negócio em nossos conteúdos!
        </p>
      </div>
    </section>
  );
};

export default BusinessSectors;
