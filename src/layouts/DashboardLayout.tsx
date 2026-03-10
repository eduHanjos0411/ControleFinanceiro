import type React from "react";
import { SideBar } from "../components/layout/SideBar";

import './dashboardLayout.css'

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-layout">
      <SideBar />
      <div className="dashboard-content">{children}</div>
    </div>
  );
}
