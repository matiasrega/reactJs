import swal from "sweetalert";
import "./toastBuy.css";

const toastBuy = () => {
  return swal({
    title: "Producto agregado al carrito",
    icon: "success",
    timer: 1000,
    buttons: false,
    toast: true,
    position: "top-right",
    className: "mi-notificacion",
  });
};

export default toastBuy;
