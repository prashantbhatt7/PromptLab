import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const content = `
## Why Prompts Are Important: The Engine of AI Creativity and Utility

In the age of Artificial Intelligence, particularly Large Language Models (LLMs) like GPT-4, the relationship between a user and the AI has fundamentally shifted. We are no longer just asking a machine to perform a single, simple task; we are engaging in a **collaborative dialogue**. In this dynamic, the **prompt** is not just a starting point—it is the **engine, the blueprint, and the very soul of the AI's output.**

A well-crafted prompt is arguably the most critical skill in interacting with modern AI. Here is a deep dive into why prompts are so important.

---

### 1. Prompts Define the Scope and Direction (The Compass)

Imagine asking a chef to "make food." The result will be chaotic. If you ask, "Make food," you get a vague, unhelpful response. A good prompt acts as a precise set of instructions, telling the AI exactly *what* to do, *how* to do it, and *for whom*.

* **Clarity over Ambiguity:** A vague prompt leads to generic, shallow answers. A detailed prompt specifies the **topic, format, tone, length, target audience, and constraints.**
* **Setting Boundaries:** Prompts allow you to set guardrails. You can tell the AI, "Write a 500-word blog post about renewable energy, but use a highly technical tone suitable for engineers, and avoid using jargon." This prevents the AI from drifting into overly simplistic or overly academic territory.

### 2. Prompts Determine the Quality and Relevance (The Quality Control)

The quality of the output is directly proportional to the quality of the input. A poor prompt yields a poor result, regardless of how powerful the underlying model is.

* **Specificity Drives Depth:** If you ask for "a summary of climate change," the AI will provide a surface-level overview. If you ask, "Summarize the key economic impacts of climate change on developing nations, focusing specifically on agricultural policy changes, and present the findings in bullet points," you receive a deep, highly relevant, and actionable summary.
* **Iterative Refinement:** Prompts enable a feedback loop. You don't have to start from scratch. You can take an initial, imperfect output and use a follow-up prompt like, "That was too formal. Rewrite the second paragraph to be more engaging and use analogies related to cooking." This iterative process is how complex projects are brought to life.

### 3. Prompts Unlock Creativity and Persona (The Catalyst)

AI models are powerful tools, but they are fundamentally pattern-matching machines. Prompts are the mechanism that forces the model to access and synthesize vast amounts of learned patterns in a novel way.

* **Role-Playing (Persona Prompting):** By assigning the AI a specific persona ("Act as a 19th-century historian," or "You are a witty, sarcastic marketing copywriter"), you instantly shift the AI's vocabulary, perspective, and tone. This is crucial for generating creative content, brainstorming, or complex simulations.
* **Constraint-Based Creativity:** Creativity often thrives under constraints. Giving the AI a specific format (e.g., "Write a poem in the style of Shakespeare, but use only words starting with the letter 'S'") forces the model to be highly inventive within defined boundaries, leading to surprising and unique results.

### 4. Prompts Drive Efficiency and Productivity (The Time Saver)

In a professional setting, time is money. A good prompt drastically reduces the time spent on drafting, researching, and refining.

* **Instant Drafting:** Instead of spending an hour staring at a blank page, a precise prompt can generate a first draft, an outline, or a complex piece of code in seconds.
* **Complex Task Decomposition:** Large, intimidating tasks (like "Develop a complete marketing strategy for a new SaaS product") can be broken down into manageable steps using a prompt. You can ask the AI to first generate the target audience, then the core value proposition, then the social media plan—all in sequence.

---

### Summary Table: Prompt vs. Output

| Feature | Poor Prompt | Excellent Prompt |
| :--- | :--- | :--- |
| **Result** | Generic, superficial, irrelevant | Specific, deep, highly relevant |
| **Tone** | Neutral, bland | Defined (e.g., urgent, humorous, academic) |
| **Format** | Unstructured text block | Defined (e.g., JSON, bullet points, essay, script) |
| **Effort** | Requires significant editing/rework | Requires minimal editing/refinement |
| **Goal** | To get *an* answer | To get the *exact* answer needed |

### Conclusion

The prompt is the **interface** between human intent and machine capability. If the AI is a powerful engine, the prompt is the **steering wheel, the fuel mixture, and the map.** Without a thoughtful, detailed, and intentional prompt, the AI remains a sophisticated calculator; with a masterful prompt, it becomes a powerful co-pilot, a creative partner, and an unparalleled productivity multiplier. Mastering prompting is not just about learning a new trick; **it is about learning how to communicate complex ideas effectively to the future of intelligence.**
`;

export default function Why() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0a0c] text-white font-sans selection:bg-indigo-500/30">
      {/* Liquid Glass Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] animate-pulse" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-24">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors group">
            <ArrowLeft className="w-4 h-4 text-indigo-400 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-medium tracking-widest uppercase text-indigo-200/70">Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 w-fit">
            <Zap className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-medium tracking-widest uppercase text-indigo-200/70">Why Prompts Matter</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
            The Engine of AI Creativity.
          </h1>
        </motion.header>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl prose prose-invert prose-indigo max-w-none"
        >
          <ReactMarkdown 
            components={{
              table: ({ children }) => (
                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse border border-white/10 rounded-xl overflow-hidden">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => <thead className="bg-white/5">{children}</thead>,
              th: ({ children }) => <th className="border border-white/10 p-4 text-left font-bold text-indigo-300">{children}</th>,
              td: ({ children }) => <td className="border border-white/10 p-4">{children}</td>,
              h2: ({ children }) => <h2 className="text-3xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-4">{children}</h2>,
              h3: ({ children }) => <h3 className="text-2xl font-bold mt-8 mb-4 text-indigo-300">{children}</h3>,
              p: ({ children }) => <p className="text-lg text-white/70 leading-relaxed mb-6">{children}</p>,
              ul: ({ children }) => <ul className="list-disc list-inside space-y-3 mb-6 text-white/70">{children}</ul>,
              li: ({ children }) => <li className="text-lg">{children}</li>,
              hr: () => <hr className="border-white/10 my-12" />,
              strong: ({ children }) => <strong className="text-white font-bold">{children}</strong>,
            }}
          >
            {content}
          </ReactMarkdown>
        </motion.div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <p className="text-sm text-white/20 flex flex-col sm:flex-row items-center justify-center gap-1">
            <span>Built with love by</span>
            <a 
              href="https://prashantbhatt.net/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-white/40 hover:text-white transition-colors"
            >
              Prashant Bhatt
            </a>
            <span className="hidden sm:inline mx-2 opacity-50">•</span>
            <span>Powered by React & Tailwind CSS</span>
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
