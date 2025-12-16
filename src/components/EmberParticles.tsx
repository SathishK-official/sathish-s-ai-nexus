import { memo } from 'react';

// Generate particles for full-page flow - smaller and more numerous
const particles = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  left: `${(i * 1.7) % 100}%`,
  animationDelay: `${(i * 0.5) % 15}s`,
  animationDuration: `${12 + (i % 8) * 3}s`,
  size: 6 + (i % 4) * 3, // 6-15px - larger for visibility
  opacity: 0.5 + (i % 4) * 0.15, // Higher opacity
  zIndex: i % 2 === 0 ? 0 : 50, // Mix of behind and in front
}));

const EmberParticles = memo(() => {
  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none" 
      aria-hidden="true"
      style={{ zIndex: 1 }}
    >
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
