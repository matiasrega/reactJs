import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const addToCart = (producto) => {
    setCartItems((items) => {
      const newItems = [...items, producto];
      localStorage.setItem("cartItems", JSON.stringify(newItems));
      return newItems;
    });
  };

  const updateCartItems = (newItems) => {
    setCartItems(newItems);
    localStorage.setItem("cartItems", JSON.stringify(newItems));
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
