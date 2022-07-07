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

// Decrease item quantity to add to cart.
let quantity = 0;
minusButton.addEventListener('click', () => {
  if (quantity > 0) {
    quantity--;
    itemQuantity.innerHTML = quantity;
  }
})

// Increase item quantity to add to cart.
plusButton.addEventListener('click', () => {
  quantity++;
  itemQuantity.innerHTML = quantity;
})

// Get quantity of items and add to the cart.
addToCartButton.addEventListener('click', () => {
  cartItemValue.innerHTML = itemQuantity.innerHTML
  cartItem.innerHTML = itemQuantity.innerHTML

  cartTotal.innerHTML = itemPrice.innerHTML * cartItemValue.innerHTML;
  cartTotal.innerHTML = Number(cartTotal.innerHTML).toFixed(2)

  // Restyling the number to add to the cart quantity
  cartItemValue.style.color = '#fff';
  cartItemValue.style.fontWeight = 'bold';
  cartItemValue.style.fontSize = '0.7rem';
  cartItemValue.style.fontFamily = 'Sora'

  cartItemValue.innerHTML > 0
    ? cartItemQuantity.style.display = 'flex'
    : cartItemQuantity.style.display = 'none';
})

// Check if the cart is empty, if it is add the item div, else remove it.
const handleCartValue = () => {
  cartCard.classList.toggle('active')
  cartCardDiv.classList.toggle('active')
  cartItemValue.innerHTML > 0
    ? cartCardDiv.classList.toggle('active')
    : emptyCartDiv.classList.toggle('active')
}
cartIcon.addEventListener('click', handleCartValue)

deleteItemFromCart.addEventListener('click', () => {
  emptyCartDiv.classList.toggle('active')
  cartCardDiv.classList.toggle('active')
})


