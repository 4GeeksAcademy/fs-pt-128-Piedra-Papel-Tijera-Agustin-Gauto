const choises = ["rock", "paper", "scissors", "lizard", "spock"]
const rules = {
    rock: ['scissors', "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"]
}



function eleccionPC(arr) {
    const num = Math.floor(Math.random() * arr.length)
    return arr[num]
};

const GanaUser = (Opciones, elecciondecomputadora) => {
    for (const opcion of Opciones) {
        if (opcion === elecciondecomputadora) {
            return true
        }
        return false
    }
}

function jugar(userChoice) {
    const PCRAND = eleccionPC(choises)
    console.log("El usuario Eligio:", userChoice);
    console.log("Computer Eligio:", PCRAND);


    if (userChoice === PCRAND) { return "Empate" }
    else if (GanaUser(rules[userChoice], PCRAND)){
        return "Gana Usuario"
    }else {
        return "Gana Computer"
    }
}


console.log(jugar("spock"));