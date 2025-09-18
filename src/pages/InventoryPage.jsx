import { useEffect, useState } from "react";
import Sidebar from "../componets/Sidebar.jsx";
import Header from "../componets/Header.jsx";
import Table from "../componets/InventoryTable.jsx";
import Filter from "../componets/InventaryFilters.jsx";

import "../styles/InventoryPage.css";

export default function Inventory (){
    const [filters, setFilters] = useState({
    search: "",
    category: "",
    status: "",
    priceMin: "",
    priceMax: "",
  });

     const [data, setData] = useState([
    { id: 1, nombre: "Vidrio templado", categoria: "Vidrios", cantidad: 100,cantidadInsula: 100,cantidadCentro: 100,cantidadPatios: 100, precio: 100 , precioEspecial: 90 },
    { id: 2, nombre: "Perfil aluminio", categoria: "Aluminio", cantidad: 48,cantidadInsula: 100,cantidadCentro: 100,cantidadPatios: 100, precio: 50 , precioEspecial: 40 },
    { id: 1, nombre: "Vidrio templado", categoria: "Vidrios", cantidad: 100,cantidadInsula: 100,cantidadCentro: 100,cantidadPatios: 100, precio: 100 , precioEspecial: 90 },
    { id: 2, nombre: "Perfil aluminio", categoria: "Aluminio", cantidad: 48,cantidadInsula: 100,cantidadCentro: 100,cantidadPatios: 100, precio: 50 , precioEspecial: 40 },
    { id: 1, nombre: "Vidrio templado", categoria: "Vidrios", cantidad: 100,cantidadInsula: 100,cantidadCentro: 100,cantidadPatios: 100, precio: 100 , precioEspecial: 90 },
    { id: 2, nombre: "Perfil aluminio", categoria: "Aluminio", cantidad: 48,cantidadInsula: 100,cantidadCentro: 100,cantidadPatios: 100, precio: 50 , precioEspecial: 40 },
    { id: 1, nombre: "Vidrio templado", categoria: "Vidrios", cantidad: 100,cantidadInsula: 100,cantidadCentro: 100,cantidadPatios: 100, precio: 100 , precioEspecial: 90 },
    { id: 2, nombre: "Perfil aluminio", categoria: "Aluminio", cantidad: 48,cantidadInsula: 100,cantidadCentro: 100,cantidadPatios: 100, precio: 50 , precioEspecial: 40 },
    { id: 1, nombre: "Vidrio templado", categoria: "Vidrios", cantidad: 100,cantidadInsula: 100,cantidadCentro: 100,cantidadPatios: 100, precio: 100 , precioEspecial: 90 },
    { id: 2, nombre: "Perfil aluminio", categoria: "Aluminio", cantidad: 48,cantidadInsula: 100,cantidadCentro: 100,cantidadPatios: 100, precio: 50 , precioEspecial: 40 },
    { id: 1, nombre: "Vidrio templado", categoria: "Vidrios", cantidad: 100,cantidadInsula: 100,cantidadCentro: 100,cantidadPatios: 100, precio: 100 , precioEspecial: 90 },
    { id: 2, nombre: "Perfil aluminio", categoria: "Aluminio", cantidad: 48,cantidadInsula: 100,cantidadCentro: 100,cantidadPatios: 100, precio: 50 , precioEspecial: 40 },
    { id: 1, nombre: "Vidrio templado", categoria: "Vidrios", cantidad: 100,cantidadInsula: 100,cantidadCentro: 100,cantidadPatios: 100, precio: 100 , precioEspecial: 90 },
    { id: 2, nombre: "Perfil aluminio", categoria: "Aluminio", cantidad: 48,cantidadInsula: 100,cantidadCentro: 100,cantidadPatios: 100, precio: 50 , precioEspecial: 40 },
    
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
    
    return(
        //div general
        <div >
            <Header/>
            <Sidebar/>
            
            
            <div> 
                <h3>Filtros de busqueda:</h3>
                <div className="filters">
                
                <Filter filters={filters} onChange={setFilters} />


                </div>
                <div className="table">
                    <Table data={filteredData} />

                </div>
                <div>
                
                </div>
            </div>
            
        </div>

    );
}