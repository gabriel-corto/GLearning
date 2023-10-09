
function OpenModalClick(){
  const ButtonsOpenModal = document.querySelectorAll(".button-start")
  const ButtonCloseModal = document.querySelector(".close-modal")
  const Modal = document.querySelector("#modal-form")

  let isOpenModal = false

      let header = document.querySelector("header")
      let section = document.querySelector("section")
      let footer = document.querySelector("footer")
  
  ButtonsOpenModal.forEach(Button => {
    Button.addEventListener("click", () => {
      isOpenModal = true
      isOpenModal && Modal.classList.add("show")

        header.style.opacity = '.1'
        section.style.opacity = '.1'
        footer.style.opacity = '0'
    })
  })

  ButtonCloseModal.addEventListener("click", () => {
    isOpenModal = false
    !isOpenModal && Modal.classList.remove("show")

      header.style.opacity = '1'
      section.style.opacity = '1'
      footer.style.opacity = '1'
  })

}
window.addEventListener("load", OpenModalClick())
