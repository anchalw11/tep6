import React, { useEffect, useState } from 'react';

const FuturisticCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="w-8 h-8 border-2 border-cyan-400/50 rounded-full animate-ping" />
      <div className="absolute inset-0 w-2 h-2 bg-cyan-400 rounded-full m-auto" />
    </div>
  );
};

export default FuturisticCursor;
