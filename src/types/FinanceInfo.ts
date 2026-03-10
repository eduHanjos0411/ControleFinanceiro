export interface FinanceInfo {
  userId: number;
  income: {
    salary: number;
    bonus: {
      bonusName: string;
      bonusValue: number;
    }[];
  };
  expenses: {
    expenseName: string;
    expenseValue: number;
  }[];
  bills: {
    billName: string;
    billValue: number;
  }[];
}
