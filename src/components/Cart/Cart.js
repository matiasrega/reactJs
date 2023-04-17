import * as React from "react";
import { useState } from "react";
import { useCart } from "../CartContext/CartContext";
/*import Item from "../items/Item";*/

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

  const total = items.reduce((acc, item) => acc + item.importe, 0);

  return (
    <div>
      <h1>Carrito de compras</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.nombre} - ${item.importe}
            <img src={item.imagen} alt={item.nombre} />
          </li>
        ))}
      </ul>

      <p>Total de la Compra: ${total}</p>

      <button onClick={handleEmptyCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
