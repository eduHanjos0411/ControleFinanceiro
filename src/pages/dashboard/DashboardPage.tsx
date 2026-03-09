import { Outlet } from "react-router-dom";
import { DashboardLayout } from "../../layouts/dashboardLayout/DashboardLayout";

export function DashboardPage() {
  return (
      <DashboardLayout>
        <Outlet/>
      </DashboardLayout>
  );
}
