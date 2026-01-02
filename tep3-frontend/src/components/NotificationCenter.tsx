import React from 'react';
import { Bell } from 'lucide-react';

const NotificationCenter: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="holo-card">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
          <Bell className="w-8 h-8 mr-3" />
          Notifications
        </h2>
        <div className="text-center py-12 text-gray-400">
          <p className="text-lg">No new notifications</p>
          <p className="text-sm mt-2">You're all caught up!</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationCenter;
