import React from "react";
import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import getProduct from "../../ApiFake/data";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import { db } from "../FireBase/FireBaseConfig";
import {
  collection,
  getDocs,
  query,
  where,
  documentId,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [itemData, SetItemData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //console.log(itemData);

  let { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getItem = async () => {
      const q = query(
        collection(db, "productos"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      SetItemData(docs);
    };
    getItem();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [id]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="ItemDetail">
      {itemData.map((data) => {
        return <ItemDetail key={data.id} detalleProducto={data} />;
      })}
    </div>
  );
};

export default ItemDetailContainer;
