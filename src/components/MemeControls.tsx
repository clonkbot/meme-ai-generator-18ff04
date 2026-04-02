import type { MemeState } from '../App';

interface MemeControlsProps {
  meme: MemeState;
  updateMeme: (updates: Partial<MemeState>) => void;
}

export default function MemeControls({ meme, updateMeme }: MemeControlsProps) {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="border-2 border-lime p-3 md:p-4 bg-black/50 backdrop-blur">
        <h3 className="font-display text-lg md:text-xl text-pink mb-3 md:mb-4 flex items-center gap-2">
          <span className="text-lime">&gt;</span> TEXT_CONTROLS
        </h3>

        <div className="space-y-3 md:space-y-4">
          {/* Top Text */}
          <div>
            <label className="block font-mono text-xs text-gray-400 mb-1">
              TOP_TEXT.exe
            </label>
            <input
              type="text"
              value={meme.topText}
              onChange={(e) => updateMeme({ topText: e.target.value.toUpperCase() })}
              className="w-full px-3 md:px-4 py-2 md:py-3 bg-black border-2 border-cyan text-lime font-mono text-sm md:text-base
                       focus:outline-none focus:border-pink focus:shadow-brutal
                       placeholder-gray-600"
              placeholder="ENTER TOP TEXT..."
            />
          </div>

          {/* Bottom Text */}
          <div>
            <label className="block font-mono text-xs text-gray-400 mb-1">
              BOTTOM_TEXT.exe
            </label>
            <input
              type="text"
              value={meme.bottomText}
              onChange={(e) => updateMeme({ bottomText: e.target.value.toUpperCase() })}
              className="w-full px-3 md:px-4 py-2 md:py-3 bg-black border-2 border-cyan text-lime font-mono text-sm md:text-base
                       focus:outline-none focus:border-pink focus:shadow-brutal
                       placeholder-gray-600"
              placeholder="ENTER BOTTOM TEXT..."
            />
          </div>
        </div>
      </div>

      <div className="border-2 border-pink p-3 md:p-4 bg-black/50 backdrop-blur">
        <h3 className="font-display text-lg md:text-xl text-cyan mb-3 md:mb-4 flex items-center gap-2">
          <span className="text-pink">&gt;</span> STYLE_CONFIG
        </h3>

        <div className="space-y-4 md:space-y-5">
          {/* Font Size */}
          <div>
            <label className="block font-mono text-xs text-gray-400 mb-2 flex justify-between">
              <span>FONT_SIZE</span>
              <span className="text-lime">{meme.fontSize}px</span>
            </label>
            <input
              type="range"
              min="16"
              max="64"
              value={meme.fontSize}
              onChange={(e) => updateMeme({ fontSize: Number(e.target.value) })}
              className="w-full h-6"
            />
          </div>

          {/* Colors */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div>
              <label className="block font-mono text-xs text-gray-400 mb-2">
                TEXT_COLOR
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={meme.textColor}
                  onChange={(e) => updateMeme({ textColor: e.target.value })}
                  className="w-10 h-10 md:w-12 md:h-12 bg-transparent border-2 border-lime cursor-pointer"
                />
                <span className="font-mono text-xs text-gray-500 hidden sm:inline">
                  {meme.textColor}
                </span>
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs text-gray-400 mb-2">
                STROKE_COLOR
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={meme.strokeColor}
                  onChange={(e) => updateMeme({ strokeColor: e.target.value })}
                  className="w-10 h-10 md:w-12 md:h-12 bg-transparent border-2 border-pink cursor-pointer"
                />
                <span className="font-mono text-xs text-gray-500 hidden sm:inline">
                  {meme.strokeColor}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
