import type { MemeState } from '../App';

const TEMPLATES: Record<string, { bg: string; emoji: string }> = {
  distracted: {
    bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    emoji: '👀'
  },
  drake: {
    bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    emoji: '🙅‍♂️'
  },
  stonks: {
    bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    emoji: '📈'
  },
  brain: {
    bg: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    emoji: '🧠'
  },
  thisisfine: {
    bg: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    emoji: '🔥'
  },
  wojak: {
    bg: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    emoji: '😢'
  },
};

interface MemeCanvasProps {
  meme: MemeState;
}

export default function MemeCanvas({ meme }: MemeCanvasProps) {
  const template = TEMPLATES[meme.template] || TEMPLATES.distracted;

  return (
    <div
      className="relative w-full aspect-square overflow-hidden"
      style={{ background: template.bg }}
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Giant emoji background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <span className="text-[120px] sm:text-[150px] md:text-[180px] lg:text-[200px] select-none" role="img">
          {template.emoji}
        </span>
      </div>

      {/* Top text */}
      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 text-center">
        <p
          className="font-display uppercase leading-tight break-words px-1"
          style={{
            fontSize: `clamp(16px, ${meme.fontSize * 0.6}px, ${meme.fontSize}px)`,
            color: meme.textColor,
            textShadow: `
              3px 3px 0 ${meme.strokeColor},
              -3px -3px 0 ${meme.strokeColor},
              3px -3px 0 ${meme.strokeColor},
              -3px 3px 0 ${meme.strokeColor},
              0 3px 0 ${meme.strokeColor},
              0 -3px 0 ${meme.strokeColor},
              3px 0 0 ${meme.strokeColor},
              -3px 0 0 ${meme.strokeColor}
            `,
            letterSpacing: '0.05em'
          }}
        >
          {meme.topText}
        </p>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-center">
        <p
          className="font-display uppercase leading-tight break-words px-1"
          style={{
            fontSize: `clamp(16px, ${meme.fontSize * 0.6}px, ${meme.fontSize}px)`,
            color: meme.textColor,
            textShadow: `
              3px 3px 0 ${meme.strokeColor},
              -3px -3px 0 ${meme.strokeColor},
              3px -3px 0 ${meme.strokeColor},
              -3px 3px 0 ${meme.strokeColor},
              0 3px 0 ${meme.strokeColor},
              0 -3px 0 ${meme.strokeColor},
              3px 0 0 ${meme.strokeColor},
              -3px 0 0 ${meme.strokeColor}
            `,
            letterSpacing: '0.05em'
          }}
        >
          {meme.bottomText}
        </p>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-2 left-2 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-white opacity-50" />
      <div className="absolute top-2 right-2 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-white opacity-50" />
      <div className="absolute bottom-2 left-2 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-white opacity-50" />
      <div className="absolute bottom-2 right-2 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-white opacity-50" />

      {/* Watermark */}
      <div className="absolute bottom-1 right-2 font-mono text-[8px] sm:text-[10px] text-white opacity-40">
        MEME.AI
      </div>
    </div>
  );
}
