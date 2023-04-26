import { initializeApp } from "firebase/app";
import { getFirestore /*, collection, addDoc*/ } from "firebase/firestore";
/*import { productos } from "../../ApiFake/data"; */ //---> se comenta ya que ya se han subido los archivos a FB

//Firebase V1
/*const firebaseConfig = {
  apiKey: "AIzaSyDa20TbC_5qnSuVCc7SKKXeFZXx5i2u0LE",
  authDomain: "triquetafungiecommercereactjs.firebaseapp.com",
  projectId: "triquetafungiecommercereactjs",
  storageBucket: "triquetafungiecommercereactjs.appspot.com",
  messagingSenderId: "913363917405",
  appId: "1:913363917405:web:54dbef0ce0b46e79448bb4",
  measurementId: "G-8ZPEEWLZDX",
};*/

//FireBase V2
const firebaseConfig = {
  apiKey: "AIzaSyCPqoQAHUDE5QQXpxSSl2HoP0iCjD5QOtw",
  authDomain: "triquetafungireactjs-1d5fe.firebaseapp.com",
  projectId: "triquetafungireactjs-1d5fe",
  storageBucket: "triquetafungireactjs-1d5fe.appspot.com",
  messagingSenderId: "201348541276",
  appId: "1:201348541276:web:5b0eb83822c2a6df8f2f99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Creando los productos desde ApiFake/Data.JS
/*const productosCollection = collection(db, "productos");
productos.forEach(async (producto) => {
  await addDoc(productosCollection, producto);
});*/ //---> funcion deshabilitada ya que se hizo la carga inicial a firebase.
