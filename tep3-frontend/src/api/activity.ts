interface ActivityData {
  userId?: string;
  action: string;
  metadata?: Record<string, any>;
  timestamp?: string;
}

export const logActivity = async (data: ActivityData): Promise<void> => {
  try {
    const activityLog = {
      ...data,
      timestamp: data.timestamp || new Date().toISOString()
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Activity logged:', activityLog);
    }

    // Store in localStorage for now
    const existingLogs = JSON.parse(localStorage.getItem('activity_logs') || '[]');
    existingLogs.push(activityLog);
    localStorage.setItem('activity_logs', JSON.stringify(existingLogs.slice(-100))); // Keep last 100

    // In production, this would send to backend
    // await fetch('/api/activity', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(activityLog)
    // });
  } catch (error) {
    console.error('Error logging activity:', error);
  }
};

export const getActivityLogs = (): ActivityData[] => {
  try {
    return JSON.parse(localStorage.getItem('activity_logs') || '[]');
  } catch (error) {
    console.error('Error getting activity logs:', error);
    return [];
  }
};

export default { logActivity, getActivityLogs };
