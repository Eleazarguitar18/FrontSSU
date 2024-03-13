import React from "react";

const MostPeriferico = ({
  NroSerie,
  NroActivo,
  Estado,
  Ubicacion,
  Unidad,
  Marca,
  Detalle,
  Tipo,
  Descripcion,
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
        <strong>Descripción:</strong> {Descripcion}
      </p>
    </div>
  );
};

export default MostPeriferico;
