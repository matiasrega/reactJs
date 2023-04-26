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

/*import Item from "../items/Item";
import "./ItemList.css";
import { db } from "../FireBase/FireBaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

const ItemList = () => {
  const [productos, setProductos] = useState([]);

  const q = query(collection(db, "productos"));

  useEffect(() => {
    const obtenerProductos = async () => {
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductos(docs);
    };
    obtenerProductos();
  }, [q]);
  return (
    <div className="bodyItemList">
      {listaProductos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
export default ItemList;

/*import React from "react";
import Item from "../items/Item";
import "./ItemList.css";
import { db } from "../FireBase/FireBaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

const [productos, setProductos] = useState([]);

const q = query(collection(db, "productos"));

useEffect(() => {}, []);

const querySnapshot = await getDocs(collection(db, "cities"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

const ItemList = ({ listaProductos }) => {
  return (
    <div className="bodyItemList">
      {listaProductos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
export default ItemList;*/
