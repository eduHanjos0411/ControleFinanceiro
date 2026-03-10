import { AuthLayout } from "../../layouts/AuthLayout";
import { AuthForm } from "../../components/form/FormContainer";

export function AuthPage() {
  return (
    <AuthLayout>
      <AuthForm />
    </AuthLayout>
  );
}
