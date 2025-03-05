let Overlay_modal = document.querySelector(".overlay--modal")
let trigger_modal = document.querySelector(".trigger--modal")
let Modal = document.querySelector(".modal")
let btn = document.querySelector(".button")

btn.addEventListener("click" , toggleContact)
trigger_modal.addEventListener("click" , toggleContactClose)

function toggleContactClose(){
  Overlay_modal.classList.toggle("active")
  Modal.classList.toggle("active")
}
function toggleContact(e){
  e.preventDefault()
  Overlay_modal.classList.toggle("active")
  Modal.classList.toggle("active")
}