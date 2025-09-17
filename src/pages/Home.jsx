import Sidebar from "../componets/Sidebar.jsx";
import Header from "../componets/Header.jsx";
import "../styles/Home.css";


export default function Home({ sede }) {
  return (
    <div>
      <Header username="Nicole Velandia" />

      {/* Aquí usas la clase layout */}
      <div className="layout">
        <Sidebar />

        <div className="mainContent">
          <h1>Control de la sede</h1>
          <div className="cards-grid">
            <h4>Sede {sede}</h4>
            <div className="card">Ventas hoy:</div>
            <div className="card">Pedidos pendientes:</div>
            <button>Ver Inventario</button>
          </div>
        </div>
      </div>
    </div>
  );
}
