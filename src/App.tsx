import { useState, useCallback } from 'react';
import MemeCanvas from './components/MemeCanvas';
import MemeControls from './components/MemeControls';
import TemplateGallery from './components/TemplateGallery';
import GlitchText from './components/GlitchText';
import './styles.css';

export interface MemeState {
  template: string;
  topText: string;
  bottomText: string;
  fontSize: number;
  textColor: string;
  strokeColor: string;
}

const initialState: MemeState = {
  template: 'distracted',
  topText: 'ME WRITING CLEAN CODE',
  bottomText: 'THAT ONE BUG I IGNORED',
  fontSize: 32,
  textColor: '#FFFFFF',
  strokeColor: '#000000',
};

export default function App() {
  const [meme, setMeme] = useState<MemeState>(initialState);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateAIMeme = useCallback(() => {
    setIsGenerating(true);

    const aiMemes = [
      { topText: 'NOBODY:', bottomText: 'ME AT 3AM DEBUGGING' },
      { topText: 'POV: YOU SAID AI WILL REPLACE DEVS', bottomText: '*LAUGHS IN UNDEFINED*' },
      { topText: 'SENIOR DEV: ITS A SIMPLE FIX', bottomText: 'THE FIX:' },
      { topText: 'WORKS ON MY MACHINE', bottomText: 'PROD: HOLD MY BEER' },
      { topText: 'ME: I SHOULD SLEEP', bottomText: 'ALSO ME: ONE MORE COMMIT' },
      { topText: 'CODE REVIEW BE LIKE', bottomText: 'LGTM (DIDNT READ IT)' },
      { topText: 'CHATGPT WROTE THIS CODE', bottomText: 'MY BOSS THINKS IM A GENIUS' },
      { topText: 'STACK OVERFLOW DOWN', bottomText: 'DEVS WORLDWIDE: *PANIC*' },
      { topText: 'ITS NOT A BUG', bottomText: 'ITS A FEATURE REQUEST' },
      { topText: 'PUSHING TO MAIN ON FRIDAY', bottomText: 'WEEKEND: RUINED' },
    ];

    const randomMeme = aiMemes[Math.floor(Math.random() * aiMemes.length)];

    setTimeout(() => {
      setMeme(prev => ({
        ...prev,
        topText: randomMeme.topText,
        bottomText: randomMeme.bottomText,
      }));
      setIsGenerating(false);
    }, 800);
  }, []);

  const updateMeme = useCallback((updates: Partial<MemeState>) => {
    setMeme(prev => ({ ...prev, ...updates }));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Scan lines overlay */}
      <div className="scanlines" />

      {/* Noise texture */}
      <div className="noise" />

      {/* Glitch background shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 bg-lime opacity-20 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 md:w-80 md:h-80 bg-pink opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 md:w-96 md:h-96 bg-cyan opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="py-4 md:py-6 px-4 md:px-8 border-b-2 border-lime">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="text-3xl md:text-5xl animate-bounce">
                <span role="img" aria-label="brain">🧠</span>
              </div>
              <GlitchText
                text="MEME.AI"
                className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-lime tracking-wider"
              />
            </div>
            <div className="flex items-center gap-2 md:gap-4 font-mono text-xs md:text-sm text-pink">
              <span className="animate-blink">[</span>
              <span>CHAOS_MODE: ON</span>
              <span className="animate-blink">]</span>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 px-4 md:px-8 py-6 md:py-12">
          <div className="max-w-7xl mx-auto">
            {/* AI Generate Button */}
            <div className="text-center mb-6 md:mb-10">
              <button
                onClick={generateAIMeme}
                disabled={isGenerating}
                className="group relative px-6 md:px-10 py-3 md:py-4 bg-lime text-black font-display text-lg md:text-2xl font-bold uppercase tracking-widest
                         hover:bg-pink hover:text-white transition-all duration-200
                         disabled:opacity-50 disabled:cursor-not-allowed
                         border-4 border-white hover:border-cyan
                         shadow-brutal hover:shadow-brutal-lg
                         transform hover:-translate-y-1 active:translate-y-0"
              >
                <span className={isGenerating ? 'animate-glitch' : ''}>
                  {isGenerating ? '[ GENERATING... ]' : '[ AI GENERATE MEME ]'}
                </span>
                <div className="absolute -top-2 -right-2 w-4 h-4 md:w-6 md:h-6 bg-pink border-2 border-white animate-spin"
                     style={{ animationDuration: '3s' }} />
              </button>
              <p className="mt-3 md:mt-4 font-mono text-xs md:text-sm text-gray-500 tracking-wide">
                &gt;&gt; PRESS FOR INSTANT CHAOS &lt;&lt;
              </p>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
              {/* Meme Preview */}
              <div className="order-1">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-lime via-pink to-cyan opacity-75 blur" />
                  <div className="relative bg-black p-2 md:p-4 border-2 border-lime">
                    <MemeCanvas meme={meme} />
                  </div>
                </div>

                {/* Download hint */}
                <p className="mt-3 md:mt-4 text-center font-mono text-xs text-gray-600">
                  RIGHT CLICK &gt; SAVE AS &gt; BECOME LEGEND
                </p>
              </div>

              {/* Controls */}
              <div className="order-2 space-y-6 md:space-y-8">
                <MemeControls meme={meme} updateMeme={updateMeme} />
                <TemplateGallery
                  currentTemplate={meme.template}
                  onSelect={(template) => updateMeme({ template })}
                />
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-4 md:py-6 px-4 border-t border-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <p className="font-mono text-xs text-gray-600 tracking-wide">
              Requested by <span className="text-gray-500">@OxPaulius</span> · Built by <span className="text-gray-500">@clonkbot</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
