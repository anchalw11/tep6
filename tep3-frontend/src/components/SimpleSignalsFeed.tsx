import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, MessageSquare, BookOpen } from 'lucide-react';

interface SimpleSignalsFeedProps {
  onMarkAsTaken: (signal: any, outcome: any, pnl?: number) => void;
  onAddToJournal?: (signal: any) => void;
  onChatWithNexus?: (signal: any) => void;
}

const SimpleSignalsFeed: React.FC<SimpleSignalsFeedProps> = ({
  onMarkAsTaken,
  onAddToJournal,
  onChatWithNexus
}) => {
  const [signals, setSignals] = useState<any[]>([]);

  useEffect(() => {
    // Load signals from localStorage
    const storedSignals = localStorage.getItem('telegram_messages');
    if (storedSignals) {
      try {
        const parsed = JSON.parse(storedSignals);
        setSignals(parsed.slice(0, 10));
      } catch (error) {
        console.error('Error parsing signals:', error);
      }
    }

    // Listen for new signals
    const handleNewSignal = (event: any) => {
      setSignals(prev => [event.detail, ...prev.slice(0, 9)]);
    };

    window.addEventListener('newSignalSent', handleNewSignal);
    return () => window.removeEventListener('newSignalSent', handleNewSignal);
  }, []);

  return (
    <div className="space-y-6">
      <div className="holo-card">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
          <TrendingUp className="w-8 h-8 mr-3" />
          Trading Signals
        </h2>

        <div className="space-y-4">
          {signals.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <div className="text-6xl mb-4">📡</div>
              <p className="text-lg font-medium mb-2">No signals available</p>
              <p className="text-sm">New signals will appear here when available</p>
            </div>
          ) : (
            signals.map((signal, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-xl font-bold text-white mb-1">
                      {signal.pair || 'SIGNAL'}
                    </div>
                    <div className="text-sm text-gray-400">
                      {new Date(signal.timestamp).toLocaleString()}
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    signal.direction === 'BUY' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {signal.direction || 'SIGNAL'}
                  </div>
                </div>

                <div className="text-gray-300 whitespace-pre-line mb-4">
                  {signal.text}
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => onMarkAsTaken(signal, 'TP_HIT')}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Mark as Taken
                  </button>
                  {onAddToJournal && (
                    <button
                      onClick={() => onAddToJournal(signal)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center space-x-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Add to Journal</span>
                    </button>
                  )}
                  {onChatWithNexus && (
                    <button
                      onClick={() => onChatWithNexus(signal)}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center space-x-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat with Nexus</span>
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SimpleSignalsFeed;
