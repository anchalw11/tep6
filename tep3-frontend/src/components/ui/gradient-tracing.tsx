import React from 'react';

interface GradientTracingProps {
  className?: string;
}

export const GradientTracing: React.FC<GradientTracingProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
    </div>
  );
};
