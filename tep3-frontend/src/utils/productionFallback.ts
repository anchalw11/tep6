// Production fallback utilities for handling missing data or services

export const handleSupabaseError = (error: any): void => {
  if (process.env.NODE_ENV === 'development') {
    console.warn('Supabase error (using fallback):', error);
  }
};

export const useFallbackData = <T>(defaultData: T): T => {
  return defaultData;
};

export const isCorsError = (error: any): boolean => {
  return (
    error?.message?.includes('CORS') ||
    error?.message?.includes('Network') ||
    error?.message?.includes('Failed to fetch')
  );
};

export const isProductionBackendUnavailable = (): boolean => {
  // Check if backend is unavailable (for production fallback)
  return false; // Placeholder - would check backend health in production
};

export const productionApi = {
  get: async (url: string) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.warn('API call failed, using fallback', error);
      return null;
    }
  },
  post: async (url: string, data: any) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return await response.json();
    } catch (error) {
      console.warn('API call failed, using fallback', error);
      return null;
    }
  },
  put: async (url: string, data: any) => {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return await response.json();
    } catch (error) {
      console.warn('API call failed, using fallback', error);
      return null;
    }
  },
  delete: async (url: string) => {
    try {
      const response = await fetch(url, { method: 'DELETE' });
      return await response.json();
    } catch (error) {
      console.warn('API call failed, using fallback', error);
      return null;
    }
  }
};

export const handleProductionFallback = (serviceName: string, error?: any): void => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`${serviceName} unavailable, using fallback mode`, error);
  }
};

export default {
  handleSupabaseError,
  useFallbackData,
  isCorsError,
  isProductionBackendUnavailable,
  productionApi,
  handleProductionFallback
};
