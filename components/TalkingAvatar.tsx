
import React, { useState, useEffect, useRef } from 'react';

// Icons
const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
);

const AvatarIcon: React.FC = () => (
    <div className="w-16 h-16 rounded-full bg-secondary border-2 border-highlight flex items-center justify-center shadow-lg shadow-highlight/20 hover:scale-110 transition-transform duration-300">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" stroke="#00FF9C" strokeWidth="1.5" strokeOpacity="0.5"/>
            <circle cx="9.5" cy="11.5" r="1.5" fill="#00FF9C" />
            <circle cx="14.5" cy="11.5" r="1.5" fill="#00FF9C" />
            <path d="M9 16C9.85625 16.6337 10.8858 17 12 17C13.1142 17 14.1438 16.6337 15 16" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    </div>
);

// Message Type
interface Message {
    role: 'user' | 'model';
    text: string;
}

// Typing Indicator Component
const TypingIndicator: React.FC = () => (
    <div className="flex items-center space-x-2 p-2">
        <span className="text-gray-text text-sm">IAZOOMBR está digitando</span>
        <div className="w-1.5 h-1.5 bg-highlight rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
        <div className="w-1.5 h-1.5 bg-highlight rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        <div className="w-1.5 h-1.5 bg-highlight rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
    </div>
);

const TalkingAvatar: React.FC = () => {
    const [isWidgetVisible, setIsWidgetVisible] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', text: 'Olá! Eu sou a IAZOOMBR, sua consultora de IA para negócios. Como posso ajudar hoje?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initialize Widget Visibility
    useEffect(() => {
        const widgetTimer = setTimeout(() => setIsWidgetVisible(true), 2000);
        return () => clearTimeout(widgetTimer);
    }, []);

    // Auto-scroll to bottom of messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', text: inputValue };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ messages: updatedMessages }),
            });

            if (!response.ok || !response.body) {
                const errorText = await response.text();
                throw new Error(`API error: ${response.statusText} - ${errorText}`);
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let modelResponse = '';
            setMessages(prev => [...prev, { role: 'model', text: '' }]);

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                
                modelResponse += decoder.decode(value, { stream: true });
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].text = modelResponse;
                    return newMessages;
                });
            }

        } catch (error) {
            console.error('Error sending message:', error);
            let errorMessage = 'Ocorreu um erro ao processar sua mensagem. Tente novamente.';

            if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
                errorMessage = 'Não foi possível conectar ao servidor. Para rodar localmente, você precisa do Vercel CLI. Instale com `npm i -g vercel` e depois rode `vercel dev` na pasta do projeto.';
            } else if (error instanceof Error) {
                 if (error.message.includes('API key is not configured')) {
                    errorMessage = 'A chave da API do Gemini não está configurada no servidor. Verifique se você tem um arquivo `.env.local` na raiz do projeto contendo `API_KEY=SUA_CHAVE_AQUI` e reinicie o servidor.';
                } else if (error.message.includes('API error')) {
                    errorMessage = 'Ocorreu um erro no servidor ao se comunicar com a IA. Verifique o console do servidor (`vercel dev`) para mais detalhes.';
                }
            }
            
            setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isWidgetVisible) return null;

    return (
        <>
            <button
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="fixed bottom-5 right-5 z-50"
                aria-label={isChatOpen ? "Fechar chat" : "Abrir chat com assistente IA"}
            >
                <AvatarIcon />
            </button>

            <div className={`
                fixed bottom-24 right-5 z-40
                w-[calc(100vw-40px)] max-w-sm h-[60vh] max-h-[500px]
                bg-secondary shadow-2xl rounded-lg border border-accent/30
                flex flex-col
                transform transition-all duration-300 ease-out
                ${isChatOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
            `} role="dialog" aria-modal="true" aria-hidden={!isChatOpen} aria-labelledby="chat-heading">
                {/* Header */}
                <header className="flex items-center justify-between p-4 bg-primary rounded-t-lg flex-shrink-0">
                    <h3 id="chat-heading" className="text-light font-bold">IAZOOMBR Assistente</h3>
                    <button onClick={() => setIsChatOpen(false)} className="text-gray-text hover:text-light" aria-label="Fechar chat">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </header>

                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4" aria-live="polite">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] p-3 rounded-lg ${msg.role === 'user' ? 'bg-accent text-light' : 'bg-primary text-light'}`}>
                                <p className="whitespace-pre-wrap text-sm">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && <div className="flex justify-start"><TypingIndicator /></div>}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Form */}
                <form onSubmit={handleSendMessage} className="p-4 border-t border-accent/30 flex items-center gap-2 flex-shrink-0">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Digite sua mensagem..."
                        className="flex-1 bg-primary border border-accent/30 rounded-full py-2 px-4 text-light focus:ring-accent focus:border-accent outline-none"
                        disabled={isLoading}
                        aria-label="Sua mensagem"
                    />
                    <button type="submit" disabled={isLoading || !inputValue.trim()} className="bg-accent rounded-full p-3 text-light hover:bg-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors" aria-label="Enviar mensagem">
                        <SendIcon className="w-5 h-5" />
                    </button>
                </form>
            </div>
        </>
    );
};

export default TalkingAvatar;
