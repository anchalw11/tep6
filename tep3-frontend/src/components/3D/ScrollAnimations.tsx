import React from 'react';

interface ScrollAnimationsProps {
  children: React.ReactNode;
}

const ScrollAnimations: React.FC<ScrollAnimationsProps> = ({ children }) => {
  return <div className="scroll-animations-wrapper">{children}</div>;
};

export default ScrollAnimations;
