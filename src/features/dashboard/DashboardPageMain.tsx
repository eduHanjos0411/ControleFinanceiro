import { BalanceCard } from "./components/BalanceCard";

export function DashboardPageMain() {
  return (
    <>
      <BalanceCard title="Saldo Atual" value={1245.2} lastValue={1.234} />
    </>
  )
}