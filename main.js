// let, const - create variables
// if-else - control structure
// for - cycle
// = assignment operator
// function, () => {} - functions

const MAX = 100
const MIN = 0
const ATTEMPTS_NUMBER = 10

function getPlayerName() {
    const playerName = prompt("Как тебя зовут?", "")
    return playerName
}

const name = getPlayerName()

const gerRandomNumber = () => {
    const randomNumber = Math.round(Math.random() * 100)
    return randomNumber
}

const number = gerRandomNumber()