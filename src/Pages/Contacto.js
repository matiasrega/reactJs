import React from "react";
import "../Pages/Background.css";
import FormularioContacto from "../components/Contacto/Contacto";

const Contacto = () => {
  return (
    <div className="body" style={{ height: "100vh" }}>
      <FormularioContacto />
    </div>
  );
};

export default Contacto;
