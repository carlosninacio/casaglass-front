import "../styles/Header.css";
import perfil from "../assets/user.png";

export default function Header({ username }) {
  return (
    <div className="header">
      <h1>CASAGLASS APP</h1>

      <div className="div-perfil">
        <h3>{username}</h3>
        <div className="perfil-container">
          <a href="#Perfil">
            <img src={perfil} alt="PERFIL" className="perfil" />
          </a>
          {/* Menú desplegable */}
          <div className="dropdown-menu">
            <a href="#perfil">Mi perfil</a>
            <a href="#config">Configuración</a>
            <a href="#logout">Cerrar sesión</a>
          </div>
        </div>
      </div>
    </div>
  );
}
