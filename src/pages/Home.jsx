// src/pages/Home.jsx
import "../styles/Home.css";

export default function Home({ sede }) {
  return (
    <div className="home">
      <h1>Control de la sede</h1>
      <p>Sede {sede}</p>
      {/* Aquí tus cards, tablas, etc. */}
    </div>
  );
}
