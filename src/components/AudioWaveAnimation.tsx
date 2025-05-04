
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
      // Generate initial random heights
      const initialHeights = Array.from({ length: barCount }, () => 
        Math.floor(Math.random() * 40) + 10
      );
      setHeights(initialHeights);

      // Update heights with smooth transitions
      const updateHeights = () => {
        setHeights(prevHeights => 
          prevHeights.map(height => {
            // Create a smoother transition by not changing too drastically
            const change = Math.floor(Math.random() * 20) - 10; // -10 to +10
            const newHeight = Math.max(10, Math.min(50, height + change));
            return newHeight;
          })
        );
      };
      
      const interval = setInterval(updateHeights, 600);
      
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
          className="wave-bar transition-all duration-300 ease-in-out"
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
