let onglets = document.querySelectorAll(".header__menu li")
let btn = document.querySelector(".fond__texte__button button")
let txtBtn = btn.textContent

btn.addEventListener("mouseenter" , () =>{
  txtBtn.style.transform = "scale(1.1)"
})
btn.addEventListener("mouseleave" , () =>{
  txtBtn.style.transform = "scale(1)"
})

onglets.forEach(onglet => onglet.addEventListener("mouseenter" , () =>{
  let lien = onglet.querySelector(".lien")
  lien.style.transform = "scale(1.1)"
}))
onglets.forEach(onglet => onglet.addEventListener("mouseleave" , () =>{
  let lien = onglet.querySelector(".lien")
  lien.style.transform = "scale(1)"
}))