import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'about', text: 'Sobre' },
    { id: 'services', text: 'Conteúdos' },
    { id: 'sectors', text: 'Aplicações' },
    { id: 'testimonials', text: 'Comunidade' },
    { id: 'contact', text: 'Contato' },
  ];

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-md shadow-black/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold cursor-pointer" onClick={() => scrollToSection('hero')}>
          <span className="text-light">IA</span>
          <span className="text-highlight">ZOOM</span>
          <span className="text-brazil">BR</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-text hover:text-light transition-colors duration-300"
            >
              {link.text}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-accent text-light font-semibold px-6 py-2 rounded-full hover:bg-blue-500 transition-colors duration-300"
          >
            Fale Conosco
          </button>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-light focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-secondary">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-text hover:text-light transition-colors duration-300 w-full py-2"
              >
                {link.text}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-accent text-light font-semibold px-6 py-2 rounded-full hover:bg-blue-500 transition-colors duration-300 w-11/12"
            >
              Fale Conosco
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;