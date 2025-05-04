
import React, { useEffect, useRef } from 'react';
import * as anime from 'animejs';

interface AudioWaveAnimationProps {
  className?: string;
  barCount?: number;
  active?: boolean;
}

const AudioWaveAnimation: React.FC<AudioWaveAnimationProps> = ({
  className = '',
  barCount = 8,
  active = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear any previous animations
    anime.remove(containerRef.current.querySelectorAll('.wave-bar'));
    
    // Create or update the bars
    const bars = containerRef.current.querySelectorAll('.wave-bar');
    
    if (bars.length === 0 && containerRef.current) {
      // Initialize bars if they don't exist
      for (let i = 0; i < barCount; i++) {
        const bar = document.createElement('div');
        bar.className = 'wave-bar';
        bar.style.height = '20px';
        containerRef.current.appendChild(bar);
      }
    }
    
    if (active) {
      // Animated wave effect using anime.js
      anime.default({
        targets: '.wave-bar',
        height: function() {
          return anime.default.random(10, 50) + 'px';
        },
        duration: function() {
          return anime.default.random(400, 700);
        },
        delay: function(el, i) {
          return i * 60;
        },
        easing: 'easeInOutSine',
        complete: function(anim) {
          if (active) {
            anim.restart();
          }
        },
        direction: 'alternate',
        loop: true
      });
    } else {
      // Set all bars to equal medium height when not active
      anime.default({
        targets: '.wave-bar',
        height: 20,
        duration: 300,
        easing: 'easeOutQuad'
      });
    }
    
    return () => {
      // Clean up animation when component unmounts
      anime.remove('.wave-bar');
    };
  }, [active, barCount]);

  return (
    <div 
      ref={containerRef} 
      className={`flex items-end justify-center h-12 gap-[2px] ${className}`}
    >
      {Array.from({ length: barCount }).map((_, index) => (
        <div
          key={index}
          className="wave-bar bg-voxa-teal rounded-full w-[3px] transition-colors duration-300"
          style={{
            height: '20px',
            opacity: active ? 0.8 : 0.4,
          }}
        />
      ))}
    </div>
  );
};

export default AudioWaveAnimation;
