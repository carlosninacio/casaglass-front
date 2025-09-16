import "../styles/AdminPage.css";
import Sidebar from "../componets/Sidebar.jsx";
import Header from "../componets/Header.jsx";
import users from "../assets/users.png"
import invetario from "../assets/inventario.png"
import movimientos from "../assets/movimientos.png"
import clientes from "../assets/clientes.png"


export default function AdminPage(){
    return(
        <div className="app-root">
        <Header username="Nicole Velandia"/>
        <div className="layout">
        <Sidebar/>
        <div className="mainContent">
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
        <img src={invetario} alt="inventario" />
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
  </div>
</div>

        </div>
    )
}