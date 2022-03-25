function updateTotalPrice() {
  // 取總價格物件
  let totalPrice = document.querySelector("tfoot").querySelectorAll("td")[2];
  totalPrice.textContent = `$0`;

  // 取購物車裡面商品清單，每一個商品物件內包含 項目,數量,單價,小計
  let cartProducts = document.querySelector("tbody").querySelectorAll("tr");

  // 找到每個商品的小計，加總起來
  let sumSubtotal = 0;
  cartProducts.forEach((cartProduct) => {
    let cartItemSubtotal = cartProduct.querySelectorAll("td")[3];

    sumSubtotal += Number(cartItemSubtotal.innerText.replace("$", ""));
  });
  totalPrice.textContent = `$${sumSubtotal.toFixed(2)}`;
}

export default updateTotalPrice;
