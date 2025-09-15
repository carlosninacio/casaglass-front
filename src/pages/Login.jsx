import "../styles/Login.css";
import logo from "../assets/logocasaglass.png";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate("/home");
    }
  return (
    <div>
      <form className="formLogin" onSubmit={handleSubmit}>
        <div>
          <img  src={logo} alt="CASAGALSS APP" className="logocasaglas-login" />
        </div>

        <div>
          <label>Usuario:</label>
          <input type="text" />
        </div>

        <div>
          <label>Contraseña:</label>
          <input type="password" />
        </div>

        <button type="submit" on>Entrar</button>
      </form>
    </div>
  );
}