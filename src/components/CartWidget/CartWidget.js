import React from "react";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";
import { useCart } from "../CartContext/CartContext";

const CartWidget = () => {
  const { cartItems } = useCart();
  const hasProducts = cartItems.length > 0;
  return (
    <div className="CartWidget">
      <ShoppingCartCheckoutRoundedIcon
        sx={{ width: 50, heigth: 500, fontSize: "50px" }}
      />
      {hasProducts && <span className="CartCount">{cartItems.length}</span>}
    </div>
  );
};

export default CartWidget;
