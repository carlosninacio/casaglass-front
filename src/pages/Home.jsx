import Sidebar from "../componets/Sidebar.jsx";
import Header from "../componets/Header.jsx";
import "../styles/Home.css";

export default function Home({ sede }) {
  return (
    <div className="home">
      <Header username={"Nicole Velandia"}/>
      <Sidebar/>
    </div>
  );
}
