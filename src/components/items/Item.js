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

const Item = ({ producto }) => {
  const {
    id,
    nombre,
    tipoDeProducto,
    category,
    presentacion,
    importe,
    imagen,
    descripcion,
  } = producto;

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
          width={"200px"}
          sx={{ textAlign: "justify", m: "0", p: "0" }}
        >
          {producto.presentacion}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ p: "0" }}
        ></Typography>
        {category}
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button size="large" variant="contained">
          Comprar
        </Button>
        <Button size="small" variant="contained" sx={{ p: "0" }}>
          + Info
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
