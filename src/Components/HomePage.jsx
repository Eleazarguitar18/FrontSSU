import React from "react";
import ImageHomePage from "../image/ImageHomePage.png"; // Importa la imagen correctamente

export default function HomePage() {
  return (
    <div className="p-10 ">
      <div>
        <h1 style={{ fontSize: "36px", color: "#fff" }}>
          Gestiona el mantenimiento de tus equipos!!
        </h1>
      </div>
      <div className="p-16">
        <img
          src={ImageHomePage} // Usa la variable que contiene la ruta de la imagen
          alt="Imagen"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Para asegurar que la imagen cubra todo el contenedor
          }}
        />
      </div>
    </div>
  );
}
