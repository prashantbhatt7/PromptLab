import { PromptTemplate } from './types';

export const PROMPT_TEMPLATES: PromptTemplate[] = [
  {
    id: 'general',
    category: 'General',
    title: 'General Assistant',
    description: 'A versatile template for any general AI query.',
    structure: 'I want you to act as a [Role]. Your task is to [Task]. Please provide the output in [Format] format. The target audience is [Audience]. Additional context: [Context].',
    fields: [
      { id: 'Role', label: 'AI Role', placeholder: 'Helpful assistant, Expert researcher...', type: 'text' },
      { id: 'Task', label: 'What to do?', placeholder: 'Explain quantum physics, Summarize this text...', type: 'textarea' },
      { id: 'Format', label: 'Output Format', placeholder: 'Bullet points, Essay, Table...', type: 'text' },
      { id: 'Audience', label: 'Target Audience', placeholder: 'Beginners, Professionals, Kids...', type: 'text' },
      { id: 'Context', label: 'Additional Context', placeholder: 'Keep it concise, Use simple language...', type: 'text' },
    ],
  },
  {
    id: 'coding',
    category: 'Coding',
    title: 'Code Architect',
    description: 'Generate clean, efficient code snippets with context.',
    structure: 'Act as an expert [Language] developer. Your task is to [Task]. The context for this is [Context]. Please ensure the code follows these requirements: [Requirements]. Provide comments and explain the logic.',
    fields: [
      { id: 'Language', label: 'Programming Language', placeholder: 'TypeScript, Python, Rust...', type: 'text' },
      { id: 'Task', label: 'Specific Task', placeholder: 'Create a generic sorting function...', type: 'textarea' },
      { id: 'Context', label: 'Project Context', placeholder: 'A React application using Vite...', type: 'text' },
      { id: 'Requirements', label: 'Key Requirements', placeholder: 'Performance optimized, type-safe...', type: 'text' },
    ],
  },
  {
    id: 'copywriting',
    category: 'Copywriting',
    title: 'Marketing Genius',
    description: 'Craft compelling copy for any audience.',
    structure: 'Write a [Goal] for [Product] targeting [Audience]. The tone should be [Tone]. Focus on the unique selling points and include a clear call to action.',
    fields: [
      { id: 'Goal', label: 'Content Goal', placeholder: 'A catchy Instagram caption...', type: 'text' },
      { id: 'Product', label: 'Product/Service', placeholder: 'A new SaaS tool for designers...', type: 'text' },
      { id: 'Audience', label: 'Target Audience', placeholder: 'Freelance graphic designers...', type: 'text' },
      { id: 'Tone', label: 'Brand Tone', placeholder: 'Professional yet approachable...', type: 'text' },
    ],
  },
  {
    id: 'image-gen',
    category: 'Image Generation',
    title: 'Visual Artist',
    description: 'Detailed prompts for Midjourney or DALL-E.',
    structure: 'A high-quality, detailed [Subject] in the style of [Style]. Lighting: [Lighting]. Composition: [Composition]. Cinematic rendering, 8k resolution, highly detailed textures.',
    fields: [
      { id: 'Subject', label: 'Main Subject', placeholder: 'A futuristic cyberpunk city...', type: 'text' },
      { id: 'Style', label: 'Artistic Style', placeholder: 'Oil painting, Cyberpunk, Minimalist...', type: 'text' },
      { id: 'Lighting', label: 'Lighting Style', placeholder: 'Golden hour, Neon glow, Moody...', type: 'text' },
      { id: 'Composition', label: 'Composition', placeholder: 'Wide angle, Close-up, Bird\'s eye view...', type: 'text' },
    ],
  },
  {
    id: 'roleplay',
    category: 'Roleplaying',
    title: 'Character Master',
    description: 'Immersive roleplay scenarios and characters.',
    structure: 'You are [Character] in a [Setting]. The current scenario is [Scenario]. Your tone should be [Tone]. Respond to the user as if you are truly this character, maintaining consistency in your personality and knowledge.',
    fields: [
      { id: 'Character', label: 'Who are you?', placeholder: 'A wise old wizard from the north...', type: 'text' },
      { id: 'Setting', label: 'World/Setting', placeholder: 'A floating city in the clouds...', type: 'text' },
      { id: 'Scenario', label: 'Current Scenario', placeholder: 'The user has just discovered a secret map...', type: 'textarea' },
      { id: 'Tone', label: 'Personality Tone', placeholder: 'Mysterious, cryptic, and helpful...', type: 'text' },
    ],
  },
];
