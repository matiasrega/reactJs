import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material/";

const Item = ({ data }) => {
  return (
    <Card sx={{ width: 250 }}>
      <CardMedia
        component="img"
        alt={data.title}
        image={data.image}
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
          {data.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ p: "0" }}
        ></Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button size="large" variant="contained">
          Comprar
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{ textDecoration: "none", p: "0" }}
        >
          + Info
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
