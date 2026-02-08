
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getKitAdvisorResponse = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Você é um consultor profissional de uniformes de futebol da Lucas Imports (www.lucasimports.com.br), uma loja de jerseys premium. 
      O usuário está perguntando: "${query}". 
      Sugira os melhores tipos de camisas (Home, Away, Third, Retrô) com base no interesse dele. 
      Seja breve, entusiasta e foque em estilo, legado e qualidade. 
      Mencione clubes ou países específicos se forem relevantes para a pergunta. 
      Sempre reforce que ele pode encontrar essas peças em nosso domínio oficial lucasimports.com.br.
      Responda SEMPRE em português brasileiro.
      Não mencione preços ou níveis de estoque específicos, a menos que sejam gerais.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 250,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Estou tendo um probleminha para conectar ao meu banco de dados de futebol. Mas você pode conferir todos os nossos mantos em lucasimports.com.br!";
  }
};
