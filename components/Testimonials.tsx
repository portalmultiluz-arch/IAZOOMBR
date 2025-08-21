import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const TestimonialCard: React.FC<{ quote: string; author: string; company: string; }> = ({ quote, author, company }) => (
  <div className="bg-secondary p-8 rounded-lg shadow-xl border border-accent/20">
    <div className="flex text-yellow-400 mb-4">
      <StarIcon className="w-5 h-5" />
      <StarIcon className="w-5 h-5" />
      <StarIcon className="w-5 h-5" />
      <StarIcon className="w-5 h-5" />
      <StarIcon className="w-5 h-5" />
    </div>
    <p className="text-gray-text italic mb-6">"{quote}"</p>
    <div>
      <p className="font-bold text-light">{author}</p>
      <p className="text-sm text-accent">{company}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">O que a nossa comunidade diz</h2>
          <p className="text-gray-text">A opinião de quem nos acompanha.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="O conteúdo do IA ZOOM BR abriu minha mente para as possibilidades da IA. Já estou aplicando várias dicas no meu e-commerce!"
            author="Juliana Costa"
            company="Empreendedora Digital"
          />
          <TestimonialCard 
            quote="Finalmente um canal que fala de IA sem complicação e com foco no Brasil. Didática excelente e temas super relevantes. Recomendo!"
            author="Marcos Andrade"
            company="Seguidor no YouTube"
          />
          <TestimonialCard 
            quote="Estava perdido sobre como começar a usar IA. O canal me deu o norte que eu precisava. O conteúdo sobre automação é ouro!"
            author="Pedro Martins"
            company="Gestor de Marketing"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
