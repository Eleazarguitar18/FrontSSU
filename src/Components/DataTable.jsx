/* import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const DataTable = ({ data }) => {
  const columns = [
    "id_Dispositivo",
    "NroSerie",
    "NroActivo",
    "Estado",
    "Ubicacion",
    "Unidad",
    "Marca",
    "Detalle",
    "Tipo",
    "NombreEquipo",
    "Procesador",
    "RAM",
    "MemoriaInterna",
    "SistemaOperativo",
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id_Dispositivo}>
              {columns.map((column) => (
                <TableCell key={column}>{row[column]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
 */

// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";

// const DataTable = ({ data }) => {
//   const columns = [
//     "id_Dispositivo",
//     "NroSerie",
//     "NroActivo",
//     "Estado",
//     "Ubicacion",
//     "Unidad",
//     "Marca",
//     "Detalle",
//     "Tipo",
//     "NombreEquipo",
//     "Procesador",
//     "RAM",
//     "MemoriaInterna",
//     "SistemaOperativo",
//   ];

//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             {columns.map((column) => (
//               <TableCell key={column}>{column}</TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row) => (
//             <TableRow key={row.id_Dispositivo}>
//               {columns.map((column) => (
//                 <TableCell key={column}>
//                   {/* Acceder a los datos dentro de Dispositivo */}
//                   {column === "id_Dispositivo"
//                     ? row[column]
//                     : row.Dispositivo[column]}
//                 </TableCell>

//               ))}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default DataTable;

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const DataTable = ({ data }) => {
  const columns = [
    "id_Dispositivo",
    "Dispositivo.NroSerie",
    "Dispositivo.NroActivo",
    "Dispositivo.Estado",
    "Dispositivo.Ubicacion",
    "Dispositivo.Unidad",
    "Dispositivo.Marca",
    "Dispositivo.Detalle",
    "Dispositivo.Tipo",
    "NonmbreDelEquipo",
    "Procesador",
    "RAM",
    "MemoriaInterna",
    "SistemaOperativo",
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column}>
                  {/* Acceder a los datos dentro de Dispositivo */}
                  {column.includes("Dispositivo.")
                    ? row["Dispositivo"][column.split(".")[1]]
                    : row[column]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
