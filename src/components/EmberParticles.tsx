import { memo } from 'react';

// Generate 60 particles (tripled) with mixed z-index for front/back layering
const particles = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  left: `${1 + (i * 1.7) % 98}%`,
  animationDelay: `${(i * 0.3) % 12}s`,
  animationDuration: `${6 + (i % 6) * 2}s`,
  size: 6 + (i % 4) * 3,
  opacity: 0.8 + (i % 4) * 0.15,
  zIndex: i % 3 === 0 ? 50 : 0,
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
