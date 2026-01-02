import React from 'react';
import { Brain, TrendingUp } from 'lucide-react';

const NexusAIReasoningDemo: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Nexus AI </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
              Reasoning
            </span>
          </h2>
          <p className="text-gray-400 text-lg">See how our AI analyzes markets in real-time</p>
        </div>

        <div className="bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm rounded-3xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">AI Analysis Process</h3>
              </div>
              <div className="space-y-3">
                {[
                  'Market Sentiment Analysis',
                  'Technical Indicator Evaluation',
                  'Risk-Reward Assessment',
                  'Entry/Exit Optimization'
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <span className="text-white font-semibold">Sample Analysis</span>
              </div>
              <div className="text-gray-300 text-sm space-y-2">
                <p className="font-mono">
                  <span className="text-cyan-400">Analyzing:</span> EUR/USD
                </p>
                <p className="font-mono">
                  <span className="text-cyan-400">Timeframe:</span> 15M
                </p>
                <p className="font-mono">
                  <span className="text-cyan-400">Trend:</span> Bullish
                </p>
                <p className="font-mono">
                  <span className="text-cyan-400">Confidence:</span> 87%
                </p>
                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 text-xs">
                    Signal Generated: BUY @ 1.0845 | SL: 1.0825 | TP: 1.0885
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NexusAIReasoningDemo;
