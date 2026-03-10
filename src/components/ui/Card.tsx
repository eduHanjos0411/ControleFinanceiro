interface BalanceCardProps {
  title: string
  value: number
  lastValue?: number
  popup?: React.ReactNode
}

import type React from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import "./card.css";

export function Card({ title, value, lastValue, popup }: BalanceCardProps) {
  if (typeof lastValue != "number") return "Falha ao carregar valores"
  
  const isPositive = lastValue >= 0;
  console.log(isPositive)

  return (
    <div className="balance-card-container">
      <h3 className="card-title">{title}</h3>
      <p className="card-value">{formatCurrency(value)}</p>
      <span className={`card-detail ${isPositive ? "positive" : "negative"}`}>
        {isPositive ? "+" : ""}
        {formatCurrency(lastValue)}
      </span>
      <div>
        {popup}
      </div>
    </div>
  );
}
