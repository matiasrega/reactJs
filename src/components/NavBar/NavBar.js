import React from "react";
import "./NavBar.css";
import hongosPage from "./hongosPage.svg";
import productosPage from "./productosPage.svg";
import contactoPage from "./ContactoPage.svg";
import triquetaLogo from "./triquetaLogo.png";
import CartWidget from "../CartWidget/CartWidget";
import inicioPage from "./investigacionPage.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link className="logo" to={"/"}>
        <img src={triquetaLogo} alt="triquetaLogo" />
      </Link>
      <ul>
        <div>
          <Link className="link" to={"/"}>
            <div>
              <img src={inicioPage} alt="InicioPage" />
              <p>Inicio</p>
            </div>
          </Link>
        </div>
        <Link className="link" to={"/category/:id"}>
          <div>
            <img src={hongosPage} alt="ComestiblesPage" />
            <p>Comestibles</p>
          </div>
        </Link>
        <Link className="link" to={"/category/:id"}>
          <div>
            <img src={productosPage} alt="productosPage" />
            <p>Productos Elaborados</p>
          </div>
        </Link>
        <Link className="link" to={"/Contacto"}>
          <div>
            <img src={contactoPage} alt="contactoPage" />
            <p>Contacto</p>
          </div>
        </Link>
      </ul>
      <div className="ShopNavBar">
        <CartWidget />
        <p>10</p>
      </div>
    </div>
  );
};

export default NavBar;
