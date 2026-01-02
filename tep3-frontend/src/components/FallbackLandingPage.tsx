import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const FallbackLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            TraderEdge Pro
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional prop firm clearing service with expert guidance
          </p>
          <Link
            to="/signup"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FallbackLandingPage;
