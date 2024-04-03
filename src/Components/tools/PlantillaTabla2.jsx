import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const CustomDataTable = ({ columns, data }) => {
  const [records, setRecords] = useState(data || []);
  const [loading, setLoading] = useState(!data);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!data) return;
    setRecords(data);
    setLoading(false);
  }, [data]);

  const handleChangePage = (e) => {
    setSearchTerm(e.target.value);
    const filteredData = data.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setRecords(filteredData);
  };

  function LoadingComponent() {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="bg-slate-200 p-6">
      {data && (
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChangePage}
            placeholder="Buscar..."
          />
        </div>
      )}
      <DataTable
        title="Datos"
        columns={columns}
        data={records}
        pagination
        fixedHeader
        progressComponent={<LoadingComponent />}
        progressPending={loading}
      />
    </div>
  );
};

export default CustomDataTable;
/*
const columns = [
    {
      name: "Numero de serie",
      selector: (row) => row.NroSerie,
      sortable: true,
    },
    {
      name: "Numero de Activo",
      selector: (row) => row.NroActivo,
      sortable: true,
    },
    { name: "Estado", selector: (row) => row.Estado, sortable: true },
    { name: "Ubicacion", selector: (row) => row.Ubicacion, sortable: true },
    { name: "Unidad", selector: (row) => row.Unidad, sortable: true },
    { name: "Marca", selector: (row) => row.Marca, sortable: true },
    { name: "Detalle", selector: (row) => row.Detalle, sortable: true },
    { name: "Tipo", selector: (row) => row.Tipo, sortable: true },
    {
      name: "Nombre del Equipo",
      selector: (row) => row.NombreDelEquipo,
      sortable: true,
    },
    { name: "Procesador", selector: (row) => row.Procesador, sortable: true },
    { name: "RAM", selector: (row) => row.RAM, sortable: true },
    {
      name: "Memoria Interna",
      selector: (row) => row.MemoriaInterna,
      sortable: true,
    },
    {
      name: "Sistema Operativo",
      selector: (row) => row.SistemaOperativo,
      sortable: true,
    },
    { name: "Acciones", selector: (row) => row.Acciones, sortable: true },
    { name: "Historial", selector: (row) => row.Historial, sortable: true },
  ];  */
