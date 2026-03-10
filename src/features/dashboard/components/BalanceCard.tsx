import { Card } from "../../../components/ui/Card";
import { useFinance } from "../../finance/useFinance";

export function BalanceCard() {
  const {totalIncome} = useFinance()

  return <Card title="Saldo Atual" value={totalIncome()} lastValue={-145} />;
}
