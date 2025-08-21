
import React from 'react';

const CameraIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
);

const PlayIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
);

interface AboutProps {
  imageUrl: string;
  videoUrl: string;
}

const About: React.FC<AboutProps> = ({ imageUrl, videoUrl }) => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-light">
                Quem Somos
            </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <div className="relative">
                    <img 
                        src={imageUrl}
                        alt="Inteligência Artificial e Negócios" 
                        className="rounded-lg shadow-2xl w-full"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://placehold.co/600x400/222222/FF0000/png?text=Erro+ao+carregar'; }}
                    />
                </div>
                <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
                    <a 
                        href={imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-primary text-light font-semibold px-5 py-3 rounded-full hover:bg-accent/20 transition-colors duration-300 border border-accent/30"
                    >
                        <CameraIcon className="w-5 h-5" />
                        Ver Imagem
                    </a>
                    <a
                        href={videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-accent text-light font-semibold px-5 py-3 rounded-full hover:bg-blue-500 transition-colors duration-300"
                    >
                        <PlayIcon className="w-5 h-5" />
                        Assistir Vídeo
                    </a>
                </div>
            </div>
            <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-light mb-4">
                  Descomplicando a Inteligência Artificial para o mercado brasileiro.
                </h3>
                <p className="text-gray-text mb-6">
                    IA ZOOM BR é o seu canal direto para o mundo da Inteligência Artificial aplicada a negócios. Nossa missão é fornecer clareza e velocidade, mostrando como a IA pode ser uma ferramenta poderosa para empreendedores e empresas no Brasil.
                </p>
                <p className="text-gray-text">
                    De automação de marketing a análise de dados, exploramos as tendências e aplicações práticas que realmente importam para a sua realidade, com uma linguagem acessível e foco em resultados.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
