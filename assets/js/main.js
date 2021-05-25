// Rock - Rock - Unentschieden
// Rock - Scissors - Gewinn
// Rock - Paper - Niederlage

let result = document.getElementById('result')
let user = document.getElementById('user')
let comp = document.getElementById('comp')

let rock = document.getElementById('rock')
let scissors = document.getElementById('scissors')
let paper = document.getElementById('paper')

let userRes = 0;
let compRes = 0;
let roundCurrent = 0;

//User hat einen Stein gewählt
function scoreRock() {
    let compZuf = computer()

    if (compZuf == 0) {
        result.innerHTML = 'You both chose Rock'
    }
    else if (compZuf == 1) {
        result.innerHTML = 'Rock <sup>(user)</sup> Scissors <sup>(comp)</sup>. You win!'
        userRes++
        user.innerHTML = userRes
    }
    else {
        result.innerHTML = 'Rock <sup>(user)</sup> Paper <sup>(comp)</sup>. You lose!'
        compRes++
        comp.innerHTML = compRes
    }
    if (roundCurrent == roundValue) {
        result.innerHTML = "Game over"
    }
}

// User hat die Schere gewählt
function scoreScissors() {
    let compZuf = computer()

    if (compZuf == 1) {
        result.innerHTML = 'You both chose Scissors'
    }
    else if (compZuf == 2) {
        result.innerHTML = 'Scissors <sup>(user)</sup> Paper <sup>(comp)</sup>. You win!'
        userRes++
        user.innerHTML = userRes
    }
    else {
        result.innerHTML = 'Scissors <sup>(user)</sup> Rock <sup>(comp)</sup>. You lose!'
        compRes++
        comp.innerHTML = compRes
    }
}
// User hat Papier gewählt
function scorePaper() {
    let compZuf = computer()

    if (compZuf == 2) {
        result.innerHTML = 'You both chose Paper'
    }
    else if (compZuf == 0) {
        result.innerHTML = 'Paper <sup>(user)</sup> Rock <sup>(comp)</sup>. You win!'
        userRes++
        user.innerHTML = userRes
    }
    else {
        result.innerHTML = 'Paper <sup>(user)</sup> Scissors <sup>(comp)</sup>. You lose!'
        compRes++
        comp.innerHTML = compRes
    }
}

// Zufällige Wahl von Computer
function computer() {
    return Math.floor(Math.random() * 3) // Zahl zwischen 0 - 2
    //0 - Rock
    //1 - Scissors
    //2 - Paper
}

// Neues Spiel
function restart() {
    let userRes = 0;
    let compRes = 0;
    comp.innerHTML = compRes;
    user.innerHTML = userRes
}

// Anzahl von Runde
let roundValue
function rounds() {
    let round = document.getElementsByName('rounds')
    for (let i = 0; i < round.length; i++) {
        if (round[i].checked) {
            roundValue = round[i].value
        }
    }
}
// Zeigt laufendes Ergebnis
function wechseln() {
    let roundCur = document.getElementById('roundCurrent')
    roundCur.classList.toggle('hide')
    let roundToggle = document.getElementById('round')
    roundToggle.classList.toggle('hide')
}
// Hauptfunktion
function spiel(auswahl) {
    rounds()

    if (roundCurrent == 0) {
        wechseln()
        document.getElementById('total').innerHTML = roundValue
    }

    roundCurrent = roundCurrent + 1

    if (roundCurrent <= roundValue) {
        document.getElementById('current').innerHTML = roundCurrent

        if (auswahl == 'rock') {
            scoreRock()
        }
        else if (auswahl == 'scissors') {
            scoreScissors()
        }
        else if (auswahl == 'paper') {
            scorePaper()
        }
        else {
            console.log('Fehler')
        }
    }
    if (roundCurrent == roundValue) {

        if (userRes > compRes) {
            return result.innerHTML = " The user wins"
        }
        else if (userRes == compRes) {
            return result.innerHTML = "Draw"
        }
        else
            return result.innerHTML = " Computer wins"
    }
}