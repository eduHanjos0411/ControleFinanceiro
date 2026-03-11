import { TransactionTable } from "./components/TransactionTable";
import "./transactionsPage.css";

export function TransactionsPage() {
  return (
    <div className="transactions-page">
      <div className="transactions-actions">
        <button className="trans-act-btn">Adicionar</button>
      </div>
      <TransactionTable/>
    </div>
  );
}
