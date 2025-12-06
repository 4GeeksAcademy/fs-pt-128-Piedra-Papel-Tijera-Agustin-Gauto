// opciones a elegir del jugador
const choises = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]

// reglas del juego
const rules = {
    Rock: ['Scissors', "Lizard"],
    Paper: ["Rock", "Spock"],
    Scissors: ["Paper", "Lizard"],
    Lizard: ["Spock", "Paper"],
    Spock: ["Scissors", "Rock"]
}

/// funcion que eligue aleatoriamente una opcion
function eleccionPC(arr) {
    const num = Math.floor(Math.random() * arr.length)
    return arr[num]
};


const GanaUser = (Opciones, elecciondecomputadora) => {
    for (const opcion of Opciones) {
        if (opcion === elecciondecomputadora) return true
        return false
    }
}

/// funcion que utiliza funciones anteriores para iniciar el juego

const PCRAND = eleccionPC(choises)


function jugar(userChoice) {
    
    console.log("El usuario Eligio:", userChoice); console.log("Computer Eligio:", PCRAND);
    

    if (userChoice === PCRAND) { return "Empate" }
    if (GanaUser(rules[userChoice], PCRAND)) return "Gana Usuario"
        return "Gana Computer"
}

const resultadoFinal = jugar("Rock")
const resultadofinalPapel = jugar("Paper")
const resultadofinalScissors = jugar("Scissors")
const resultadofinalLizard = jugar("Lizard")
const resultadofinalSpock = jugar("Spock")



// console.log(jugar("Spock"));


const resultadoDelJuego = () => {
    jugar("Rock");
    

    const resultadoFinalInner = document.querySelector(".card-title")
        resultadoFinalInner.innerHTML = resultadoFinal

    const userChoiceInner = document.querySelector(".card-text")
    userChoiceInner.innerHTML = "Elegiste:" + " " + "Rock"

    const pcrandrand = document.querySelector(".card-texto")
        pcrandrand.innerHTML = "Computer Eligio:" + " " + PCRAND  

}
document.getElementById("Piedra").addEventListener("click",resultadoDelJuego)

const resultadoDelJuegoPaper = () => {
    jugar("Paper");

    const resultadoFinalInner = document.querySelector(".card-title")
        resultadoFinalInner.innerHTML = resultadofinalPapel

    const userChoiceInner = document.querySelector(".card-text")
    userChoiceInner.innerHTML = "Elegiste:" + " " + "Paper"

    const pcrandrand = document.querySelector(".card-texto")
        pcrandrand.innerHTML = "Computer Eligio:" + " " + PCRAND  

}
document.getElementById("Papel").addEventListener("click",resultadoDelJuegoPaper)

const resultadoDelJuegoTijera = () => {
    jugar("Scissors");

    const resultadoFinalInner = document.querySelector(".card-title")
        resultadoFinalInner.innerHTML = resultadofinalScissors

    const userChoiceInner = document.querySelector(".card-text")
    userChoiceInner.innerHTML = "Elegiste:" + " " + "Scissors"

    const pcrandrand = document.querySelector(".card-texto")
        pcrandrand.innerHTML = "Computer Eligio:" + " " + PCRAND  

}
document.getElementById("Tijera").addEventListener("click",resultadoDelJuegoTijera)

const resultadoDelJuegoLagarto = () => {
    jugar("Lizard");

    const resultadoFinalInner = document.querySelector(".card-title")
        resultadoFinalInner.innerHTML = resultadofinalLizard

    const userChoiceInner = document.querySelector(".card-text")
    userChoiceInner.innerHTML = "Elegiste:" + " " + "Lizard"

    const pcrandrand = document.querySelector(".card-texto")
        pcrandrand.innerHTML = "Computer Eligio:" + " " + PCRAND  

}
document.getElementById("Lagarto").addEventListener("click",resultadoDelJuegoLagarto)

const resultadoDelJuegoSpock = () => {
    jugar("Spock");

    const resultadoFinalInner = document.querySelector(".card-title")
        resultadoFinalInner.innerHTML = resultadofinalSpock

    const userChoiceInner = document.querySelector(".card-text")
    userChoiceInner.innerHTML = "Elegiste:" + " " + "Spock"

    const pcrandrand = document.querySelector(".card-texto")
        pcrandrand.innerHTML = "Computer Eligio:" + " " + PCRAND  

}
document.getElementById("Spock").addEventListener("click",resultadoDelJuegoSpock)

