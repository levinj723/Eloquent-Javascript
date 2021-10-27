
let header = document.querySelector(".header");
let hamburger = document.querySelector("#btn-hamburger");
let overlay = document.querySelector(".overlay");
let menu = document.querySelector(".header__menu");
let facebook = document.querySelector("#facebook");
let youtube = document.querySelector("#youtube");
let twitter = document.querySelector("#twitter");
let pinterest = document.querySelector("pinterest");
let instagram = document.querySelector("instagram");




// facebook.addEventListener('focus',switch_src(facebook));

// File = URL(`../../images/icon-facebook.svg`);


// function switch_src(icon_name) {
    
// icon_name.src = `../../images/icon-facebook.svg`;
// // icon_name.src = `../../images/icon-pinterest.svg`;

// }






hamburger.addEventListener('click',()=>{header.classList.toggle("open");

overlay.classList.remove("hide");
overlay.classList.toggle("fade-in");
menu.classList.remove("hide");
menu.classList.toggle("fade-in");

overlay.classList.toggle("fade-out");
menu.classList.toggle("fade-out");

})

