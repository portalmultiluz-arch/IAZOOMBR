
import React from 'react';

const SearchIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

const ShieldIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);

const RocketIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.18-.65-.87-2.2-.86-3.18.05z"></path><path d="M12 12.73c.14-.4.27-.8.4-1.2.72-2.14 2.1-4 4.19-5.18S20.44 4 22 4c0 0-2.04 1.5-3.5 3.55-1.45 2.04-2.5 4-3.55 5.55-1.06 1.55-2.5 3.5-2.5 3.5s-2.68-.45-3.5-2.5c-.82-2.05.5-3.5.5-3.5Z"></path></svg>
);

const AstrologyIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.9 4.9 1.4 1.4" />
        <path d="m17.7 17.7 1.4 1.4" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m4.9 19.1 1.4-1.4" />
        <path d="m17.7 6.3 1.4-1.4" />
    </svg>
);

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-secondary p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg h-full flex flex-col">
        <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 flex-shrink-0">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-light mb-3">{title}</h3>
        <p className="text-gray-text flex-grow">{description}</p>
    </div>
);


const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">Conteúdos que Geram Resultados</h2>
          <p className="text-gray-text">Explore os roteiros de vídeo que desenvolvemos para o canal. Cada um é uma ferramenta poderosa para engajar empresários e demonstrar o valor da IA.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
                icon={<SearchIcon className="w-8 h-8 text-light"/>} 
                title="Sua Empresa Invisível no Google?" 
                description="Um roteiro de vídeo completo para provar a empresários como a IA é a arma secreta para sair da invisibilidade do Google e atrair novos clientes." 
            />
            <ServiceCard 
                icon={<ShieldIcon className="w-8 h-8 text-light"/>} 
                title="Vencendo o Medo da IA" 
                description="Transforme o medo e a resistência em ação. Este roteiro mostra como a IA supera as limitações do negócio e vence a concorrência." 
            />
            <ServiceCard 
                icon={<RocketIcon className="w-8 h-8 text-light"/>} 
                title="Seu Concorrente Já Usa IA. E Você?" 
                description="Crie um senso de urgência com este roteiro. A mensagem é clara: seu concorrente já está usando IA. O que você está esperando para começar?" 
            />
            <ServiceCard 
                icon={<AstrologyIcon className="w-8 h-8 text-light"/>} 
                title="IAZOOMBR Astrológica" 
                description="O empresário busca ajuda nos astros, mas é a IAZOOMBR Astrológica que revela a verdade: o medo da IA está sabotando seus negócios. A boa notícia: os astros confirmam que ainda há solução!"
            />
        </div>
      </div>
    </section>
  );
};

export default Services;
