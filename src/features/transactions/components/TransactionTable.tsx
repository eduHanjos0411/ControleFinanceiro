import type { Transaction } from "../../../types/Transaction";
import { formatCurrency } from "../../../utils/formatCurrency";

import './transactionTable.css'

const transactions: Transaction[] = [
  {
    name: "dinheiros da mamis",
    type: "income",
    userId: 1773064435786,
    value: 1234,
  },
  {
    name: "freelance",
    type: "bill",
    userId: 1773064435786,
    value: 1234,
  },
];

const typeLabel = {
  expense: "saída",
  income: "entrada",
  bill: "conta",
};

export function TransactionTable() {
  return (
    <table className="transactions-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Valor</th>
                <th>Ações</th>
              </tr>
            </thead>
    
            <tbody>
              {transactions.map((t, idx) => (
                <tr key={idx}>
                  <td>{t.name}</td>
    
                  <td>
                    {typeLabel[t.type]}
                  </td>
    
                  <td>{formatCurrency(t.value)}</td>
    
                  <td>
                    <button className="delete-btn">❌</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
  )
}