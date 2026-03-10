import type { FinanceInfo } from "../types/FinanceInfo";

const FINANCE_KEY = 'user_finances'

export function loadFinances(): FinanceInfo[] {
  const stored = localStorage.getItem(FINANCE_KEY)

  if(!stored) return []

  try {
    return JSON.parse(stored)
  } catch {
    return []
  }
}

export function saveFinanceInfo(infos: FinanceInfo[]) {
  localStorage.setItem(FINANCE_KEY, JSON.stringify(infos))
}