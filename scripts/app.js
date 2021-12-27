// addProductMoney function start
function addProductMoney(productId, productPrice) {
  const memoryPrice = document.getElementById(productId);
  memoryPrice.innerText = productPrice;
}
// addProductMoney function end

// calculateTotal function start
function calculateTotal() {
  const mainPrice = document.getElementById("main-price").innerText;
  const memoryPrice = document.getElementById("memory-total-price").innerText;
  const storagePrice = document.getElementById("storage-total-price").innerText;
  const deliveryPrice = document.getElementById("delivery-price").innerText;
  // calculate Total
  const mainAndMemoryPrice = parseInt(mainPrice) + parseInt(memoryPrice);
  const storageAndDeliveryPrice =
    parseInt(storagePrice) + parseInt(deliveryPrice);
  const totalPrice = mainAndMemoryPrice + storageAndDeliveryPrice;
  //   show total in display
  const totalPriceField = document.getElementById("total-price");

  totalPriceField.innerText = totalPrice;
  const discountTotalPrice = document.getElementById("discount-price");
  discountTotalPrice.innerText = totalPrice;
}
// calculateTotal function end

// calculateDiscount function start
let isApply = false;
function calculateDiscount(discount) {
  const promoField = document.getElementById("promo-input");

  if (promoField.value === "stevekaku" && !isApply) {
    const totalPrice = document.getElementById("discount-price");
    const totalPriceNumber = parseInt(totalPrice.innerText);
    const discountPrice = (totalPriceNumber / 100) * discount;
    const discountTotalPrice = totalPriceNumber - discountPrice;
    totalPrice.innerText = discountTotalPrice;
    promoField.value = "";
    isApply = true;
  } else {
    alert("Your Promo Code " + promoField.value + " Invalid");
    promoField.value = "";
  }
}
// calculateDiscount function end

// handle Memory product
document.getElementById("memory-8gb").addEventListener("click", function () {
  addProductMoney("memory-total-price", 0);
  calculateTotal();
});
document.getElementById("memory-16gb").addEventListener("click", function () {
  addProductMoney("memory-total-price", 180);
  calculateTotal();
});

// handle storage Product
document.getElementById("storage-256gb").addEventListener("click", function () {
  addProductMoney("storage-total-price", 0);
  calculateTotal();
});
document.getElementById("storage-512gb").addEventListener("click", function () {
  addProductMoney("storage-total-price", 100);
  calculateTotal();
});
document.getElementById("storage-1tb").addEventListener("click", function () {
  addProductMoney("storage-total-price", 180);
  calculateTotal();
});

// handle delivery charge
document.getElementById("free-delivery").addEventListener("click", function () {
  addProductMoney("delivery-price", 0);
  calculateTotal();
});
document
  .getElementById("express-delivery")
  .addEventListener("click", function () {
    addProductMoney("delivery-price", 20);
    calculateTotal();
  });

// handle promo code event

document.getElementById("apply-btn").addEventListener("click", function () {
  calculateDiscount(20);
});
