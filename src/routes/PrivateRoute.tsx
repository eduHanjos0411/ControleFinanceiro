import type React from "react";
import { useAuth } from "../auth/useAuth";
import { Navigate } from "react-router-dom";

export function PrivateRoute({children}: {children: React.ReactNode}) {
  const {user} = useAuth()

  if (!user) {
    return <Navigate to="/"/>
  }

  return children
}