// Rock - Rock - Unentschieden
// Rock - Scissors - Gewinn
// Rock - Paper - Niederlage

let result = document.getElementById('result')
let user = document.getElementById('user')
let comp = document.getElementById('comp')

// console.log(user)
let userRes = 0;
let compRes = 0;

function scoreRock() {
    console.log("User: Rock")

    let compZuf = computer()
    console.log('Computer:' + compZuf)

    if (compZuf == 0) {
        console.log('Unentschieden')
        result.innerHTML = 'You both chose Rock'
    }
    else if (compZuf == 1) {
        console.log("Gewinn")
        result.innerHTML = 'Rock(user) Scissors(comp). You win!'
        userRes++
        console.log('user:' + userRes)
        user.innerHTML = userRes
    }
    else {
        console.log("Niederlage")
        result.innerHTML = 'Rock(user) Paper(comp). You lose!'
        compRes++
        console.log('comp:' + compRes)
        comp.innerHTML = compRes
    }
}


function scoreScissors() {
    console.log("User: Scissors")

    let compZuf = computer()
    console.log('Computer:' + compZuf)

    if (compZuf == 1) {
        console.log('Unentschieden')
        result.innerHTML = 'You both chose Scissors'
    }
    else if (compZuf == 2) {
        console.log("Gewinn")
        result.innerHTML = 'Scissors(user) Paper(comp). You win!'
        userRes++
        console.log('user:' + userRes)
        user.innerHTML = userRes
    }
    else {
        console.log("Niederlage")
        result.innerHTML = 'Scissors(user) Rock(comp). You lose!'
        compRes++
        console.log('comp:' + compRes)
        comp.innerHTML = compRes
    }
}

function scorePaper() {
    console.log("User: Paper")
    let compZuf = computer()
    console.log('Computer:' + compZuf)

    if (compZuf == 2) {
        console.log('Unentschieden')
        result.innerHTML = 'You both chose Paper'
    }
    else if (compZuf == 0) {
        console.log("Gewinn")
        result.innerHTML = 'Paper(user) Rock(comp). You win!'
        userRes++
        console.log('user:' + userRes)
        user.innerHTML = userRes
    }
    else {
        console.log("Niederlage")
        result.innerHTML = 'Paper(user) Scissors(comp). You lose!'
        compRes++
        console.log('comp:' + compRes)
        comp.innerHTML = compRes
    }
}

function computer() {
    return Math.floor(Math.random() * 3) // Zahl zwischen 0 - 2
    //0 - Rock
    //1 - Scissors
    //2 - Paper
}

function restart() {
    let userRes = 0;
    let compRes = 0;
    comp.innerHTML = compRes;
    user.innerHTML = userRes
}