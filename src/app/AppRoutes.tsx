import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../features/dashboard/DashboardPage";
import { DashboardPageMain } from "../features/dashboard/DashboardPageMain";
import { ProfilePage } from "../features/profile/ProfilePage";
import { TransactionsPage } from "../features/transactions/TransactionsPage";
import { AuthPage } from "../features/auth/AuthPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />

      <Route path="/dashboard" element={<DashboardPage />}>
        <Route path="main" element={<DashboardPageMain />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="transactions" element={<TransactionsPage />} />
      </Route>
    </Routes>
  );
}
