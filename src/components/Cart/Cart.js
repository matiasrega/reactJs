import * as React from "react";
import "./Cart.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useCart } from "../CartContext/CartContext";
import { db } from "../FireBase/FireBaseConfig";
import { collection, addDoc } from "firebase/firestore";
import PurchaseEndMessage from "../PurchaseEndMessage/PurchaseEndMessage";

const Cart = () => {
  const { cartItems, updateCartItems } = useCart();
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || cartItems
  );

  const [purchaseId, setPurchaseId] = useState("");

  const pedidoRef = collection(db, "compras"); // Constate de referencia para Agregar pedido a Firestore

  const handleCheckout = async () => {
    const cartData = items; // Constante para tener la data del carrito

    const cartObject = { items: cartData }; // Convierte array en Objeto para subir a FireBase

    try {
      const docRef = await addDoc(pedidoRef, cartObject);
      //alert(docRef.id);
      //console.log("Documento escrito con ID: ", docRef.id);
      setPurchaseId(docRef.id);
      setItems([]);
      localStorage.setItem("cartItems", JSON.stringify([]));
      updateCartItems([]);
    } catch (e) {
      console.error("Error al agregar documento: ", e);
    }
  };

  const handleEmptyCart = () => {
    setItems([]);
    localStorage.setItem("cartItems", JSON.stringify([]));
    updateCartItems([]);
  };

  const handleRemoveItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    localStorage.setItem("cartItems", JSON.stringify(newItems));
    updateCartItems(newItems);
  };

  const total = items.reduce((acc, item) => acc + item.importe, 0);

  return (
    <div>
      <h1>Carrito ({cartItems.length})</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="cart-item">
            <img src={item.imagen} alt={item.nombre} />
            <div className="cartItemInfo">
              <div className="cartIteName">
                {item.presentacion.toUpperCase()} de {item.nombre.toUpperCase()}
              </div>
              <div className="cartItemPrice">Precio Final ${item.importe}</div>
            </div>
            <div className="btnItemRmv">
              <button onClick={() => handleRemoveItem(item.id)}>
                <HighlightOffIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cartFinal">
        <p>TOTAL DE TU COMPRA: ${total}</p>
        <button className="btnCheckout" onClick={handleCheckout}>
          <p>FINALIZAR COMPRA</p>
        </button>

        <button className="btnEmptyCart" onClick={handleEmptyCart}>
          <DeleteIcon className="emptyCartIcon" />
          <p>VACIAR CARRITO</p>
        </button>
      </div>
      {purchaseId.length ? (
        <PurchaseEndMessage purchaseID={purchaseId} />
      ) : null}
    </div>
  );
};

export default Cart;
