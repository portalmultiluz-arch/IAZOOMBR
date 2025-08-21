// Localizado em api/chat.ts
// Esta é uma Vercel Edge Function, que é rápida e eficiente para streaming.
import { GoogleGenerativeAI } from '@google/genai';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
    }

    if (!process.env.GEMINI_API_KEY) {
        return new Response(JSON.stringify({ error: 'API key is not configured' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
    
    try {
        const { messages } = await req.json(); // messages: {role: 'user' | 'model', text: string}[]
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

        // Extrai a última mensagem do usuário
        const lastUserMessage = messages[messages.length - 1];
        if (!lastUserMessage || lastUserMessage.role !== 'user') {
            throw new Error('No valid user message found at the end of the history.');
        }
        
        const model = genAI.getGenerativeModel({ 
            model: 'gemini-1.5-flash',
            systemInstruction: 'Você é a IAZOOMBR, uma assistente de IA especialista em negócios para o mercado brasileiro. Sua missão é ajudar empreendedores e empresas a entenderem como a Inteligência Artificial pode beneficiar seus negócios. Seja amigável, profissional e use uma linguagem clara e acessível em português do Brasil.'
        });

        const result = await model.generateContent(lastUserMessage.text);
        const response = await result.response;
        const text = response.text();
        
        return new Response(JSON.stringify({ text }), {
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error("Error in Gemini API call:", error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        return new Response(JSON.stringify({ error: `Internal Server Error: ${errorMessage}` }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
