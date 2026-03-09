import { AuthForm } from "../../components/formContainer/FormContainer";

import './authLayout.css'

export function AuthLayout() {
  return (
    <>
      <div className="auth-page">
        <AuthForm />
      </div>
    </>
  );
}
