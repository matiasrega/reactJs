import React from "react";
import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
// FIRBASE - FIRESTORE
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../FireBase/FireBaseConfig";

const ItemDetailContainer = () => {
  const [itemDetail, SetItemDetail] = useState({});

  let { id } = useParams();

  useEffect(() => {
    // Obtener una referencia a la colección de productos
    const productsRef = collection(db, "productos");
    // Hacer una consulta por el id del producto
    const q = query(productsRef, where("id", "==", id));
    // Obtener un snapshot de la consulta
    getDocs(q)
      .then((querySnapshot) => {
        // Acceder al primer documento del resultado
        const doc = querySnapshot.docs[0];
        if (doc) {
          // Obtener los datos del documento y guardarlos en el estado
          const data = doc.data();
          SetItemDetail(data);
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="ItemDetail">
      <ItemDetail detalleProducto={itemDetail} />
    </div>
  );
};

export default ItemDetailContainer;
