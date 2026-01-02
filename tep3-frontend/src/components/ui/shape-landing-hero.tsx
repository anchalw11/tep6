import React from 'react';

interface ElegantShapeProps {
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  className?: string;
}

export const ElegantShape: React.FC<ElegantShapeProps> = ({
  delay = 0,
  width = 300,
  height = 80,
  rotate = 0,
  gradient = 'from-cyan-500/[0.1]',
  className = ''
}) => {
  return (
    <div
      className={`absolute rounded-full bg-gradient-to-r ${gradient} to-transparent blur-3xl animate-pulse ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `rotate(${rotate}deg)`,
        animationDelay: `${delay}s`,
        animationDuration: '6s'
      }}
    />
  );
};
