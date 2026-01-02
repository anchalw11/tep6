import { TradingState } from './types';

export const isDailyLossLimitReached = (state: TradingState): boolean => {
  const dailyLoss = Math.abs(state.dailyStats.pnl);
  const dailyLossLimit = (state.dailyStats.initialEquity * state.riskSettings.dailyLossLimit) / 100;
  return dailyLoss >= dailyLossLimit;
};

export const calculatePositionSize = (
  accountEquity: number,
  riskPercentage: number,
  stopLossPoints: number
): number => {
  const riskAmount = (accountEquity * riskPercentage) / 100;
  const positionSize = riskAmount / stopLossPoints;
  return Math.max(0.01, Math.round(positionSize * 100) / 100);
};
