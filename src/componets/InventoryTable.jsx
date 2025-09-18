import "../styles/InventoryTable.css"
export default function InventoryTable({ data }) {
  return (
    <div className="inventory-table-container">
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Cantidad</th>
            <th>Cantidad Insula</th>
            <th>Cantidad Centro</th>
            <th>Cantidad Patios</th>
            <th>Precio</th>
            <th>Precio Especial</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="9">No hay registros</td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.categoria}</td>
                <td>{item.cantidad}</td>
                <td>{item.cantidadInsula}</td>
                <td>{item.cantidadCentro}</td>
                <td>{item.cantidadPatios}</td>
                <td>{item.precio}</td>
                <td>{item.precioEspecial}</td>
                <td>
                  <button className="btn-edit">Editar</button>
                  <button className="btn-delete">Eliminar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

