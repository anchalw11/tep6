import React from 'react';
import { Check, X } from 'lucide-react';

const EnhancedComparisonTable: React.FC = () => {
  const features = [
    { feature: 'AI-Powered Signals', traderedge: true, manual: false },
    { feature: 'Risk Management Tools', traderedge: true, manual: false },
    { feature: '24/7 Support', traderedge: true, manual: false },
    { feature: 'Prop Firm Compliance', traderedge: true, manual: false },
    { feature: 'Trading Journal', traderedge: true, manual: false },
    { feature: 'Performance Analytics', traderedge: true, manual: false },
    { feature: 'Success Rate', traderedge: '94%', manual: '30%' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Why Choose </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              TraderEdge Pro
            </span>
          </h2>
          <p className="text-gray-400 text-lg">See how we compare to traditional trading methods</p>
        </div>

        <div className="bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm rounded-3xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/[0.05]">
              <tr>
                <th className="py-4 px-6 text-left text-white font-semibold">Feature</th>
                <th className="py-4 px-6 text-center text-cyan-400 font-semibold">TraderEdge Pro</th>
                <th className="py-4 px-6 text-center text-gray-400 font-semibold">Manual Trading</th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, index) => (
                <tr key={index} className="border-t border-white/[0.05]">
                  <td className="py-4 px-6 text-gray-300">{item.feature}</td>
                  <td className="py-4 px-6 text-center">
                    {typeof item.traderedge === 'boolean' ? (
                      item.traderedge ? (
                        <Check className="w-6 h-6 text-green-400 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-cyan-400 font-semibold">{item.traderedge}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof item.manual === 'boolean' ? (
                      item.manual ? (
                        <Check className="w-6 h-6 text-green-400 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-400 font-semibold">{item.manual}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EnhancedComparisonTable;
