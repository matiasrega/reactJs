import React from "react";
import Item from "../items/Item";
import "./ItemList.css";

const ItemList = ({ listaProductos }) => {
  return (
    <div className="bodyItemList">
      {listaProductos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
export default ItemList;
