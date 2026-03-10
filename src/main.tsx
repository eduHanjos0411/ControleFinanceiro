import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./features/auth/AuthContext.tsx";

import "./styles/index.css";
import "./styles/variables.css";
import { FinanceProvider } from "./features/finance/FinanceContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FinanceProvider>
          <App />
        </FinanceProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
