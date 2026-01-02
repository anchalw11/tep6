import { TradingState, Trade, Signal, TradeOutcome } from './types';

export const openTrade = (state: TradingState, signal: Signal): TradingState => {
  const newTrade: Trade = {
    id: Date.now().toString(),
    pair: signal.pair || signal.symbol || signal.currencyPair || 'UNKNOWN',
    direction: (signal.direction || signal.signalType || 'BUY').toUpperCase() as 'BUY' | 'SELL',
    entryPrice: parseFloat(signal.entryPrice?.toString() || signal.entry?.toString() || '0'),
    stopLoss: parseFloat(signal.stopLoss?.toString() || '0'),
    takeProfit: Array.isArray(signal.takeProfit)
      ? parseFloat(signal.takeProfit[0]?.toString() || '0')
      : parseFloat(signal.takeProfit?.toString() || '0'),
    lotSize: 0.1,
    entryTime: new Date().toISOString(),
    status: 'open'
  };

  return {
    ...state,
    openPositions: [...state.openPositions, newTrade]
  };
};

export const closeTrade = (
  state: TradingState,
  tradeId: string,
  outcome: TradeOutcome,
  pnl?: number
): TradingState => {
  const trade = state.openPositions.find(t => t.id === tradeId);
  if (!trade) return state;

  const closedTrade: Trade = {
    ...trade,
    status: 'closed',
    exitTime: new Date().toISOString(),
    outcome,
    pnl: pnl || 0
  };

  const newOpenPositions = state.openPositions.filter(t => t.id !== tradeId);
  const newTrades = [...state.trades, closedTrade];
  const newEquity = state.currentEquity + (pnl || 0);

  // Update performance metrics
  const winningTrades = newTrades.filter(t => (t.pnl || 0) > 0);
  const losingTrades = newTrades.filter(t => (t.pnl || 0) < 0);
  const totalPnl = newTrades.reduce((sum, t) => sum + (t.pnl || 0), 0);
  const winRate = newTrades.length > 0 ? (winningTrades.length / newTrades.length) * 100 : 0;

  return {
    ...state,
    currentEquity: newEquity,
    openPositions: newOpenPositions,
    trades: newTrades,
    performanceMetrics: {
      ...state.performanceMetrics,
      totalPnl,
      winRate,
      totalTrades: newTrades.length,
      winningTrades: winningTrades.length,
      losingTrades: losingTrades.length
    }
  };
};
