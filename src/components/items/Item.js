import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material/";
import "./Item.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";

const Item = ({ producto }) => {
  const { addToCart } = useCart();

  const navegar = useNavigate();

  const manejarCompra = (e) => {
    addToCart(producto);
    navegar("/cart");
    console.log(e.target.data);
  };

  const { id, nombre, tipoDeProducto, presentacion, importe, imagen } =
    producto;

  return (
    <Card className="itemCard" sx={{ width: 250 }}>
      <CardMedia
        component="img"
        alt={nombre}
        image={imagen}
        height={"max-content"}
        width={"250"}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h10"
          component="div"
          width={"fit-content"}
          sx={{
            m: "0",
            textTransform: "uppercase",
            p: "0",
            textAlign: "center",
          }}
        >
          {tipoDeProducto} de {nombre}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ p: "5", m: "10" }}
        >
          {" "}
          Presentación: {presentacion}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ pt: "5", m: "10" }}
        >
          {" "}
          Precio: ${importe}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button onClick={manejarCompra} size="large" variant="contained">
          Comprar
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{ p: "0" }}
          onClick={() => {
            navegar(`/item/${id}`);
          }}
        >
          + Info
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
