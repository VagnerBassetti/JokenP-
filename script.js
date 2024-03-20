const alexa = document.querySelector('#escolha')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const result = document.getElementById("resulted")

let humanScoreNumber = 0
let machineScoreNumber = 0

const resetGame = () => {
    humanScoreNumber = 0
    machineScoreNumber = 0
    humanScore.innerHTML = 0
    machineScore.innerHTML = 0
}

const playHuman = (humanChoice) => {
     playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3) 
    if (randomNumber === 0) {
        alexa.innerHTML = "&#x1F44A;"
    } else if (randomNumber === 1) {
        alexa.innerHTML = '&#x1F590;'
    } else {
        alexa.innerHTML = '&#x270C;'}
    return choices [randomNumber]
   

}

const playTheGame = (human, machine) => {

    if(human === machine) {
    
        result.innerHTML = "Deu Empate!"
    } else if((human === 'paper' && machine === 'rock') || (human === 'rock' && machine === 'scissors') ||
     (human === 'scissors' && machine === 'paper')) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou!"
        
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você Perdeu!"
    }
}