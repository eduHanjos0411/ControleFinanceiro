
import type React from 'react';
import './authLayout.css'

export function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <div className="auth-page">
        {children}
      </div>
    </>
  );
}
