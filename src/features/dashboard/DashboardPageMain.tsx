import { BalanceCard } from "./components/BalanceCard";
import { ExpenseCard } from "./components/ExpenseCard";
import { IncomeCard } from "./components/IncomeCard";

export function DashboardPageMain() {
  return (
    <>
      <BalanceCard/>
      <IncomeCard/>
      <ExpenseCard/>
    </>
  )
}