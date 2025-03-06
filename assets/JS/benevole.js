let Overlay_modal = document.querySelector(".overlay--modal")
let trigger_modal = document.querySelector(".trigger--modal")
let Modal = document.querySelector(".modal")
let btn = document.querySelector(".form__content__btn button")
let inps = document.querySelectorAll(".content__firstCol input")
let tarea = document.querySelector("textarea")
let form = document.querySelector("form")


form.addEventListener("submit" , submitForm)

function submitForm(e){
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