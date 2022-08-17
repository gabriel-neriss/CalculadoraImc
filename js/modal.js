// estruturação de dados - object literal - separando as responsabilidades 

export const Modal = {

  wrapper: document.querySelector ('.modal-wrapper'),
  mensagem: document.querySelector ('.modal h2 span'),
  botãoClose: document.querySelector ('.modal button.close'),
 


  open () {

    Modal.wrapper.classList.add('open')
  },

  close () {

    Modal.wrapper.classList.remove ('open')

  }
 

}

// quando a arrow function tem apenas uma linha pode ser feita dessa forma / sem chaves

Modal.botãoClose.onclick = () => {

  Modal.close ()

}

window.addEventListener ('keydown',handleKeydown) 

function handleKeydown (event) {

  if (event.key === 'Escape') {

    Modal.close ()
  }
}

