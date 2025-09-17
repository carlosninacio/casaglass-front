export default function InventoryTable({ data }) {
  return (
    <table className="inventory-table">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Categoría</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan="5">No hay registros</td>
          </tr>
        ) : (
          data.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.categoria}</td>
              <td>{item.cantidad}</td>
              <td>{item.precio}</td>
              <td>
                <button>Editar</button>
                <button>Eliminar</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
