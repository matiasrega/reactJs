import { initializeApp } from "firebase/app";
import { getFirestore /*collection, addDoc*/ } from "firebase/firestore";
/*import { productos } from "../../ApiFake/data"; //---> se comenta ya que ya se han subido los archivos a FB

/*const firebaseConfig = {
  apiKey: "AIzaSyDa20TbC_5qnSuVCc7SKKXeFZXx5i2u0LE",
  authDomain: "triquetafungiecommercereactjs.firebaseapp.com",
  projectId: "triquetafungiecommercereactjs",
  storageBucket: "triquetafungiecommercereactjs.appspot.com",
  messagingSenderId: "913363917405",
  appId: "1:913363917405:web:54dbef0ce0b46e79448bb4",
  measurementId: "G-8ZPEEWLZDX",
};*/

const firebaseConfig = {
  apiKey: "AIzaSyAj0OStkZKt7l7IvijVLc0zMVWD6Pb6oUs",
  authDomain: "triquetafungireactjs.firebaseapp.com",
  projectId: "triquetafungireactjs",
  storageBucket: "triquetafungireactjs.appspot.com",
  messagingSenderId: "943122360415",
  appId: "1:943122360415:web:9c0046432767d323e493ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Creando los productos desde ApiFake/Data.JS
/*const productosCollection = collection(db, "productos");
productos.forEach(async (producto) => {
  await addDoc(productosCollection, producto);
});*/ //---> funcion deshabilitada ya que se hizo la carga inicial a firebase.
