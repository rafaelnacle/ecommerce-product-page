"use-strict"

const plusButton = document.getElementById("plus-button");
const minusButton = document.getElementById("minus-button");
const itemQuantity = document.getElementById("item-quantity");
const addToCartButton = document.getElementById('add-to-cart-button');
const cartItemQuantity = document.getElementById('cart-item-quantity');
const cartItemValue = document.getElementById('cart-item-quantity');
const cart = document.getElementById('cart');

let quantity = 0;

minusButton.addEventListener('click', () => {
  if (quantity > 0) {
    quantity--;
    itemQuantity.innerHTML = quantity;
  }
})

plusButton.addEventListener('click', () => {
  quantity++;
  itemQuantity.innerHTML = quantity;
})

addToCartButton.addEventListener('click', () => {
  cartItemValue.innerHTML = itemQuantity.innerHTML

  cartItemValue.style.color = '#fff';
  cartItemValue.style.fontWeight = 'bold';
  cartItemValue.style.fontSize = '0.7rem';
  cartItemValue.style.fontFamily = 'Sora'

  cartItemValue.innerHTML > 0
    ? cartItemQuantity.style.display = 'flex'
    : cartItemQuantity.style.display = 'none';
})

cart.addEventListener('click', () => {

})
