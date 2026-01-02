import React from 'react';
import { GitBranch } from 'lucide-react';

const MultiAccountTracker: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="holo-card">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
          <GitBranch className="w-8 h-8 mr-3" />
          Multi-Account Tracker
        </h2>
        <div className="text-center py-12 text-gray-400">
          <p className="text-lg">Track multiple trading accounts in one place</p>
          <p className="text-sm mt-2">Add accounts to get started</p>
        </div>
      </div>
    </div>
  );
};

export default MultiAccountTracker;
