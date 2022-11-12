const textEl = document.getElementById('texto')

const text = "Hello, my name is Hugo Resende and i'm a web developer. I like to work with databases, restAPI's and endpoints are my passion. I am very familiar with Laravel at the moment, but i also like to explore new frameworks php and not php related."

let index = 1
let speed = 100

escreveTexto()

function escreveTexto() {
    textEl.innerText = text.slice(0, index)

    index++
    //if ( index > text.length) {/*PARA COMEÇAR A ESCREVER DE NOVO QUANDO CHEGAR AO FIM DO TEXTO */
      //  index = 1
  //  }

    setTimeout(escreveTexto , speed)
}

/////////////////////////////////////////////////////////////////////////////////////
