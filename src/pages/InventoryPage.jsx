// src/pages/InventoryPage.jsx
import { useState } from "react";
import Layout from "../layouts/DashboardLayout";
import Table from "../componets/InventoryTable.jsx";
import Filter from "../componets/InventaryFilters.jsx";
import "../styles/InventoryPage.css";

export default function InventoryPage() {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    status: "",
    priceMin: "",
    priceMax: "",
  });

  const [data] = useState([
    { id: 1, nombre: "Vidrio templado", categoria: "Vidrios", cantidad: 100, precio: 100 },
    { id: 2, nombre: "Perfil aluminio", categoria: "Aluminio", cantidad: 48, precio: 50 },
    // ...
  ]);

  const filteredData = data
    .filter(item =>
      item.nombre.toLowerCase().includes(filters.search.toLowerCase())
    )
    .filter(item => filters.category === "" || item.categoria === filters.category)
    .filter(item => filters.status === "" || item.estado === filters.status)
    .filter(item => {
      const precio = Number(item.precio);
      const min = filters.priceMin ? Number(filters.priceMin) : -Infinity;
      const max = filters.priceMax ? Number(filters.priceMax) : Infinity;
      return precio >= min && precio <= max;
    });

  return (
    <Layout>
      <h3>Filtros de búsqueda:</h3>
      <div className="filters">
        <Filter filters={filters} onChange={setFilters} />
      </div>

      <div className="table">
        <Table data={filteredData} />
      </div>
    </Layout>
  );
}
