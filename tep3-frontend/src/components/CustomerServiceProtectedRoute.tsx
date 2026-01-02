import { ReactNode } from 'react';

interface CustomerServiceProtectedRouteProps {
  children: ReactNode;
}

const CustomerServiceProtectedRoute = ({ children }: CustomerServiceProtectedRouteProps) => {
  return <>{children}</>;
};

export default CustomerServiceProtectedRoute;
