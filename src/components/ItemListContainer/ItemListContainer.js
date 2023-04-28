/*import * as React from "react";
import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

import { db } from "../FireBase/FireBaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [listaProductos, setListaProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const obtenerProductos = async () => {
      if (!category) return;
      const q = query(
        collection(db, "productos"),
        where("category", "==", category)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setListaProductos(docs);
    };
    obtenerProductos();

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [category]);

  return (
    <div>
      {" "}
      {isLoading ? <Spinner /> : <ItemList listaProductos={listaProductos} />}
    </div>
  );
};*/
import * as React from "react";
import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

import { db } from "../FireBase/FireBaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [listaProductos, setListaProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const obtenerProductos = async () => {
      try {
        const q = id
          ? query(collection(db, "productos"), where("category", "==", id))
          : collection(db, "productos");

        const querySnapshot = await getDocs(q);
        const docs = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })); //usar map en vez de forEach
        setListaProductos(docs);
      } catch (error) {
        console.log(error); //usar try/catch para manejar errores
      }
    };
    obtenerProductos();

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [id]);

  return (
    <div>
      {" "}
      {isLoading ? <Spinner /> : <ItemList listaProductos={listaProductos} />}
    </div>
  );
};
export default ItemListContainer;
