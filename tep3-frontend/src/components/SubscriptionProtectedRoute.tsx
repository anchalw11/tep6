import { ReactNode } from 'react';

interface SubscriptionProtectedRouteProps {
  children: ReactNode;
}

const SubscriptionProtectedRoute = ({ children }: SubscriptionProtectedRouteProps) => {
  return <>{children}</>;
};

export default SubscriptionProtectedRoute;
