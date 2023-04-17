import * as React from "react";
import "./Cart.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useCart } from "../CartContext/CartContext";

const Cart = () => {
  const { cartItems, updateCartItems } = useCart();
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || cartItems
  );

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
        {items.map((item) => (
          <li key={item.id} className="cart-item">
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

        <button className="btnEmptyCart" onClick={handleEmptyCart}>
          <DeleteIcon className="emptyCartIcon" />
          <p>VACIAR CARRITO</p>
        </button>
      </div>
    </div>
  );
};

export default Cart;
