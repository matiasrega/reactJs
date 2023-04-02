import React from "react";
import "../Pages/Background.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "../components/Spinner/Spinner";

const Error = () => {
  const Navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      Navigate("/");
    }, 2000);
  }, [Navigate]);

  return (
    <div
      className="body"
      style={{
        textAlign: "center",
        fontSize: "50px",
        height: "100vh",
      }}
    >
      <p>La página que ingresaste no existe</p>
      <p>Redirigiendo al home</p>
      <div style={{ justifyContent: "center" }}>
        <Spinner />
      </div>
    </div>
  );
};

export default Error;
