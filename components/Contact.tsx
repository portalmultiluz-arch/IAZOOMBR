import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulating a form submission
    console.log('Form data submitted:', formData);
    setTimeout(() => {
        if(formData.name && formData.email && formData.message) {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } else {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    }, 1500);
  };

  const scrollToForm = () => {
    const nameInput = document.getElementById('name');
    if (nameInput) {
      nameInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      nameInput.focus({ preventScroll: true });
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">Fale Conosco!</h2>
          <p className="text-gray-text">Tem alguma dúvida, sugestão de pauta ou proposta de parceria? Preencha o formulário abaixo e nossa equipe entrará em contato.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-text mb-2">Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-primary border border-accent/30 rounded-md p-3 text-light focus:ring-accent focus:border-accent outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-text mb-2">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-primary border border-accent/30 rounded-md p-3 text-light focus:ring-accent focus:border-accent outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-text mb-2">Mensagem</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-primary border border-accent/30 rounded-md p-3 text-light focus:ring-accent focus:border-accent outline-none"
                placeholder="Fale um pouco sobre sua ideia ou dúvida..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-accent text-light font-bold w-full md:w-auto text-lg px-8 py-3 rounded-full hover:bg-blue-500 transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </div>
          </form>
          {status === 'success' && <p className="text-center mt-4 text-green-400">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>}
          {status === 'error' && <p className="text-center mt-4 text-red-400">Ocorreu um erro. Por favor, tente novamente.</p>}
          
          <p className="text-center mt-6 text-gray-text">
            Ou <button onClick={scrollToForm} className="text-accent hover:underline font-semibold bg-transparent border-none p-0 cursor-pointer">clique aqui para ser direcionado ao formulário</button>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;