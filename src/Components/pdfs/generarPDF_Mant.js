import jsPDF from "jspdf";
import "jspdf-autotable";
import ssu_lapaz from "../images/ssu-lapaz.png";

export const generarPDF_Mant = (row) => {
  const doc = new jsPDF();
  const anio = new Date().getFullYear();

  // Encabezados superiores
  const topHeaders = [
    ["UNIDAD DE TECNOLOGÍA DE LA INFORMACIÓN"],
    ["FORMULARIO DE ASISTENCIA TÉCNICA " + anio.toString()],
  ];

  // Agregar imagen al lado derecho de la cabecera
  const imgData = ssu_lapaz;
  const imgWidth = 35; // Ajusta el ancho de la imagen según tu necesidad
  const imgHeight = 40; // Ajusta la altura de la imagen según tu necesidad
  const headerHeight = doc.getTextDimensions(topHeaders[0][0]).h; // Obtener la altura del primer elemento del top header
  doc.addImage(
    imgData,
    "PNG",
    doc.internal.pageSize.getWidth() - imgWidth - 10,
    headerHeight + 50, // Centrar verticalmente la imagen respecto al top header
    imgWidth,
    imgHeight
  );

  // Datos del usuario
  const datosUsuario = [
    ["NOMBRES:", row.PersonalSSU.Nombres],
    [
      "APELLIDOS:",
      row.PersonalSSU.ApellidoPaterno + " " + row.PersonalSSU.ApellidoMaterno,
    ],
    ["UNIDAD / SERVICIO:", row.PersonalSSU.Unidad],
    ["CARGO:", row.PersonalSSU.Cargo],
    ["FECHA Y HORA INICIO:", row.fecha_inicial],
    ["FECHA Y HORA FIN:", row.fecha_final],
    // ... Agrega más datos según sea necesario
  ];

  // Datos del equipo
  const datosEquipo = [
    ["N° SERIE:", row.Dispositivo.NroSerie],
    ["N° ACTIVO FIJO:", row.Dispositivo.NroActivo],
    ["TIPO:", row.Dispositivo.Tipo],
    // ... Agrega más datos según sea necesario
  ];

  // Fuente que incluye el caracter '▢'
  //   doc.setFont("Arial Unicode MS");

  const fallaReportada = [[row.tipo_falla, row.Detalles]];
  const Firmas = [
    [
      "___________________________                        ",
      "___________________________",
    ],
    [
      "Encargado " + row.encargadoMant + "                        ",
      "Usuario " +
        row.PersonalSSU.Nombres +
        " " +
        row.PersonalSSU.ApellidoPaterno +
        " " +
        row.PersonalSSU.ApellidoMaterno,
    ],
  ];
  const Recomendaciones = [[row.recomendaciones]];
  // Genera las tablas
  doc.autoTable({
    startY: 30, // Cambia la posición de inicio según el espacio ocupado por la cabecera
    head: topHeaders,
    body: [], // No hay datos para los encabezados de título
    tableWidth: "match",
    autoWidth: true,
    headStyles: {
      halign: "center", // Centra el texto horizontalmente
    },
  });

  doc.autoTable({
    startY: doc.previousAutoTable.finalY + 10,
    head: [["DATOS DEL USUARIO", "  "]],
    body: datosUsuario,
    tableWidth: "wrap",
    autoWidth: true,
  });

  doc.autoTable({
    startY: doc.previousAutoTable.finalY + 10,
    head: [["DATOS DEL EQUIPO", "  "]],
    body: datosEquipo,
    tableWidth: "wrap",
    autoWidth: true,
  });

  doc.autoTable({
    startY: doc.previousAutoTable.finalY + 10,
    head: [["FALLA REPORTADA", " DETALLES"]],
    body: fallaReportada,
    tableWidth: "wrap",
    autoWidth: true,
  });

  doc.autoTable({
    startY: doc.previousAutoTable.finalY + 10,
    head: [["RECOMENDACIONES"]],
    body: Recomendaciones,
    tableWidth: "wrap",
    autoWidth: true,
    // Establece el color de relleno en blanco para todas las filas
  });

  doc.autoTable({
    theme: "plain",
    startY: doc.previousAutoTable.finalY + 30,
    body: Firmas,
    tableWidth: "wrap",
    autoWidth: true,
    bodyStyles: {
      halign: "center", // Centra el texto horizontalmente
    },
  });

  // Continúa este patrón para otras secciones de tu PDF

  doc.save("Informe_Mantenimiento.pdf");
};
