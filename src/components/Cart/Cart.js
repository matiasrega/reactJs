import * as React from "react";
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

  return (
    <div>
      <h1>Carrito de compras</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.nombre} - ${item.importe}
          </li>
        ))}
      </ul>
      <button onClick={handleEmptyCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
