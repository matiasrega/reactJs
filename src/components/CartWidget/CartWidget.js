import React from "react";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";
import { useCart } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cartItems } = useCart();
  const hasProducts = cartItems.length > 0;
  return (
    <div className="CartWidget">
      {hasProducts && (
        <>
          {" "}
          <Link to={"/cart"} style={{ textDecoration: "none" }}>
            <ShoppingCartCheckoutRoundedIcon
              sx={{ width: 50, heigth: 500, fontSize: "50px" }}
            />
            <span className="CartCount">{cartItems.length}</span>
          </Link>
        </>
      )}
    </div>
  );
};
export default CartWidget;
