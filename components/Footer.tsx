import React, { useState, useEffect } from 'react';

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const YoutubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);
const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h-3.5a3.5 3.5 0 0 0-3.5 3.5V14a3.5 3.5 0 0 0 3.5 3.5h3.5v-3.5h-3.5V7.5a1.5 1.5 0 0 1 1.5-1.5H16V4z"></path><path d="M9 14.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"></path>
    </svg>
);
const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);

interface FooterProps {
    imageUrl: string;
    videoUrl: string;
    setImageUrl: (url: string) => void;
    setVideoUrl: (url: string) => void;
}

const Footer: React.FC<FooterProps> = ({ imageUrl, videoUrl, setImageUrl, setVideoUrl }) => {
  type View = 'CLOSED' | 'LOGIN' | 'EDIT_LINKS' | 'CHANGE_PASSWORD';
  const [view, setView] = useState<View>('CLOSED');
  const [password, setPassword] = useState('iazoombr');
  
  const [passwordInput, setPasswordInput] = useState('');
  const [tempImageUrl, setTempImageUrl] = useState('');
  const [tempVideoUrl, setTempVideoUrl] = useState('');
  const [passwordChangeData, setPasswordChangeData] = useState({ current: '', new: '', confirm: '' });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (view !== 'CLOSED') {
      setTempImageUrl(imageUrl);
      setTempVideoUrl(videoUrl);
      setPasswordInput('');
      setPasswordChangeData({ current: '', new: '', confirm: '' });
      setError('');
      setSuccess('');
    }
  }, [view, imageUrl, videoUrl]);

  const handleLogin = () => {
    setError('');
    if (passwordInput === password) {
      setView('EDIT_LINKS');
    } else {
      setError('Senha incorreta. Tente novamente.');
    }
  };

  const handleSaveLinks = () => {
    setImageUrl(tempImageUrl);
    setVideoUrl(tempVideoUrl);
    setView('CLOSED');
  };

  const handlePasswordChange = () => {
    setError('');
    setSuccess('');
    if (passwordChangeData.current !== password) {
      return setError('A senha atual está incorreta.');
    }
    if (passwordChangeData.new.length < 6) {
      return setError('A nova senha deve ter pelo menos 6 caracteres.');
    }
    if (passwordChangeData.new !== passwordChangeData.confirm) {
      return setError('A nova senha e a confirmação não correspondem.');
    }

    setPassword(passwordChangeData.new);
    setSuccess('Senha alterada com sucesso!');
    setTimeout(() => setView('EDIT_LINKS'), 2000);
  };

  const renderModalContent = () => {
    const modalTitle = {
      'LOGIN': 'Acesso Restrito',
      'EDIT_LINKS': 'Painel Administrativo',
      'CHANGE_PASSWORD': 'Alterar Senha'
    }[view];

    const baseInputClasses = "w-full bg-primary border border-accent/30 rounded-md p-3 text-light focus:ring-accent focus:border-accent outline-none transition-colors";

    return (
      <div className="bg-secondary p-8 rounded-lg shadow-2xl w-full max-w-lg m-4 border border-accent/30">
        <h2 className="text-2xl font-bold text-light mb-6">{modalTitle}</h2>
        
        {view === 'LOGIN' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="passwordAdmin" className="block text-sm font-medium text-gray-text mb-2">Senha</label>
              <input type="password" id="passwordAdmin" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleLogin()} className={baseInputClasses} />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <div className="mt-8 flex justify-end gap-4">
              <button onClick={() => setView('CLOSED')} className="bg-primary text-light font-semibold px-6 py-2 rounded-full hover:bg-gray-600 transition-colors">Cancelar</button>
              <button onClick={handleLogin} className="bg-accent text-light font-semibold px-6 py-2 rounded-full hover:bg-blue-500 transition-colors">Entrar</button>
            </div>
          </div>
        )}

        {view === 'EDIT_LINKS' && (
          <>
            <div className="space-y-4">
              <div>
                <label htmlFor="imageUrlAdmin" className="block text-sm font-medium text-gray-text mb-2">URL da Imagem (Quem Somos)</label>
                <input type="text" id="imageUrlAdmin" value={tempImageUrl} onChange={(e) => setTempImageUrl(e.target.value)} className={baseInputClasses} />
              </div>
              <div>
                <label htmlFor="videoUrlAdmin" className="block text-sm font-medium text-gray-text mb-2">URL do Vídeo (Quem Somos)</label>
                <input type="text" id="videoUrlAdmin" value={tempVideoUrl} onChange={(e) => setTempVideoUrl(e.target.value)} className={baseInputClasses} />
              </div>
            </div>
            <div className="flex justify-between items-center mt-8">
              <button onClick={() => setView('CHANGE_PASSWORD')} className="text-sm text-accent hover:underline">Alterar Senha</button>
              <div className="flex gap-4">
                <button onClick={() => setView('CLOSED')} className="bg-primary text-light font-semibold px-6 py-2 rounded-full hover:bg-gray-600 transition-colors">Cancelar</button>
                <button onClick={handleSaveLinks} className="bg-accent text-light font-semibold px-6 py-2 rounded-full hover:bg-blue-500 transition-colors">Salvar Alterações</button>
              </div>
            </div>
          </>
        )}

        {view === 'CHANGE_PASSWORD' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-text mb-2">Senha Atual</label>
              <input type="password" value={passwordChangeData.current} onChange={(e) => setPasswordChangeData(p => ({...p, current: e.target.value}))} className={baseInputClasses} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-text mb-2">Nova Senha</label>
              <input type="password" value={passwordChangeData.new} onChange={(e) => setPasswordChangeData(p => ({...p, new: e.target.value}))} className={baseInputClasses} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-text mb-2">Confirmar Nova Senha</label>
              <input type="password" value={passwordChangeData.confirm} onChange={(e) => setPasswordChangeData(p => ({...p, confirm: e.target.value}))} className={baseInputClasses} />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            {success && <p className="text-green-400 text-sm">{success}</p>}
            <div className="flex justify-between items-center mt-8">
              <button onClick={() => setView('EDIT_LINKS')} className="text-sm text-accent hover:underline">Voltar</button>
              <div className="flex gap-4">
                <button onClick={() => setView('CLOSED')} className="bg-primary text-light font-semibold px-6 py-2 rounded-full hover:bg-gray-600 transition-colors">Cancelar</button>
                <button onClick={handlePasswordChange} className="bg-accent text-light font-semibold px-6 py-2 rounded-full hover:bg-blue-500 transition-colors" disabled={!!success}>Salvar Nova Senha</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <footer className="bg-primary border-t border-secondary/50 py-8">
        <div className="container mx-auto px-6 text-center text-gray-text flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4">
                <p>&copy; {new Date().getFullYear()} IA ZOOM BR. Todos os direitos reservados.</p>
                <button onClick={() => setView('LOGIN')} className="hover:text-accent transition-colors" aria-label="Painel do Administrador">
                    <LockIcon />
                </button>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="https://youtube.com/@iazoombr" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><YoutubeIcon /></a>
                <a href="https://instagram.com/iazoombr" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><InstagramIcon /></a>
                <a href="https://tiktok.com/@iazoombr" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><TikTokIcon /></a>
            </div>
        </div>
      </footer>
      
      {view !== 'CLOSED' && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          {renderModalContent()}
        </div>
      )}
    </>
  );
};

export default Footer;