const menuBar = document.querySelector('.menu-bar');
const nav = document.querySelector('nav');
const account = document.querySelector('.account');
const header = document.querySelector('header')


menuBar.addEventListener("click", function(){
    nav.classList.toggle("set-display");
    account.classList.toggle("set-display");
    menuBar.classList.toggle("animate-menu-bar");
})