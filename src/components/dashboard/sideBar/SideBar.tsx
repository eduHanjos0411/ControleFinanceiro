import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../auth/useAuth";

import './sidebar.css'

export function SideBar() {
  const {user, logout} = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate("/")
  }

  return (
    <div className="sidebar-container">
      <img className="logo" src="Logo.png"/>
      <nav className="navigation">
        <Link className="nav-link" to='main'>Dashboard</Link>
        <Link className="nav-link" to='transactions'>Transações</Link>
        <Link className="nav-link" to='profile'>Perfil</Link>
      </nav>
      <div className="user">
        <h2>{user?.name} </h2>
        <button className="logout" onClick={() => handleLogout()}>Sair</button>
      </div>
    </div>
  )
}