/* Musiquinha Frutiger Aero :D*/

let musica = document.getElementById("musica")
let botao = document.getElementById("botaoMusica")

let tocando = false

musica.volume = 0.2

function musicaToggle(){

    if(tocando == false){

        musica.play()

        tocando = true

        botao.innerHTML = "🔊"

    }else{

        musica.pause()

        tocando = false

        botao.innerHTML = "🔇"
    }
}