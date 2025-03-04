let onglets = document.querySelectorAll(".header__menu li")
let menuBurgerIcon = document.querySelector(".burger--toggler")
let menuBurger = document.querySelector(".menuBurger")
let Overlay = document.querySelector(".overlay--burger")
let trigger = document.querySelector(".trigger")

menuBurgerIcon.addEventListener("click" , toggleBurger)

function toggleBurger(){
  menuBurgerIcon.classList.toggle("active")
  menuBurger.classList.toggle("active")
  Overlay.classList.toggle("active")
}

trigger.addEventListener("click" , toggleclose)

function toggleclose(){
  menuBurgerIcon.classList.toggle("active")
  menuBurger.classList.toggle("active")
  Overlay.classList.toggle("active")
}

onglets.forEach(onglet => onglet.addEventListener("mouseenter" , () =>{
  let lien = onglet.querySelector(".lien")
  lien.style.transform = "scale(1.1)"
}))
onglets.forEach(onglet => onglet.addEventListener("mouseleave" , () =>{
  let lien = onglet.querySelector(".lien")
  lien.style.transform = "scale(1)"
}))