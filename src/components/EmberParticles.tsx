import { memo } from 'react';

// Generate static random positions - tripled size, doubled opacity, mixed z-index
const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${3 + (i * 5) % 94}%`,
  animationDelay: `${(i * 0.6) % 10}s`,
  animationDuration: `${8 + (i % 5) * 2}s`,
  size: 6 + (i % 4) * 3, // Tripled from 2-5 to 6-15
  opacity: 0.8 + (i % 4) * 0.15, // Doubled opacity
  zIndex: i % 3 === 0 ? 50 : 0, // Mix of front (50) and back (0)
}));

const EmberParticles = memo(() => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
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
            zIndex: particle.zIndex,
          }}
        />
      ))}
    </div>
  );
});

EmberParticles.displayName = 'EmberParticles';

export default EmberParticles;
