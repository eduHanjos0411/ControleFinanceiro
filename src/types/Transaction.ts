type transactionType = "income" | "expense" | "bill"

export interface Transaction {
  userId: number
  name: string
  type: transactionType
  value: number
}