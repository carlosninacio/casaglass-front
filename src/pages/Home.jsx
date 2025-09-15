import Sidebar from "../componets/Sidebar.jsx";
import Header from "../componets/Header.jsx";

export default function Home(){
    return(
        <div>
        <Header username="Nicole Velandia"/>
        <Sidebar/>
        <div className="mainContent">
        <h1>Bienvenido al Home</h1>
        {/* aquí pones el contenido principal */}
      </div>
        </div>
    )
}