import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { AuthLayout } from "../layouts/authLayout/AuthLayout";
import { DashboardPageMain } from "../components/dashboard/dashboardMain/DashboardPage";
import { ProfilePage } from "../components/dashboard/profile/ProfilePage";
import { TransactionsPage } from "../components/dashboard/transactions/TransactionsPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />} />

      <Route path="/dashboard" element={<DashboardPage />}>
        <Route path="main" element={<DashboardPageMain />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="transactions" element={<TransactionsPage />} />
      </Route>
    </Routes>
  );
}
