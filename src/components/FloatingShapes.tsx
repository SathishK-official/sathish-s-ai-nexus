import { memo } from 'react';

const shapes = [
  { type: 'circle', size: 300, left: '10%', top: '5%', delay: '0s', duration: '25s', opacity: 0.08 },
  { type: 'circle', size: 200, left: '80%', top: '15%', delay: '5s', duration: '30s', opacity: 0.06 },
  { type: 'square', size: 250, left: '70%', top: '60%', delay: '2s', duration: '28s', opacity: 0.05 },
  { type: 'circle', size: 400, left: '5%', top: '50%', delay: '8s', duration: '35s', opacity: 0.07 },
  { type: 'triangle', size: 180, left: '50%', top: '30%', delay: '4s', duration: '22s', opacity: 0.06 },
  { type: 'square', size: 150, left: '25%', top: '75%', delay: '10s', duration: '32s', opacity: 0.05 },
  { type: 'circle', size: 350, left: '85%', top: '80%', delay: '6s', duration: '27s', opacity: 0.08 },
  { type: 'triangle', size: 220, left: '15%', top: '25%', delay: '12s', duration: '30s', opacity: 0.04 },
  { type: 'square', size: 180, left: '60%', top: '10%', delay: '3s', duration: '26s', opacity: 0.06 },
  { type: 'circle', size: 280, left: '40%', top: '85%', delay: '7s', duration: '33s', opacity: 0.07 },
];

const FloatingShapes = memo(() => {
  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {shapes.map((shape, index) => (
        <div
          key={index}
          className="floating-shape"
          style={{
            left: shape.left,
            top: shape.top,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            animationDelay: shape.delay,
            animationDuration: shape.duration,
            opacity: shape.opacity,
            borderRadius: shape.type === 'circle' ? '50%' : shape.type === 'square' ? '20%' : '0',
            clipPath: shape.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
          }}
        />
      ))}
    </div>
  );
});

FloatingShapes.displayName = 'FloatingShapes';

export default FloatingShapes;