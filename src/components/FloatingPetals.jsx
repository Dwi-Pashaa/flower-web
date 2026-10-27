import React, { useMemo } from 'react';

export default function FloatingPetals({ count = 22 }) {
  // Generate random petals data
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const isSunflower = i % 2 === 0;
      return {
        id: i,
        left: `${(i * (100 / count) + Math.random() * 5).toFixed(1)}%`,
        size: Math.floor(Math.random() * 12 + 14), // 14px to 26px
        delay: (Math.random() * 8).toFixed(1),
        duration: (Math.random() * 5 + 8).toFixed(1), // 8s to 13s
        isSunflower,
        initialRotate: Math.floor(Math.random() * 360),
      };
    });
  }, [count]);

  return (
    <div className="petals-container">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal-item petal-particle"
          style={{
            left: petal.left,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.5}px`,
            transform: `rotate(${petal.initialRotate}deg)`,
          }}
        >
          <svg
            viewBox="0 0 20 30"
            style={{ width: '100%', height: '100%', opacity: 0.75, filter: 'drop-shadow(0 2px 4px rgba(255, 105, 180, 0.2))' }}
          >
            {petal.isSunflower ? (
              // Golden sunflower petal
              <path
                d="M10 0 C 3 8 0 18 10 30 C 20 18 17 8 10 0 Z"
                fill="url(#fallingSunflowerGrad)"
              />
            ) : (
              // Soft pink rose petal
              <path
                d="M10 0 C 2 10 1 20 10 30 C 19 20 18 10 10 0 Z"
                fill="url(#fallingPinkGrad)"
              />
            )}
          </svg>
        </div>
      ))}

      {/* SVG definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <defs>
          <linearGradient id="fallingSunflowerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF176" />
            <stop offset="60%" stopColor="#FFC107" />
            <stop offset="100%" stopColor="#FFA000" />
          </linearGradient>
          <linearGradient id="fallingPinkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF0F5" />
            <stop offset="60%" stopColor="#F8BBD0" />
            <stop offset="100%" stopColor="#F06292" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
