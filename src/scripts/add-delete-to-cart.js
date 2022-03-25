import updateTotalPrice from "./update-total-price";
import updateInput from "./update-input";

function addToCart(event) {
  let btnATC = event.target;
  let productName;
  let productPrice;

  // 按到<i>跟<button> 的物件不一樣, 用if區別開來，將後面會用到的 productName, productPrice 先定義好
  if (btnATC.nodeName == "BUTTON") {
    productName = btnATC.parentElement.querySelector(".card-title").innerText;
    productPrice = Number(
      btnATC.parentElement.querySelector(".price").innerText.replace("$", "")
    );
  } else {
    productName =
      btnATC.parentElement.parentElement.querySelector(".card-title").innerText;
    productPrice = Number(
      btnATC.parentElement.parentElement
        .querySelector(".price")
        .innerText.replace("$", "")
    );
  }

  // 這邊檢查購物車清單是否已經有該商品, 如果有的話直接更新購物車數量+1. 更新完畢後跳出 addToCart，不要進行新增商品列表步驟
  let cartProducts = document.querySelector("tbody").querySelectorAll("tr");

  for (let i = 0; i < cartProducts.length; i++) {
    let cartProductName = cartProducts[i].querySelectorAll("td")[0].innerText;
    if (cartProductName == productName) {
      let cartProductQuantity = cartProducts[i]
        .querySelectorAll("td")[1]
        .querySelector("input");

      cartProductQuantity.value = Number(cartProductQuantity.value) + 1;

      // 取得購物車該商品的小計欄位並更新總價格
      let cartProductSubTotal = cartProducts[i].querySelectorAll("td")[3];
      cartProductSubTotal.innerText = `$${
        productPrice * cartProductQuantity.value
      }`;
      updateTotalPrice();

      return;
    }
  }

  // 新增商品列表，然後更新 小計 與 總價格
  document.querySelector("tbody").insertAdjacentHTML(
    "beforeend",
    ` <tr>
    <td>${productName}</td>
    <td><input type="number" value="1" /></td>
    <td>$${productPrice}</td>
    <td>$${productPrice}</td>
    <td>
      <button class="btn btn-danger btn-sm">
        <i class="fas fa-trash-alt"></i>
      </button>
    </td>
  </tr>`
  );
  updateTotalPrice();

  // 新增的商品 數量物件 跟 刪除按鈕物件 要加入監聽
  cartProducts = document.querySelector("tbody").querySelectorAll("tr");
  let ProductAdded = cartProducts[cartProducts.length - 1];
  ProductAdded.querySelector(".btn-danger").addEventListener(
    "click",
    deleteCartItem
  );
  ProductAdded.querySelector("input").addEventListener("change", updateInput);
}

// 刪除購物車商品, 刪除後更新總價格
function deleteCartItem(event) {
  let btnDel = event.target;
  //// 按到<i>跟<button> 的物件不一樣, 分別處理
  if (btnDel.nodeName == "BUTTON") {
    btnDel.parentElement.parentElement.remove();
    updateTotalPrice();
  } else {
    btnDel.parentElement.parentElement.parentElement.remove();
    updateTotalPrice();
  }
}

export { addToCart, deleteCartItem };
