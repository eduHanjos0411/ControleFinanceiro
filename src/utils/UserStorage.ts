import type { User } from "../types/User";

const USER_KEY = "users"

export function loadUsers(): User[] {
  const stored = localStorage.getItem(USER_KEY)

  if(!stored) return []

  try {
    return JSON.parse(stored)
  } catch {
    return []
  }
}

export function saveUsers(users: User[]) {
  localStorage.setItem(USER_KEY, JSON.stringify(users))
}