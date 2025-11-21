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

function jugar(userChoice) {
    const PCRAND = eleccionPC(choises)
    if (userChoice === PCRAND)
    {return "Empate"}
    else return `pc escogio ${PCRAND} usuario escogio ${userChoice}`
}


console.log(jugar("rock"));