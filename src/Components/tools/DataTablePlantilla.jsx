import DataTable from "react-data-table-component";
import { useEffect } from "react";

export default function DataTablePlantilla() {
  // const [data, setData] = useEffect();

  const data = [
    {
      nombre: "Juan",
      apellido: "Perez",
      edad: 25,
    },
    {
      nombre: "Juan",
      apellido: "Perez",
      edad: 25,
    },
    {
      nombre: "Juan",
      apellido: "Perez",
      edad: 25,
    },
    {
      nombre: "Juan",
      apellido: "Perez",
      edad: 25,
    },
    {
      nombre: "Juan",
      apellido: "Perez",
      edad: 25,
    },
    {
      nombre: "Juan",
      apellido: "Perez",
      edad: 25,
    },
    {
      nombre: "Juan",
      apellido: "Perez",
      edad: 25,
    },
    {
      nombre: "Juan",
      apellido: "Perez",
      edad: 25,
    },
    {
      nombre: "Juan",
      apellido: "Perez",
      edad: 25,
    },
  ];

  const columns = [
    { name: "Nombre", selector: (row) => row.nombre },
    { name: "Apellido", selector: (row) => row.apellido },
    { name: "Edad", selector: (row) => row.edad },
  ];

  return <div className="bg-slate-700 p-5"></div>;
}
