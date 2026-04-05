export interface PromptField {
  id: string;
  label: string;
  placeholder: string;
  type: 'text' | 'textarea' | 'select';
  options?: string[];
}

export interface PromptTemplate {
  id: string;
  category: string;
  title: string;
  description: string;
  structure: string; // e.g. "Act as a [Language] expert. Write a [Task]..."
  fields: PromptField[];
}

export interface GeneratedPrompt {
  id: string;
  content: string;
  timestamp: number;
  category: string;
}
