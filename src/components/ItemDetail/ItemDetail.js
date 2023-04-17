import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import "./ItemDetail.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";

const ItemDetail = ({ detalleProducto }) => {
  const navegar = useNavigate();
  const { addToCart } = useCart();

  const manejarCompra = (e) => {
    addToCart(detalleProducto);
    navegar("/cart");
    console.log(e.target.data);
  };

  return (
    <Card className="CardItemDetail" sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={"max-content"}
          image={detalleProducto.imagen}
          width={"max-content"}
          alt={detalleProducto.tipoDeProducto}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textTransform: "uppercase", textAlign: "center" }}
          >
            {detalleProducto.tipoDeProducto} de {detalleProducto.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {detalleProducto.descripcion}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ pt: "40px" }}
          >
            Tipo de Presentacion: {detalleProducto.presentacion}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ pt: "10px" }}
          >
            Precio: ${detalleProducto.importe}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="contained"
          sx={{ margin: "0 auto", p: "15px" }}
          onClick={(e) => {
            manejarCompra(e);
          }}
        >
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemDetail;
