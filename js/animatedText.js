const textEl = document.getElementById('texto')

const text = "Hello, my name is Hugo Resende and i'm a web developer."

let index = 1
let speed = 350 

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
