import React from 'react';
import { Check } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

interface PlanSelectionProps {
  plans?: Plan[];
  selectedPlanId?: string;
  onSelectPlan?: (planId: string) => void;
}

const PlanSelection: React.FC<PlanSelectionProps> = ({
  plans = [],
  selectedPlanId = 'pro',
  onSelectPlan = () => {}
}) => {
  const defaultPlans: Plan[] = [
    {
      id: 'starter',
      name: 'Starter',
      price: 49,
      features: ['Basic signals', 'Risk management', 'Email support']
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 99,
      features: ['All Starter features', 'Advanced signals', 'Priority support', 'Trading journal']
    },
    {
      id: 'elite',
      name: 'Elite',
      price: 199,
      features: ['All Pro features', 'Personal coach', 'Custom strategies', '24/7 support']
    }
  ];

  const displayPlans = plans.length > 0 ? plans : defaultPlans;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {displayPlans.map((plan) => (
        <div
          key={plan.id}
          className={`bg-white/[0.02] border rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
            selectedPlanId === plan.id
              ? 'border-cyan-400 shadow-xl shadow-cyan-500/20'
              : 'border-white/[0.08] hover:border-white/[0.15]'
          }`}
          onClick={() => onSelectPlan(plan.id)}
        >
          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
          <div className="text-4xl font-bold text-cyan-400 mb-6">
            ${plan.price}
            <span className="text-lg text-gray-400">/mo</span>
          </div>
          <ul className="space-y-3">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2 text-gray-300">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PlanSelection;
