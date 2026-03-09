import React, { useState } from "react";
import { useAuth } from "../../auth/useAuth";

import "./formContainer.css";
import { useNavigate } from "react-router-dom";

export function AuthForm() {
  const { login, register } = useAuth();
  const navigate = useNavigate()
  const [formType, setFormType] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim) return;
    if (!password.trim) return;

    if (formType === "login") {
      const success = login(name, password);

      if (success) {
        navigate("/dashboard")
      } else {
        alert("Usuário ou senha inválidos")
      }
    } else {
      const success = register(name, password);

      if(success) {
        setFormType("login")
      } else {
        alert("Erro ao tentar criar um novo usuário")
      }
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-type-actions">
        <button
          type="button"
          className={`form-type-btn ${formType === "login" ? "active" : ""}`}
          onClick={() => setFormType("login")}
        >
          Login
        </button>

        <button
          type="button"
          className={`form-type-btn ${formType === "register" ? "active" : ""}`}
          onClick={() => setFormType("register")}
        >
          Cadastro
        </button>
      </div>

      <input
        className="form-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        placeholder="Digite seu nome"
      />

      <input
        className="form-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        placeholder="Digite sua senha"
      />

      <button className="submit-btn" type="submit">
        {formType === "login" ? "Fazer Login" : "Fazer Cadastro"}
      </button>
    </form>
  );
}
