export const setupAdminMockData = () => {
  // Setup mock data for admin dashboard to prevent CORS errors
  if (typeof window !== 'undefined') {
    const mockData = {
      activeUsers: [],
      recentSignals: [],
      kickstarterSubmissions: [],
      pendingVerifications: []
    };

    // Store in localStorage if needed
    if (!localStorage.getItem('admin_mock_data')) {
      localStorage.setItem('admin_mock_data', JSON.stringify(mockData));
    }
  }
};
