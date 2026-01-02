import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const FundingPathSteps: React.FC = () => {
  const steps = [
    {
      title: 'Sign Up & Setup',
      description: 'Create your account and configure your trading parameters',
      duration: '5 minutes'
    },
    {
      title: 'Start Trading with AI',
      description: 'Follow AI-powered signals and risk management protocols',
      duration: '2-4 weeks'
    },
    {
      title: 'Get Funded',
      description: 'Clear your challenge and receive your funded account',
      duration: 'Immediate'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Your Path to </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-cyan-300">
              Funding
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Three simple steps to becoming a funded trader</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 mb-4">{step.description}</p>
                <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1 text-green-400 text-sm font-semibold">
                  {step.duration}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-cyan-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FundingPathSteps;
