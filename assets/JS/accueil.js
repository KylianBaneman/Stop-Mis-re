let onglets = document.querySelectorAll(".header__menu li")

onglets.forEach(onglet => onglet.addEventListener("mouseenter" , () =>{
  let lien = onglet.querySelector(".lien")
  lien.style.color = "#80C6FF"
  lien.style.transform = "scale(1.05)"
}))
onglets.forEach(onglet => onglet.addEventListener("mouseleave" , () =>{
  let lien = onglet.querySelector(".lien")
  lien.style.color = "black"
  lien.style.transform = "scale(1)"
}))