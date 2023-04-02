import * as React from "react";
import Item from "../items/Item";
import axios from "axios";
import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

//https://fakestoreapi.com/products

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios("https://fakestoreapi.com/products").then((res) =>
      setProductos(res.data)
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="ItemList">
      {productos.map((productos) => {
        return (
          <Link className="ItemLink" to={`/Item/${productos.id}`}>
            {isLoading ? (
              <Spinner />
            ) : (
              <Item data={productos} key={productos.id} />
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
