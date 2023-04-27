import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const PurchaseEndMessage = ({ purchaseID }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">
        Gracias por su compra! Su pedido fue registrado con el codigo:{" "}
        {purchaseID}
        ¡En unos minutos nos comunicaremos via correo electronico!
      </Alert>
    </Stack>
  );
};

export default PurchaseEndMessage;
