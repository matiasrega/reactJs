import React from "react";
import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProduct from "../../ApiFake/data";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [itemDetail, SetItemDetail] = useState({});

  let { id } = useParams();

  useEffect(() => {
    getProduct()
      .then((res) => SetItemDetail(res.find((item) => item.id === id)))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="ItemDetail">
      <ItemDetail detalleProducto={itemDetail} />
    </div>
  );
};

export default ItemDetailContainer;
