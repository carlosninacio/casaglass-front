import Sidebar from "../componets/Sidebar.jsx";
import Header from "../componets/Header.jsx";

export default function Home(){
    return(
        <div>
        <Header username="Nicole Velandia"/>
        <Sidebar/>
        <div className="mainContent">
        <h1>Panel de Control de Actividades</h1>
        {/* aquí pones el contenido principal */}
        <div className="cards-grid">
        <h4>Sede Insula</h4>
        <div className="card">Ventas hoy:</div>
        <div className="card">Pedidos pendientes:</div>
        <button>Ver Inventario</button>
        
        </div>
      </div>
        </div>
    )
}