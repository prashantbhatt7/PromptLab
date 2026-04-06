import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

export async function generateStructuredPrompt(query: string): Promise<string> {
  if (!apiKey) {
    throw new Error("Gemini API key is missing. Please configure it in the Secrets panel.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an expert Prompt Engineer. Your task is to take a simple, short user query (which might be in any language) and transform it into a highly structured, professional, and effective AI prompt. 
      
      CRITICAL: The generated prompt MUST ALWAYS be in English, even if the user's query is in another language.
      
      The generated prompt should include:
      1. Role/Persona
      2. Clear Task Description
      3. Context/Background
      4. Constraints/Requirements
      5. Desired Output Format
      
      User Query: "${query}"
      
      Structured Prompt:`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      },
    });

    return response.text || "Failed to generate prompt. Please try again.";
  } catch (error) {
    console.error("Error generating prompt:", error);
    return "Error: " + (error instanceof Error ? error.message : "Unknown error");
  }
}

export async function refinePrompt(currentPrompt: string, refinement: string): Promise<string> {
  if (!apiKey) {
    throw new Error("Gemini API key is missing. Please configure it in the Secrets panel.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an expert Prompt Engineer. I have a current prompt and I want to refine it based on additional instructions.
      
      CRITICAL: The updated prompt MUST ALWAYS be in English, even if the refinement instructions are in another language.
      
      Current Prompt:
      "${currentPrompt}"
      
      Additional Instructions/Refinement:
      "${refinement}"
      
      Updated Structured Prompt:`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || currentPrompt;
  } catch (error) {
    console.error("Error refining prompt:", error);
    return currentPrompt;
  }
}
