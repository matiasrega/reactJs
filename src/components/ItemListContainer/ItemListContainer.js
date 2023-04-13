import * as React from "react";
import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import getProduct from "../../ApiFake/data";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [listaProductos, setListaProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getProduct()
      .then((res) => {
        if (id) {
          setListaProductos(
            res.filter((productos) => productos.category === id)
          );
        } else {
          setListaProductos(res);
        }
      })
      .catch((error) => console.log(error));

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
