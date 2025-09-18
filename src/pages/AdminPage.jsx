// src/pages/AdminPage.jsx
import "../styles/AdminPage.css";
import users from "../assets/users.png";
import inventario from "../assets/inventario.png";
import movimientos from "../assets/movimientos.png";
import clientes from "../assets/clientes.png";

export default function AdminPage() {
  return (
    <>
      <h1>Panel de Administrador</h1>

      <div className="cards-grid">
        <div className="card">
          <h4>Sede Insula</h4>
          <p>Ventas hoy:</p>
          <p>Pedidos pendientes:</p>
          <button>Ver Inventario</button>
        </div>

        <div className="card">
          <h4>Sede Centro</h4>
          <p>Ventas hoy:</p>
          <p>Pedidos pendientes:</p>
          <button>Ver Inventario</button>
        </div>

        <div className="card">
          <h4>Sede Patios</h4>
          <p>Ventas hoy:</p>
          <p>Pedidos pendientes:</p>
          <button>Ver Inventario</button>
        </div>
      </div>

      <div className="cards-grid">
        <div className="card">
          <button>
            <img src={users} alt="usuarios" />
            <h4>Gestión de Usuarios</h4>
          </button>
        </div>

        <div className="card">
          <button>
            <img src={inventario} alt="inventario" />
            <h4>Gestión de Inventarios</h4>
          </button>
        </div>

        <div className="card">
          <button>
            <img src={movimientos} alt="movimientos" />
            <h4>Gestión de Movimientos</h4>
          </button>
        </div>

        <div className="card">
          <button>
            <img src={clientes} alt="clientes" />
            <h4>Gestión de Clientes</h4>
          </button>
        </div>
      </div>
    </>
  );
}
