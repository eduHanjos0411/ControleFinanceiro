import type React from "react";
import { SideBar } from "../../components/dashboard/sideBar/SideBar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="dashboard-content">{children}</div>
    </>
  );
}
