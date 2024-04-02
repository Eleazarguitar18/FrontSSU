import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
const TablaPage = () => {
  const columns = [
    { name: "Nombre", selector: (row) => row.nombre, sortable: true },
    { name: "Apellido", selector: (row) => row.apellido },
    { name: "Edad", selector: (row) => row.edad },
  ];
  const data = [
    {
      nombre: "Juan",
      apellido: "Perez",
      edad: 25,
    },
    {
      nombre: "Maria",
      apellido: "Perez",
      edad: 25,
    },
    {
      nombre: "MArio",
      apellido: "Perez",
      edad: 25,
    },
    {
      nombre: "Juan",
      apellido: "Perez",
      edad: 25,
    },
    {
      nombre: "Maria",
      apellido: "Perez",
      edad: 25,
    },
    {
      nombre: "MArio",
      apellido: "Perez",
      edad: 25,
    },
    {
      nombre: "Juan",
      apellido: "Perez",
      edad: 25,
    },
    {
      nombre: "Maria",
      apellido: "Perez",
      edad: 25,
    },
    {
      nombre: "MArio",
      apellido: "Perez",
      edad: 25,
    },
  ];

  const [records, setRecords] = useState(data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRecords(data);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);
  function Cargando() {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }
  const handleChangePage = (e) => {
    const filtradoDatos = data.filter((record) => {
      return record.nombre.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecords(filtradoDatos);
    // console.log(e.target.value);
  };
  return (
    <div className="bg-slate-200 p-6">
      <div>
        <input type="text" onChange={handleChangePage} />
      </div>
      <DataTable
        title="Datos"
        columns={columns}
        data={records}
        pagination
        // paginationPerPage={4}
        fixedHeader
        progressComponent={<Cargando />}
        progressPending={loading}
      />
    </div>
  );
};

export default TablaPage;
