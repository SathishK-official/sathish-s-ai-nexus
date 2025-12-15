import { memo } from 'react';

// Generate static random positions at build time for consistent rendering
const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: `${5 + (i * 6.5) % 90}%`,
  animationDelay: `${(i * 0.8) % 8}s`,
  animationDuration: `${6 + (i % 4) * 2}s`,
  size: 2 + (i % 3),
  opacity: 0.4 + (i % 5) * 0.12,
}));

const EmberParticles = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="ember-particle"
          style={{
            left: particle.left,
            animationDelay: particle.animationDelay,
            animationDuration: particle.animationDuration,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
});

EmberParticles.displayName = 'EmberParticles';

export default EmberParticles;
