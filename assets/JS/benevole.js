let Overlay_modal = document.querySelector(".overlay--modal")
let trigger_modal = document.querySelector(".trigger--modal")
let Modal = document.querySelector(".modal")
let btn = document.querySelector(".form__content__btn button")
let inps = document.querySelectorAll(".content__firstCol input")
let inpsRadioGenre = document.querySelectorAll(".content__second .genre input")
let inpsRadioPermis = document.querySelectorAll(".content__second .permis input")
let tarea = document.querySelector("textarea")
let form = document.querySelector("form")


form.addEventListener("submit" , submitForm)

function submitForm(e){
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
  let genreChecked = Array.from(inpsRadioGenre).some(radio => radio.checked)
  let permisChecked = Array.from(inpsRadioPermis).some(radio => radio.checked)

  if (!genreChecked || !permisChecked) {
    envoie = false
  }
  
  if(envoie){
    Overlay_modal.classList.toggle("active")
    Modal.classList.toggle("active")
    inps.forEach(inp1 => inp1.disabled = true)
    tarea.disabled = true
    inpsRadioGenre.forEach(radio => radio.disabled = true)
    inpsRadioPermis.forEach(radio => radio.disabled = true)
  }
}