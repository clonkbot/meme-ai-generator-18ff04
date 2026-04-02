interface TemplateGalleryProps {
  currentTemplate: string;
  onSelect: (template: string) => void;
}

const TEMPLATES = [
  { id: 'distracted', name: 'DISTRACTED', emoji: '👀', gradient: 'from-purple-500 to-purple-700' },
  { id: 'drake', name: 'DRAKE', emoji: '🙅‍♂️', gradient: 'from-pink-500 to-red-500' },
  { id: 'stonks', name: 'STONKS', emoji: '📈', gradient: 'from-blue-400 to-cyan-400' },
  { id: 'brain', name: 'GALAXY', emoji: '🧠', gradient: 'from-pink-400 to-yellow-400' },
  { id: 'thisisfine', name: 'THIS IS FINE', emoji: '🔥', gradient: 'from-red-300 to-pink-300' },
  { id: 'wojak', name: 'WOJAK', emoji: '😢', gradient: 'from-teal-200 to-pink-200' },
];

export default function TemplateGallery({ currentTemplate, onSelect }: TemplateGalleryProps) {
  return (
    <div className="border-2 border-cyan p-3 md:p-4 bg-black/50 backdrop-blur">
      <h3 className="font-display text-lg md:text-xl text-lime mb-3 md:mb-4 flex items-center gap-2">
        <span className="text-cyan">&gt;</span> TEMPLATE_SELECT
      </h3>

      <div className="grid grid-cols-3 gap-2 md:gap-3">
        {TEMPLATES.map((template) => (
          <button
            key={template.id}
            onClick={() => onSelect(template.id)}
            className={`
              relative p-2 md:p-3 aspect-square
              bg-gradient-to-br ${template.gradient}
              border-2 transition-all duration-200
              hover:scale-105 hover:z-10
              ${currentTemplate === template.id
                ? 'border-lime shadow-brutal'
                : 'border-gray-700 hover:border-pink'}
            `}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl sm:text-3xl md:text-4xl" role="img">{template.emoji}</span>
            </div>

            <div className="absolute bottom-0.5 md:bottom-1 left-0 right-0 text-center">
              <span className="font-mono text-[8px] sm:text-[10px] text-white/80 drop-shadow-lg">
                {template.name}
              </span>
            </div>

            {currentTemplate === template.id && (
              <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-lime border border-black flex items-center justify-center">
                <span className="text-[8px] md:text-xs text-black">✓</span>
              </div>
            )}
          </button>
        ))}
      </div>

      <p className="mt-3 md:mt-4 font-mono text-xs text-gray-600 text-center">
        [ CLICK TO CHANGE VIBE ]
      </p>
    </div>
  );
}
