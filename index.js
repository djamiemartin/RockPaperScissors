let userScore = 0;
let cpuScore= 0;
const userScore_span = document.getElementById('user-score');
const cpuScore_span = document.getElementById('cpu-score');
const possibleChoices = document.querySelectorAll('.choice');
const result_p = document.querySelector('.result');
let userChoice;
let cpuChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChoice = e.target.id;
getComputerChoice();
getResult();
}))

function getComputerChoice() { 
    const randomnumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    switch(randomnumber) {
        case 1:
            cpuChoice = 'rock';
            break;
        case 2:
            cpuChoice = 'paper';
            break;
        case 3:
            cpuChoice = 'scissors';
            break;
    }
} 

function win(userChoice, cpuChoice){
    userScore++;
    userScore_span.textContent = userScore;
    cpuScore_span.textContent = cpuScore
    result_p.innerHTML = `${userChoice} beats ${cpuChoice}, you win!`;
}

function lose(userChoice, cpuChoice){
    cpuScore++;
    cpuScore_span.textContent = cpuScore;
    userScore_span.textContent = userScore
    result_p.innerHTML = `${userChoice} give in to ${cpuChoice}, you lose!`;
}

function draw (userChoice, cpuChoice){
    userScore_span.textContent = userScore
    cpuScore_span.textContent = cpuScore
    result_p.innerHTML = `${userChoice} and ${cpuChoice}, it's a draw!`;
}


function getResult() {
    switch (userChoice + cpuChoice){
        case 'rockscissors':
        case 'scissorspaper':
        case 'paperrock':
            win(userChoice, cpuChoice);
            break;
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            lose(userChoice, cpuChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, cpuChoice);
            break;
    }
}
