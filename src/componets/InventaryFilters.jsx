export default function InventoryFilters({ filters, setFilters }) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />

      <select
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
      >
        <option value="">Todas las categorías</option>
        <option value="Vidrios">Vidrios</option>
        <option value="Aluminio">Aluminio</option>
        <option value="Accesorios">Accesorios</option>
      </select>
    </div>
  );
}
