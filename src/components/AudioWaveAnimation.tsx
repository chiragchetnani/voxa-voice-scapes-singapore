
import React, { useEffect, useState } from 'react';

interface AudioWaveAnimationProps {
  className?: string;
  barCount?: number;
  active?: boolean;
}

const AudioWaveAnimation: React.FC<AudioWaveAnimationProps> = ({
  className = '',
  barCount = 6,
  active = true,
}) => {
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    if (active) {
      // Generate random heights for the bars
      const randomizeHeights = () => {
        const newHeights = Array.from({ length: barCount }, () => 
          Math.floor(Math.random() * 40) + 10
        );
        setHeights(newHeights);
      };

      // Initial heights
      randomizeHeights();

      // Update heights periodically
      const interval = setInterval(randomizeHeights, 500);
      
      return () => clearInterval(interval);
    } else {
      // Set all bars to equal medium height when not active
      setHeights(Array(barCount).fill(20));
    }
  }, [active, barCount]);

  return (
    <div className={`flex items-end justify-center h-12 ${className}`}>
      {heights.map((height, index) => (
        <div
          key={index}
          className="wave-bar animate-wave"
          style={{
            height: `${height}px`,
            animationDelay: `${index * 0.1}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default AudioWaveAnimation;
