import React from "react";
import "./NavBar.css";
import hongosPage from "./hongosPage.svg";
import productosPage from "./productosPage.svg";
import contactoPage from "./ContactoPage.svg";
import triquetaLogo from "./triquetaLogo.png";
import CartWidget from "../CartWidget/CartWidget";
import inicioPage from "./inicioPage.svg";
import investigacionPage from "./investigacionPage.svg";
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
        <Link className="link" to={"/category/alcoholaturas"}>
          <div>
            <img src={hongosPage} alt="AlcoholaturaPage" />
            <p>Alcoholaturas</p>
          </div>
        </Link>
        <Link className="link" to={"/category/comestibles"}>
          <div>
            <img src={productosPage} alt="ComestiblesPage" />
            <p>Setas Comestibles</p>
          </div>
        </Link>
        <Link className="link" to={"/category/propagacion"}>
          <div>
            <img src={investigacionPage} alt="PropagacionPage" />
            <p>Propagación</p>
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
      </div>
    </div>
  );
};

export default NavBar;
