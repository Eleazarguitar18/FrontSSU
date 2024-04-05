import jsPDF from "jspdf";
import "jspdf-autotable";
export const generarPDF_PC = (row) => {
  const doc = new jsPDF();

  const topHeaders = [["Nro ACTIVO FIJO", "N° DE SERIE"]];
  const caracteristicasHeader = [["CARACTERISTICAS"]];

  const bottomHeaders = [["OBSERVACIONES", "DETALLE"]];

  // Datos
  const topTableData = [
    [row.NroActivo, row.NroSerie],
    ...caracteristicasHeader,
    ["Procesador:", row.Procesador],
    ["RAM:", row.RAM],
    ["Memoria Interna:", row.MemoriaInterna],
    ["Tipo:", row.Tipo],
    ["Estado:", row.Estado],
    ["Ubicacion: ", row.Ubicacion],
    ["Unidad: ", row.Unidad],
    ["Marca: ", row.Marca],
    ["Nombre del equipo: ", row.NombreDelEquipo],
    ["Sistema Operativo: ", row.SistemaOperativo],
  ];

  const bottomTableData = [["ninguna observacion", row.Detalle]];

  doc.autoTable({
    startY: 10,
    head: topHeaders,
    body: topTableData,
    tableWidth: "wrap",
    autoWidth: true,
  });

  const topSectionHeight = doc.previousAutoTable.finalY || 10;
  const space = 10; // Adjust as needed
  const bottomSectionStartY = topSectionHeight + space;

  doc.autoTable({
    startY: bottomSectionStartY,
    head: bottomHeaders,
    body: bottomTableData,
    tableWidth: "wrap",
    autoWidth: true,
  });

  doc.save("fila_seleccionada.pdf");
};
