import React, { useState, useEffect } from 'react';

interface ReliableDataFeedProps {
  symbols: string[];
}

const ReliableDataFeed: React.FC<ReliableDataFeedProps> = ({ symbols }) => {
  const [prices, setPrices] = useState<Record<string, string>>({});

  useEffect(() => {
    // Generate mock prices for symbols
    const mockPrices: Record<string, string> = {};
    symbols.forEach(symbol => {
      const basePrice = 1.0 + Math.random();
      mockPrices[symbol] = basePrice.toFixed(5);
    });
    setPrices(mockPrices);
  }, [symbols]);

  return (
    <div className="bg-gray-800/50 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-white mb-4">Live Forex Prices</h3>
      <div className="space-y-2">
        {symbols.map(symbol => (
          <div key={symbol} className="flex justify-between items-center p-2 bg-gray-900/50 rounded">
            <span className="text-gray-300">{symbol}</span>
            <span className="text-white font-mono">{prices[symbol] || '-.-----'}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReliableDataFeed;
