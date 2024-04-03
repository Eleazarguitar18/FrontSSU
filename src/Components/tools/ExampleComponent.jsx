import React from "react";
import DataTable from "./PlantillaTabla";
import { Button } from "@mui/material";

const columns = [
  { label: "Nombre", key: "name" },
  { label: "Edad", key: "age" },
  {
    label: "Acciones",
    render: (row) => <Button onClick={() => handleEdit(row)}>Editar</Button>,
  },
];

const data = [
  { id: 1, name: "Juan", age: 25 },
  { id: 2, name: "María", age: 30 },
  // Otros datos...
];

const ExampleComponent = () => {
  return <DataTable columns={columns} data={data} />;
};

export default ExampleComponent;
