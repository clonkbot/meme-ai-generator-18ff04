import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setIsGlitching(true);

        let iterations = 0;
        const scrambleInterval = setInterval(() => {
          setGlitchText(
            text
              .split('')
              .map((char, index) => {
                if (index < iterations || char === ' ') {
                  return text[index];
                }
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
              })
              .join('')
          );

          iterations += 1;

          if (iterations > text.length) {
            clearInterval(scrambleInterval);
            setGlitchText(text);
            setIsGlitching(false);
          }
        }, 30);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, [text]);

  return (
    <span
      className={`${className} ${isGlitching ? 'animate-glitch-text' : ''}`}
      data-text={text}
    >
      {glitchText}
    </span>
  );
}
