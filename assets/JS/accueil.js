let onglets = document.querySelectorAll(".header__menu li")
let navBar = document.querySelector(".header__menu")
let menuBurgerIcon = document.querySelector(".burger--toggler")
let menuBurger = document.querySelector(".menuBurger")
let Overlay = document.querySelector(".overlay--burger")
let trigger = document.querySelector(".trigger")
let lastScrollTop = 0
let headerHidden = false
let artInfoSup = document.querySelectorAll(".infoSup__content")

window.addEventListener("scroll" , scrollHeader)

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

function scrollHeader(){
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop
  if (scrollTop > lastScrollTop && scrollTop > 50) {
    // Si on scrolle vers le bas et qu'on a dépassé 50px, cache le header
    navBar.style.top = "-100px";
    headerHidden = true; // On marque que le header a été caché
  } else if (scrollTop < lastScrollTop && headerHidden) {
    // Si on remonte ET que le header avait été caché, on l'affiche
    navBar.style.top = "40px";
  }
  lastScrollTop = scrollTop
}


artInfoSup.forEach(art => art.addEventListener("mouseenter" , ()=>{
  let btn = art.querySelector("button")
  btn.style.color = "#80C6FF"
  btn.style.backgroundColor = "#0b0b0b"
}))
artInfoSup.forEach(art => art.addEventListener("mouseleave" , ()=>{
  let btn = art.querySelector("button")
  btn.style.color = "#000"
  btn.style.backgroundColor = "#fff"
}))