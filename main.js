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

console.log(number, name)

const game = (max, min, attNumber, randomNumber, name) => {
    alert(`Привет, ${name}!
    Я загадал число в интервале от ${min} до ${max}.
    У тебя есть ${attNumber} попыток, что бы отгадать это число.`)
    for (let i = 0; i < attNumber; i++) {
        const playerAnswer = prompt("Какое число я загадал?", "")
        if (playerAnswer > randomNumber) {
            alert("Моё число меньше")
        } else if (playerAnswer < randomNumber) {
            alert("Моё число больше")
        } else {
            alert("Ты угадал!!!!")
            return
        }
    }
}

game(MAX, MIN, ATTEMPTS_NUMBER, number, name)