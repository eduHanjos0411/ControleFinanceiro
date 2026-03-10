import { Outlet } from "react-router-dom";
import { DashboardLayout } from "../../layouts/DashboardLayout";

export function DashboardPage() {
  return (
      <DashboardLayout>
        <Outlet/>
      </DashboardLayout>
  );
}
