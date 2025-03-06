let Overlay_modal = document.querySelector(".overlay--modal")
let trigger_modal = document.querySelector(".trigger--modal")
let Modal = document.querySelector(".modal")
let btn = document.querySelector(".button")
let inps = document.querySelectorAll(".contact input")
let tarea = document.querySelector("textarea")
let form = document.querySelector("form")
let btnDon = document.querySelector(".don button")

form.addEventListener("submit" , toggleContact)
trigger_modal.addEventListener("click" , toggleContactClose)

function toggleContactClose(){
  Overlay_modal.classList.toggle("active")
  Modal.classList.toggle("active")
}
function toggleContact(e){
  e.preventDefault()
  let envoie = true
  inps.forEach(inp=>{
    if(inp.value === "" || tarea.value === ""){
      envoie = false
    }
  })
  if(envoie){
    Overlay_modal.classList.toggle("active")
    Modal.classList.toggle("active")
    inps.forEach(inp1 => inp1.disabled = true)
    tarea.disabled = true
  }
}

btnDon.addEventListener("mouseenter" , ()=>{
  let btnLink = btnDon.querySelector("a")
  btnLink.style.color = "#80C6FF"
  btnDon.style.backgroundColor = "#0e0f0e"
})
btnDon.addEventListener("mouseleave" , ()=>{
  let btnLink = btnDon.querySelector("a")
  btnLink.style.color = "#0e0f0e"
  btnDon.style.backgroundColor = "#F2FAFC"
})