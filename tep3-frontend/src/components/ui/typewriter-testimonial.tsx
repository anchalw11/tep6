import React from 'react';

export const Component: React.FC = () => {
  return (
    <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8">
      <div className="text-gray-300 text-lg italic mb-4">
        "This platform changed my trading career. The AI guidance is incredible."
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        <div>
          <div className="font-semibold text-white">John Trader</div>
          <div className="text-sm text-gray-400">Professional Trader</div>
        </div>
      </div>
    </div>
  );
};
