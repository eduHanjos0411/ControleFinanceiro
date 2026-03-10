import React, { createContext, useEffect, useState } from "react";
import type { FinanceInfo } from "../../types/FinanceInfo";
import type { User } from "../../types/User";
import { useAuth } from "../auth/useAuth";
import { loadFinances, saveFinanceInfo } from "../../utils/FinanceStorage";

interface FinanceContextType {
  user: User | null;
  infos: FinanceInfo | null;
  registerIncome: (salary: number) => void;
  registerBonus: (bonusName: string, bonusValue: number) => void;
  registerExpense: (expenseName: string, expenseValue: number) => void;
  registerBill: (billName: string, billValue: number) => void;
  totalIncome: () => number 
}

export const FinanceContext = createContext<FinanceContextType | null>(null);

export function FinanceProvider({ children }: { children: React.ReactNode }) {
  const [infos, setInfos] = useState<FinanceInfo | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const finances = loadFinances();

    let userFinance = finances.find((f: FinanceInfo) => f.userId === user.id);

    if (!userFinance) {
      userFinance = {
        userId: user.id,
        income: { salary: 0, bonus: [] },
        expenses: [],
        bills: [],
      };

      finances.push(userFinance);
      saveFinanceInfo(finances);
    }

    setInfos(userFinance);
  }, [user]);

  function updateFinance(updated: FinanceInfo) {
    const finances = loadFinances();

    const index = finances.findIndex(
      (f: FinanceInfo) => f.userId === updated.userId,
    );

    finances[index] = updated;

    saveFinanceInfo(finances);
    setInfos(updated);
  }

  function registerIncome(salary: number) {
    if (!infos) return;

    const updated = {
      ...infos,
      income: {
        ...infos.income,
        salary,
      },
    };

    updateFinance(updated)
  }

  function registerBonus(bonusName: string, bonusValue: number) {
    if (!infos) return;

    const updated = {
      ...infos,
      income: {
        ...infos.income,
        bonus: [...infos.income.bonus, { bonusName, bonusValue }],
      },
    };

    updateFinance(updated);
  }

  function registerExpense(expenseName: string, expenseValue: number) {
    if (!infos) return

    const updated = {
      ...infos,
      expenses: [
        ...infos.expenses,
        { expenseName, expenseValue}
      ]
    }

    updateFinance(updated)
  }

  function registerBill(billName: string, billValue: number) {
    if (!infos) return

    const updated = {
      ...infos,
      bills: [
        ...infos.bills,
        { billName, billValue}
      ]
    }

    updateFinance(updated)
  }

  function totalIncome() {
    if (!infos) return 0

    const salary = infos.income.salary ?? 0
    const bonus = infos.income.bonus.reduce(
      (total, bonus) => total +bonus.bonusValue,
      0
    ) ?? 0

    return salary + bonus

  }

  return (
    <FinanceContext.Provider value={{user, infos, registerIncome, registerBonus, registerExpense, registerBill, totalIncome}}>
    {children}
    </FinanceContext.Provider>
  )
}
