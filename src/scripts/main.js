import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/all.css";
import emptyCart from "./empty-cart";
import { addToCart, deleteCartItem } from "./add-delete-to-cart";
import updateInput from "./update-input";

// 實作寫在這裡！

document.querySelector(".btn-success").addEventListener("click", emptyCart);

document.querySelectorAll(".btn-warning").forEach((btn) => {
  btn.addEventListener("click", addToCart);
});

document.querySelectorAll(".btn-danger").forEach((btn) => {
  btn.addEventListener("click", deleteCartItem);
});

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("change", updateInput);
});
