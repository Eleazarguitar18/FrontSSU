// import React from "react";

// export default function Datos_red() {
//   return <div>Datos_red</div>;
// }
import React from "react";

const Datos_red = (/* { dispositivos, redes } */) => {
  const dispositivos = [
    {
      id: 1,
      nombre: "PC1",
      ip: "192.168.1.2",
      mac: "AB:CD:EF:01:23:45",
      idRed: 1,
    },
    {
      id: 2,
      nombre: "PC2",
      ip: "192.168.1.3",
      mac: "AB:CD:EF:12:34:56",
      idRed: 2,
    },
  ];

  const redes = [
    { id: 1, nombre: "Red 1", tipo: "Ethernet" },
    { id: 2, nombre: "Red 2", tipo: "WiFi" },
  ];

  return (
    <div>
      <h2>Dispositivos de Red</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>IP</th>
            <th>MAC</th>
            <th>Red</th>
          </tr>
        </thead>
        <tbody>
          {dispositivos.map((dispositivo) => (
            <tr key={dispositivo.id}>
              <td>{dispositivo.id}</td>
              <td>{dispositivo.nombre}</td>
              <td>{dispositivo.ip}</td>
              <td>{dispositivo.mac}</td>
              <td>
                {redes.find((red) => red.id === dispositivo.idRed)?.nombre}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Redes</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {redes.map((red) => (
            <tr key={red.id}>
              <td>{red.id}</td>
              <td>{red.nombre}</td>
              <td>{red.tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datos_red;
