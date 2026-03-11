export function formatCurrency(value: number): string {
  if (typeof value != "number") {return ""}

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}