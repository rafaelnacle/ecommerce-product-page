"use-strict"

const plusButton = document.getElementById("plus-button");
const minusButton = document.getElementById("minus-button");
const itemQuantity = document.getElementById("item-quantity");
const addToCartButton = document.getElementById('add-to-cart-button');
const cartItemQuantity = document.getElementById('cart-item-quantity');
const cartItemValue = document.getElementById('cart-item-value');

const cardLi = document.querySelector('.cart-li');
const cartIcon = document.getElementById('cart');
const cartCard = document.querySelector('.cart-card');
const cartCardDiv = document.querySelector('.cart-card-div');

const emptyCartDiv = document.querySelector('.empty-cart')

const cartItem = document.querySelector('#cart-item');
const cartTotal = document.querySelector('#cart-total');
const itemPrice = document.querySelector('#item-price')

const checkoutButton = document.querySelector('.checkout-button')

const deleteItemFromCart = document.querySelector('.trash-icon')

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

const cartItems = [];
addToCartButton.addEventListener('click', () => {
  cartItemValue.innerHTML = itemQuantity.innerHTML
  cartItem.innerHTML = itemQuantity.innerHTML

  cartTotal.innerHTML = itemPrice.innerHTML * cartItemValue.innerHTML;
  cartTotal.innerHTML = Number(cartTotal.innerHTML).toFixed(2)

  cartItemValue.style.color = '#fff';
  cartItemValue.style.fontWeight = 'bold';
  cartItemValue.style.fontSize = '0.7rem';
  cartItemValue.style.fontFamily = 'Sora'

  cartItemValue.innerHTML > 0
    ? cartItemQuantity.style.display = 'flex'
    : cartItemQuantity.style.display = 'none';
})


const handleCartValue = () => {
  cartCard.classList.toggle('active')
  cartCardDiv.classList.toggle('active')
  cartItemValue.innerHTML > 0
    ? cartCardDiv.classList.toggle('active')
    : emptyCartDiv.classList.toggle('active')
}

cartIcon.addEventListener('click', handleCartValue)

let cartItemAmount = 0
deleteItemFromCart.addEventListener('click', () => {
  emptyCartDiv.classList.toggle('active')
  cartCardDiv.classList.toggle('active')
})




