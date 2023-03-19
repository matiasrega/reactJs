import React from "react";
import "./NavBar.css";
import hongosPage from "./hongosPage.svg";
import investigacionPage from "./investigacionPage.svg";
import productosPage from "./productosPage.svg";
import contactoPage from "./ContactoPage.svg";
import triquetaLogo from "./triquetaLogo.png";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="logo">
        <img src={triquetaLogo} alt="triquetaLogo" />
      </div>
      <ul>
        <li>
          <a href="https://triquetafungi.000webhostapp.com/page/hongos.html">
            <div>
              <img src={hongosPage} alt="hongosPage" />
              <p>Hongos</p>
            </div>
          </a>
        </li>
        <li>
          <a href="https://triquetafungi.000webhostapp.com/page/investigacionesyposiblesaplicaciones.html">
            <div>
              <img src={investigacionPage} alt="investacionPage" />
              <p>Investigación</p>
            </div>
          </a>
        </li>
        <li>
          <a href="https://triquetafungi.000webhostapp.com/page/hongos.html">
            <div>
              <img src={productosPage} alt="productosPage" />
              <p>Productos</p>
            </div>
          </a>
        </li>
        <li>
          <a href="https://triquetafungi.000webhostapp.com/page/contactateconnosotros.html">
            <div>
              <img src={contactoPage} alt="contactoPage" />
              <p>Contacto</p>
            </div>
          </a>
        </li>
      </ul>
      <div className="ShopNavBar">
        <CartWidget />
        <p>10</p>
      </div>
    </div>
  );
};

export default NavBar;
