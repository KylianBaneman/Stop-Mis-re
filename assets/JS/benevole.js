let Overlay_modal = document.querySelector(".overlay--modal")
let trigger_modal = document.querySelector(".trigger--modal")
let Modal = document.querySelector(".modal")
let btn = document.querySelector(".form__content__btn button")
let inps = document.querySelectorAll(".content__firstCol input")
let inpsRadioGenre = document.querySelectorAll(".content__second .genre__checkbox input")
let inpsRadioPermis = document.querySelectorAll(".content__second .permis__checkbox input")
let tarea = document.querySelector("textarea")
let form = document.querySelector("form")
console.log(inpsRadioGenre);
console.log(inpsRadioPermis);



form.addEventListener("submit" , submitForm)
trigger_modal.addEventListener("click" , toggleContactClose)

function toggleContactClose(){
  Overlay_modal.classList.toggle("active")
  Modal.classList.toggle("active")
}

function submitForm(e){
  let isCheckG = false
  let isCheckP = false
  e.preventDefault()
  let envoie = true
  inps.forEach(inp=>{
    if(inp.value.trim() === ""){
      envoie = false
    }
  })
  if(tarea.value.trim() === ""){
    envoie = false
  }
  inpsRadioGenre.forEach(checkbox =>{
      if(checkbox.checked){
        isCheckG = true
      }
  })
  inpsRadioPermis.forEach(checkbox2 =>{
      if(checkbox2.checked){
        isCheckP = true
      }
  })
  if (!isCheckG || !isCheckP) {
    envoie = false
  }
  if(envoie){
    Overlay_modal.classList.toggle("active")
    Modal.classList.toggle("active")
    inps.forEach(inp1 => inp1.disabled = true)
    tarea.disabled = true
    inpsRadioGenre.forEach(checkbox => checkbox.disabled = true)
    inpsRadioPermis.forEach(checkbox => checkbox.disabled = true)
  }
}