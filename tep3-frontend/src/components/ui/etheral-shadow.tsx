import React from 'react';

interface EtheralShadowProps {
  color?: string;
  animation?: {
    scale?: number;
    speed?: number;
  };
  noise?: {
    opacity?: number;
    scale?: number;
  };
  sizing?: 'fill' | 'fit';
  className?: string;
  style?: React.CSSProperties;
}

export const Component: React.FC<EtheralShadowProps> = ({
  color = 'rgba(139, 92, 246, 0.6)',
  animation = { scale: 60, speed: 5 },
  noise = { opacity: 0.6, scale: 1.8 },
  sizing = 'fill',
  className = '',
  style = {}
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: 'blur(80px)',
        opacity: 0.6,
        ...style
      }}
    />
  );
};
