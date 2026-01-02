import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingConversionHub: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-80 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-bold text-lg">Ready to Start?</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-gray-300 text-sm mb-6">
            Join 2,847+ successful traders who cleared their challenges
          </p>

          <div className="space-y-3">
            <Link
              to="/signup"
              className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Get Started Free
            </Link>
            <Link
              to="/membership"
              className="block w-full bg-gray-800 hover:bg-gray-700 text-white text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingConversionHub;
