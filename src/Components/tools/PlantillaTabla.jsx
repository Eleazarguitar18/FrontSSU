import React, { useState, useEffect } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TextField,
  TableSortLabel,
} from "@mui/material";

const PlantillaTabla = ({ columns, data, title, boton }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const filteredData = data.filter((row) => {
    return Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const sortedData = filteredData.slice().sort((a, b) => {
    if (orderBy === "") return 0;
    const comparison = a[orderBy].localeCompare(b[orderBy]);
    return order === "asc" ? comparison : -comparison;
  });

  useEffect(() => {
    setPage(0); // Reset page only when search term changes
  }, [searchTerm]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="p-7 w-full">
      <h2 className="text-slate-950 font-bold text-center p-2 mb-3 text-2xl">
        {title}
      </h2>

      <p className="m-2">
        Ingrese algún indicio de la computadora para buscarla
      </p>

      <div className="flex justify-between items-center">
        <div className="mb-4 w-full">
          <TextField
            label="Buscar"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
            className="max-w-lg mx-auto mb-4"
          />
        </div>
        <div className="bg-green-700 hover:bg-none text-center rounded w-60 ml-2 mb-4">
          {boton}
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className="bg-gradient-to-r from-blue-800 via-cyan-400 to-slate-700">
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  style={{ color: "white", textAlign: "center" }}
                >
                  <TableSortLabel
                    active={orderBy === column.key}
                    direction={orderBy === column.key ? order : "asc"}
                    onClick={() => handleRequestSort(column.key)}
                  >
                    {column.name}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className="bg-slate-200">
            {sortedData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <TableRow key={rowIndex} style={{ borderColor: "red" }}>
                  {columns.map((column, colIndex) => (
                    <TableCell key={colIndex} style={{ textAlign: "justify" }}>
                      {column.render ? column.render(row) : row[column.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={sortedData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default PlantillaTabla;
