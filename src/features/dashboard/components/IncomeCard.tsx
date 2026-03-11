import { Card } from "../../../components/ui/Card";
import { formatCurrency } from "../../../utils/formatCurrency";
import { useFinance } from "../../finance/useFinance";

export function IncomeCard() {
  const { totalIncome, infos } = useFinance();

  if (infos?.income.salary == undefined) return;

  const popupInfo = (
    <div>
      <p>Salário: {formatCurrency(infos?.income.salary)}</p>
      {infos?.income.bonus.map((bonus, idx) => (
        <div key={idx}>
          {" "}
          {bonus.bonusName}: {bonus.bonusValue}{" "}
        </div>
      ))}
    </div>
  );

  return (
    <Card
      title="Salário Total"
      value={totalIncome()}
      lastValue={-145}
      popup={popupInfo}
    />
  );
}
