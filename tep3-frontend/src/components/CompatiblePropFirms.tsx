import React from 'react';

const CompatiblePropFirms: React.FC = () => {
  const propFirms = ['FTMO', 'MyForexFunds', 'The5%ers', 'Funded Trading Plus', 'Fidelcrest', 'FundedNext'];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 mb-6">Compatible with 150+ prop firms including:</p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {propFirms.map((firm, index) => (
            <div
              key={index}
              className="bg-white/[0.02] border border-white/[0.06] rounded-lg px-6 py-3 text-white font-semibold hover:border-white/[0.15] transition-all duration-300"
            >
              {firm}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompatiblePropFirms;
