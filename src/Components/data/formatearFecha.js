export const formatearFecha = (fecha) => {
    const fechaObj = new Date(fecha);
    const dia = fechaObj.getDate();
    const mes = fechaObj.getMonth() + 1; // Los meses van de 0 a 11
    const año = fechaObj.getFullYear();

    // Agregar ceros a la izquierda si es necesario
    const diaFormateado = dia < 10 ? '0' + dia : dia;
    const mesFormateado = mes < 10 ? '0' + mes : mes;

    // Construir la cadena de texto en el formato deseado
    const fechaFormateada = `${diaFormateado}/${mesFormateado}/${año}`;

    return fechaFormateada;
}

export const obtenerFechaActual = () => {
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1; // Los meses van de 0 a 11, por lo que sumamos 1
    const dia = fechaActual.getDate();

    // Puedes formatear la fecha como desees, por ejemplo, en formato "YYYY-MM-DD"
    const fechaFormateada = `${año}-${mes < 10 ? "0" + mes : mes}-${dia < 10 ? "0" + dia : dia
        }`;

    return fechaFormateada;
};

//   const fecha = "2024-04-15T12:00:00Z"; // Ejemplo de fecha recibida del backend
//   const fechaFormateada = formatearFecha(fecha);
//   console.log(fechaFormateada); // Resultado: "15/04/2024"
