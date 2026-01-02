import React from 'react';

interface DashboardConcept2Props {
  onLogout: () => void;
  tradingState: any;
  dashboardData: any;
  handleMarkAsTaken: (signal: any, outcome: any, pnl?: number) => void;
  setTradingState: (state: any) => void;
  user: any;
  realTimeData?: any;
}

const DashboardConcept2: React.FC<DashboardConcept2Props> = (props) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-gray-950 to-blue-950 text-white">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Aurora Borealis Dashboard</h1>
        <p className="text-gray-400">Alternative dashboard theme</p>
      </div>
    </div>
  );
};

export default DashboardConcept2;
