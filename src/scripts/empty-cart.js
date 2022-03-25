import updateTotalPrice from "./update-total-price";

// 清空購物車
function emptyCart() {
  document.querySelector("tbody").innerHTML = "";
  updateTotalPrice();
}

export default emptyCart;
