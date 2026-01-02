export interface TradingState {
  initialEquity: number;
  currentEquity: number;
  trades: Trade[];
  openPositions: Trade[];
  riskSettings: RiskSettings;
  performanceMetrics: PerformanceMetrics;
  dailyStats: DailyStats;
}

export interface Trade {
  id: string;
  pair: string;
  direction: 'BUY' | 'SELL';
  entryPrice: number;
  exitPrice?: number;
  stopLoss: number;
  takeProfit: number | number[];
  lotSize: number;
  entryTime: string;
  exitTime?: string;
  pnl?: number;
  outcome?: TradeOutcome;
  status: 'open' | 'closed';
}

export interface Signal {
  pair: string;
  symbol?: string;
  currencyPair?: string;
  direction: string;
  signalType?: string;
  entryPrice: string | number;
  entry?: string | number;
  stopLoss: string | number;
  takeProfit: string | number | string[] | number[];
  confidence?: number;
  analysis?: string;
  text?: string;
}

export interface RiskSettings {
  riskPerTrade: number;
  dailyLossLimit: number;
  consecutiveLossesLimit: number;
}

export interface PerformanceMetrics {
  totalPnl: number;
  winRate: number;
  totalTrades: number;
  winningTrades: number;
  losingTrades: number;
  averageWin: number;
  averageLoss: number;
  profitFactor: number;
  maxDrawdown: number;
  currentDrawdown: number;
  grossProfit: number;
  grossLoss: number;
  consecutiveWins: number;
  consecutiveLosses: number;
}

export interface DailyStats {
  pnl: number;
  trades: number;
  initialEquity: number;
}

export type TradeOutcome = 'TP_HIT' | 'SL_HIT' | 'BREAKEVEN' | 'MANUAL_CLOSE';
