import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ComprehensiveFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does TraderEdge Pro help me clear my prop firm challenge?',
      answer: 'We provide AI-powered trading signals, comprehensive risk management tools, and expert guidance to help you follow prop firm rules while maximizing your success rate.'
    },
    {
      question: 'What is your success rate?',
      answer: 'Our users achieve a 94% success rate in clearing prop firm challenges, compared to the industry average of 30%.'
    },
    {
      question: 'Which prop firms do you support?',
      answer: 'We support 150+ prop firms including FTMO, MyForexFunds, The5%ers, FundedNext, and many more.'
    },
    {
      question: 'Do I need trading experience?',
      answer: 'No prior experience is required. Our platform is designed for both beginners and experienced traders, with comprehensive guidance at every step.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use bank-level encryption and security measures to protect your data and trading information.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Frequently Asked </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Everything you need to know about TraderEdge Pro</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-cyan-400 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveFAQ;
