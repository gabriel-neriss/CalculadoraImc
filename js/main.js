import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import {calculateIMC, notNumber} from './utils.js'


// variáveis 

const form = document.querySelector ('form')
const inputAltura = document.querySelector ('#altura')
const inputPeso = document.querySelector ('#peso')

// const modalWrapper = document.querySelector ('.modal-wrapper')
// const modalMensagem = document.querySelector ('.modal h2 span')
// const modalBtnClose = document.querySelector ('.modal button.close')


form.onsubmit =  (event) =>  {

  event.preventDefault()

  const altura = inputAltura.value
  const peso = inputPeso.value

  const showAlertError = notNumber(peso) || notNumber (altura)

  if (showAlertError) {

     AlertError.open()
     return;

  }
  
  AlertError.close()

  const result = calculateIMC (peso, altura)

  displayResultMessage (result)

}

function displayResultMessage (result) {

  const message = `Seu IMC é de ${result}`
  
  Modal.mensagem.innerHTML = message
 // modalWrapper.classList.add('open')
  Modal.open()

}

inputAltura.addEventListener ('input', () => {
  AlertError.close()
})

inputPeso.addEventListener ('input', () => {
  AlertError.close()

})

