import React from "react";

const MostComputadora = ({
  NroSerie,
  NroActivo,
  Estado,
  Ubicacion,
  Unidad,
  Marca,
  Detalle,
  Tipo,
  NombreEquipo,
  Procesador,
  RAM,
  MemoriaInterna,
  SistemaOperativo,
}) => {
  return (
    <div>
      <h2>Detalles del Periférico</h2>
      <p>
        <strong>Número de Serie:</strong> {NroSerie}
      </p>
      <p>
        <strong>Número Activo:</strong> {NroActivo}
      </p>
      <p>
        <strong>Estado:</strong> {Estado}
      </p>
      <p>
        <strong>Ubicación:</strong> {Ubicacion}
      </p>
      <p>
        <strong>Unidad:</strong> {Unidad}
      </p>
      <p>
        <strong>Marca:</strong> {Marca}
      </p>
      <p>
        <strong>Detalle:</strong> {Detalle}
      </p>
      <p>
        <strong>Tipo:</strong> {Tipo}
      </p>
      <p>
        <strong>Nombre del Equipo:</strong> {NombreEquipo}
      </p>
      <p>
        <strong>Procesador:</strong> {Procesador}
      </p>
      <p>
        <strong>RAM:</strong> {RAM}
      </p>
      <p>
        <strong>Memoria Intera:</strong> {MemoriaInterna}
      </p>
      <p>
        <strong>Sistema Operativo:</strong> {SistemaOperativo}
      </p>
    </div>
  );
};

export default MostComputadora;
