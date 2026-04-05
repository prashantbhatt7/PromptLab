import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Copy, 
  Trash2, 
  Check, 
  RefreshCw,
  Send,
  Zap,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { generateStructuredPrompt, refinePrompt } from '../lib/gemini';

export default function Home() {
  const [query, setQuery] = useState('');
  const [refinement, setRefinement] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isRefining, setIsRefining] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [showRefinement, setShowRefinement] = useState(false);
  
  const outputRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    if (!query.trim() || isGenerating) return;
    setIsGenerating(true);
    setGeneratedPrompt('');
    setShowRefinement(false);
    
    try {
      const result = await generateStructuredPrompt(query);
      setGeneratedPrompt(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRefine = async () => {
    if (!refinement.trim() || isRefining || !generatedPrompt) return;
    setIsRefining(true);
    try {
      const result = await refinePrompt(generatedPrompt, refinement);
      setGeneratedPrompt(result);
      setRefinement('');
    } catch (error) {
      console.error(error);
    } finally {
      setIsRefining(false);
    }
  };

  const handleCopy = async () => {
    if (!generatedPrompt) return;
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleClear = () => {
    setQuery('');
    setGeneratedPrompt('');
    setRefinement('');
    setShowRefinement(false);
  };

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
          className="text-center mb-16"
        >
          <div className="flex justify-center gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-medium tracking-widest uppercase text-indigo-200/70">PromptLab</span>
            </div>
            <Link to="/why" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors group">
              <HelpCircle className="w-4 h-4 text-indigo-400 group-hover:rotate-12 transition-transform" />
              <span className="text-xs font-medium tracking-widest uppercase text-indigo-200/70">Why?</span>
            </Link>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
            Prompt Engineering <br /> Made Simple.
          </h1>
          <p className="text-lg text-white/40 max-w-xl mx-auto leading-relaxed">
            Enter a simple query and let our AI transform it into a high-quality, structured prompt in seconds.
          </p>
        </motion.header>

        {/* Main Input Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative group mb-12"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-2 flex flex-col md:flex-row items-center gap-2">
            <input 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              placeholder="What do you want to generate? (e.g. 'write a story about a robot')"
              className="w-full bg-transparent border-none outline-none px-6 py-4 text-lg placeholder:text-white/20"
            />
            <button 
              onClick={handleGenerate}
              disabled={!query.trim() || isGenerating}
              className="w-full md:w-auto px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group/btn"
            >
              {isGenerating ? (
                <RefreshCw className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Generate
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Output Section */}
        <AnimatePresence>
          {generatedPrompt && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-6"
            >
              <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-white/[0.02]">
                  <h3 className="text-sm font-semibold tracking-widest uppercase text-white/40 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Structured Prompt
                  </h3>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={handleCopy}
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group/copy"
                      title="Copy Prompt"
                    >
                      {isCopied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-white/60 group-hover/copy:text-white" />}
                    </button>
                    <button 
                      onClick={handleClear}
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group/trash"
                      title="Clear"
                    >
                      <Trash2 className="w-5 h-5 text-white/60 group-hover/trash:text-red-400" />
                    </button>
                  </div>
                </div>
                
                <div 
                  ref={outputRef}
                  className="p-8 md:p-12 text-lg md:text-xl font-medium leading-relaxed text-white/90 whitespace-pre-wrap max-h-[500px] overflow-y-auto custom-scrollbar"
                >
                  {generatedPrompt}
                </div>

                {/* Bottom Copy Button */}
                <div className="px-8 pb-6 flex justify-end">
                  <button 
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group/copy-bottom shadow-lg"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-bold text-green-400">Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-white/60 group-hover/copy-bottom:text-white" />
                        <span className="text-sm font-bold text-white/60 group-hover/copy-bottom:text-white">Copy Full Prompt</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Refinement Input */}
                <div className="px-8 pb-8">
                  {!showRefinement ? (
                    <button 
                      onClick={() => setShowRefinement(true)}
                      className="text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Add extra instructions to refine...
                    </button>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 bg-white/5 rounded-2xl p-1 border border-white/10"
                    >
                      <input 
                        type="text"
                        value={refinement}
                        onChange={(e) => setRefinement(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleRefine()}
                        placeholder="e.g. 'make it more professional' or 'add a word limit'"
                        className="w-full bg-transparent border-none outline-none px-4 py-2 text-sm placeholder:text-white/20"
                        autoFocus
                      />
                      <button 
                        onClick={handleRefine}
                        disabled={!refinement.trim() || isRefining}
                        className="p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition-all disabled:opacity-50"
                      >
                        {isRefining ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
