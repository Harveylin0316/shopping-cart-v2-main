import updateTotalPrice from "./update-total-price";

// 更新購物車商品數量
function updateInput(event) {
  let input = event.target;

  // 商品數量不能改變成比 0 小，如果比 0 小設定成 1
  if (input.value <= 0) {
    input.value = 1;
  }

  let productPrice = Number(
    input.parentElement.parentElement
      .querySelectorAll("td:nth-child(3)")[0]
      .innerText.replace("$", "")
  );

  let updatedSubTotal = productPrice * input.value;

  // 抓取該商品的 小計 物件
  let SubTotal =
    input.parentElement.parentElement.querySelectorAll("td:nth-child(4)")[0];

  SubTotal.innerText = `${updatedSubTotal}`;

  updateTotalPrice();
}

export default updateInput;
