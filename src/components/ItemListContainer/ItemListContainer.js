import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ItemListContainer = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={props.img}
        title={props.DescriptionImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.gretting}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.Description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
        <Button size="small">Mas Información</Button>
      </CardActions>
    </Card>
  );
};

export default ItemListContainer;
