import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Code, Zap } from 'lucide-react';

const MT5BotPortal: React.FC = () => {
  return (
    <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          MT5 Bot Development
        </h2>
        <p className="text-gray-400">
          Custom trading bots tailored to your strategy
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 text-center">
          <Bot className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Strategy Automation</h3>
          <p className="text-gray-400 text-sm">Automate your proven trading strategies</p>
        </div>
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 text-center">
          <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Custom Development</h3>
          <p className="text-gray-400 text-sm">Built to your exact specifications</p>
        </div>
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 text-center">
          <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Fast Execution</h3>
          <p className="text-gray-400 text-sm">Lightning-fast trade execution</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <Link
          to="/mt5-development"
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default MT5BotPortal;
