import React from "react";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";
import { useCart } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cartItems } = useCart();
  const hayProductos = cartItems.length > 0;
  return (
    <div className="CartWidget">
      {hayProductos && (
        <>
          {" "}
          <Link
            to={"/cart"}
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
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
