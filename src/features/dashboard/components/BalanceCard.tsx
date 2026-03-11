import { Card } from "../../../components/ui/Card";
import { useFinance } from "../../finance/useFinance";

export function BalanceCard() {
  const { totalIncome, infos } = useFinance()

  if (infos?.income.salary == undefined) return

  const popupInfo = (
    <div>
      <p>Calculado com base em todos os valores ganhos e despesas pagas</p>
    </div>
  )

  return <Card title="Saldo Atual" value={totalIncome()} lastValue={-145} popup={popupInfo}/>;
}
