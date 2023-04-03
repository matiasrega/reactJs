import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import "../Pages/Background.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductosPorCategoria = () => {
  const [category, setCategory] = useState({});

  return (
    <div className="body">
      <ItemListContainer />
    </div>
  );
};

export default ProductosPorCategoria;
