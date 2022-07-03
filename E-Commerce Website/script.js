const cartBtn = document.querySelector('.cart-btn')
const cart = document.querySelector('.content-section')

cartBtn.addEventListener('click' , ()=>{
    cart.classList.toggle('active')
    cartBtn.classList.toggle('active')
})