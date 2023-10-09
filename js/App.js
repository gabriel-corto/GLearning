
function getUserData(){

  //get HTML Elements
  const Form = document.querySelector(".form")
  const InputElement = document.querySelector("input")
  const ButtonElement = document.querySelector(".submit")
  const ModalAlert = document.querySelector(".modal-alert")
  
  
  Form.addEventListener("submit", (event) => {
    event.preventDefault()
    const value = InputElement.value
    
    if(value === ""){
      return
    }
    else {

      ButtonElement.classList.add("loading")
      ButtonElement.innerHTML = `<fa class="fa-solid fa-spinner"></fa>`

      ModalAlert.style.display = "block"
      ModalAlert.innerHTML += "<h3>Ops! We could not Find your Account.</h3>"
    }
  })
}
getUserData()