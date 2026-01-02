import React from 'react';

interface DashboardConcept5Props {
  onLogout: () => void;
  tradingState: any;
  dashboardData: any;
  handleMarkAsTaken: (signal: any, outcome: any, pnl?: number) => void;
  setTradingState: (state: any) => void;
  user: any;
  realTimeData?: any;
}

const DashboardConcept5: React.FC<DashboardConcept5Props> = (props) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-950 via-gray-950 to-emerald-950 text-white">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Concept 5 Dashboard</h1>
        <p className="text-gray-400">Alternative dashboard theme</p>
      </div>
    </div>
  );
};

export default DashboardConcept5;
