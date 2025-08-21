# IA ZOOM BR - Landing Page com Inteligência Artificial

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

Uma landing page moderna e responsiva para serviços de IA no Brasil, com integração ao Gemini AI para funcionalidades interativas.

## 🔒 Segurança da API Key

**IMPORTANTE**: Este projeto usa a API do Google Gemini. Para manter sua chave segura:

1. ✅ O arquivo `.env.local` está no `.gitignore` e NÃO será enviado para o GitHub
2. ✅ Use o arquivo `.env.example` como referência
3. ✅ Configure variáveis de ambiente no seu serviço de hosting (Vercel, Netlify, etc.)

## 🚀 Como executar localmente

### Pré-requisitos
- Node.js (versão 16 ou superior)
- Uma chave da API do Google Gemini

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <seu-repositorio>
   cd ia-zoom-br
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure a API Key (SEGURO)**
   ```bash
   # Copie o arquivo de exemplo
   cp .env.example .env.local
   
   # Edite o .env.local e adicione sua chave da API
   # GEMINI_API_KEY=sua_chave_real_aqui
   ```

4. **Execute o projeto**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 📦 Deploy Seguro

### Vercel (Recomendado)

1. **Conecte seu repositório GitHub ao Vercel**
2. **Configure a variável de ambiente no painel do Vercel:**
   - Nome: `GEMINI_API_KEY`
   - Valor: sua chave da API do Gemini
3. **Deploy automático** - O Vercel fará o deploy automaticamente

### Netlify

1. **Conecte seu repositório ao Netlify**
2. **Configure a variável de ambiente:**
   - Site Settings → Environment Variables
   - Nome: `GEMINI_API_KEY`
   - Valor: sua chave da API
3. **Deploy automático**

## 🛡️ Checklist de Segurança

- [ ] ✅ Arquivo `.env.local` está no `.gitignore`
- [ ] ✅ Nunca commitar chaves da API no código
- [ ] ✅ Usar variáveis de ambiente no hosting
- [ ] ✅ Arquivo `.env.example` criado para referência

## 🔧 Estrutura do Projeto

```
ia-zoom-br/
├── components/          # Componentes React
├── api/                # Funções da API
├── .env.example        # Exemplo de variáveis de ambiente
├── .env.local          # Suas variáveis (NÃO commitado)
├── .gitignore          # Arquivos ignorados pelo Git
├── package.json        # Dependências e scripts
└── README.md          # Este arquivo
```

## 📱 Funcionalidades

- ✨ Design responsivo e moderno
- 🤖 Integração com Gemini AI
- 🇧🇷 Conteúdo em português brasileiro
- 🎨 Interface otimizada para conversão
- 🔒 Configuração segura da API

## 🆘 Suporte

Se encontrar problemas:
1. Verifique se a API key está configurada corretamente
2. Confirme que o arquivo `.env.local` não está sendo commitado
3. Teste localmente antes do deploy

---

**Desenvolvido com segurança e boas práticas para o mercado brasileiro de IA** 🇧🇷

