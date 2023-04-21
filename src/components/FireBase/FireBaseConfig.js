import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { productos } from "../ApiFake/data";

const firebaseConfig = {
  apiKey: "AIzaSyDa20TbC_5qnSuVCc7SKKXeFZXx5i2u0LE",
  authDomain: "triquetafungiecommercereactjs.firebaseapp.com",
  projectId: "triquetafungiecommercereactjs",
  storageBucket: "triquetafungiecommercereactjs.appspot.com",
  messagingSenderId: "913363917405",
  appId: "1:913363917405:web:54dbef0ce0b46e79448bb4",
  measurementId: "G-8ZPEEWLZDX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const productosCollection = collection(db, "productos");

productos.forEach(async (producto) => {
  await addDoc(productosCollection, producto);
});
