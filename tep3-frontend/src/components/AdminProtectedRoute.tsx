import { ReactNode } from 'react';

interface AdminProtectedRouteProps {
  children: ReactNode;
}

const AdminProtectedRoute = ({ children }: AdminProtectedRouteProps) => {
  return <>{children}</>;
};

export default AdminProtectedRoute;
