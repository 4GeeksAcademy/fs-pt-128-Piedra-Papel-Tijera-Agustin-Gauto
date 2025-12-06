// opciones a elegir del jugador
const choises = ["rock", "paper", "scissors", "lizard", "spock"]

// reglas del juego
const rules = {
    rock: ['scissors', "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"]
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
function jugar(userChoice) {
    const PCRAND = eleccionPC(choises)
    console.log("El usuario Eligio:", userChoice); console.log("Computer Eligio:", PCRAND);
    

    if (userChoice === PCRAND) { return "Empate" }
    if (GanaUser(rules[userChoice], PCRAND)) return "Gana Usuario"
        return "Gana Computer"
}


console.log(jugar("spock"));


// const ResultadoDelJuego = () => {
//     jugar("rock");

// }

// document.getElementById("Piedra").addEventListener("click",ResultadoDelJuego)
