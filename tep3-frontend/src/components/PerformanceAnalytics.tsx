import React from 'react';
import { TrendingUp, Target, Award, Activity } from 'lucide-react';

interface PerformanceAnalyticsProps {
  tradingState: any;
}

const PerformanceAnalytics: React.FC<PerformanceAnalyticsProps> = ({ tradingState }) => {
  const { performanceMetrics, currentEquity, initialEquity } = tradingState || {};
  const metrics = performanceMetrics || {};

  const stats = [
    {
      label: 'Total P&L',
      value: `$${(metrics.totalPnl || 0).toFixed(2)}`,
      icon: <TrendingUp className="w-6 h-6" />,
      color: metrics.totalPnl >= 0 ? 'text-green-400' : 'text-red-400'
    },
    {
      label: 'Win Rate',
      value: `${(metrics.winRate || 0).toFixed(1)}%`,
      icon: <Target className="w-6 h-6" />,
      color: 'text-cyan-400'
    },
    {
      label: 'Total Trades',
      value: metrics.totalTrades || 0,
      icon: <Activity className="w-6 h-6" />,
      color: 'text-blue-400'
    },
    {
      label: 'Profit Factor',
      value: (metrics.profitFactor || 0).toFixed(2),
      icon: <Award className="w-6 h-6" />,
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="holo-card">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">Performance Analytics</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-900/50 border border-cyan-400/20 rounded-lg p-6">
              <div className={`${stat.color} mb-4`}>{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 border border-cyan-400/20 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Account Growth</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Initial Balance:</span>
              <span className="text-white font-semibold">${(initialEquity || 0).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Current Balance:</span>
              <span className="text-white font-semibold">${(currentEquity || 0).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Growth:</span>
              <span className={`font-semibold ${
                (currentEquity - initialEquity) >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {((currentEquity - initialEquity) / initialEquity * 100).toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;
