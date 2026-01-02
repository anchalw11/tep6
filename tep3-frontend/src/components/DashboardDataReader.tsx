import { useState, useEffect } from 'react';
import { useUser } from '../contexts/UserContext';

export const useDashboardData = () => {
  const { user } = useUser();
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      const storedData = localStorage.getItem(`dashboard_data_${user.email}`);
      if (storedData) {
        try {
          setDashboardData(JSON.parse(storedData));
        } catch (error) {
          console.error('Error parsing dashboard data:', error);
        }
      }
      setLoading(false);
    }
  }, [user?.email]);

  return { dashboardData, loading };
};
