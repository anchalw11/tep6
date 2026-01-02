import { ReactNode } from 'react';

interface LightningProps {
  children: ReactNode;
}

const Lightning = ({ children }: LightningProps) => {
  return <>{children}</>;
};

export default Lightning;
