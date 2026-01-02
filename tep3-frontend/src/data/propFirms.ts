export interface PropFirm {
  id: string;
  name: string;
  maxDailyLoss: number;
  maxTotalDrawdown: number;
  profitTarget: number;
  minTradingDays: number;
  accountSizes: number[];
}

export const propFirms: PropFirm[] = [
  {
    id: 'ftmo',
    name: 'FTMO',
    maxDailyLoss: 5,
    maxTotalDrawdown: 10,
    profitTarget: 10,
    minTradingDays: 4,
    accountSizes: [10000, 25000, 50000, 100000, 200000]
  },
  {
    id: 'myforexfunds',
    name: 'MyForexFunds',
    maxDailyLoss: 5,
    maxTotalDrawdown: 10,
    profitTarget: 8,
    minTradingDays: 5,
    accountSizes: [5000, 10000, 25000, 50000, 100000]
  },
  {
    id: 'the5ers',
    name: 'The5%ers',
    maxDailyLoss: 5,
    maxTotalDrawdown: 10,
    profitTarget: 6,
    minTradingDays: 4,
    accountSizes: [5000, 10000, 20000, 40000, 80000]
  },
  {
    id: 'fundedtradingplus',
    name: 'Funded Trading Plus',
    maxDailyLoss: 4,
    maxTotalDrawdown: 8,
    profitTarget: 10,
    minTradingDays: 3,
    accountSizes: [12500, 25000, 50000, 100000, 200000]
  },
  {
    id: 'fidelcrest',
    name: 'Fidelcrest',
    maxDailyLoss: 5,
    maxTotalDrawdown: 10,
    profitTarget: 10,
    minTradingDays: 4,
    accountSizes: [10000, 25000, 50000, 100000]
  },
  {
    id: 'fundednext',
    name: 'FundedNext',
    maxDailyLoss: 5,
    maxTotalDrawdown: 10,
    profitTarget: 8,
    minTradingDays: 5,
    accountSizes: [6000, 15000, 25000, 50000, 100000, 200000]
  }
];

export const getPropFirmById = (id: string): PropFirm | undefined => {
  return propFirms.find(firm => firm.id === id);
};

export const getPropFirmByName = (name: string): PropFirm | undefined => {
  return propFirms.find(firm => firm.name.toLowerCase() === name.toLowerCase());
};

export default propFirms;
