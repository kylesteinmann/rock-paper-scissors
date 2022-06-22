// Establish variable for playerChoice
// ask play for input
//let playerChoice = prompt("Type Rock, Paper, Scissors").toLowerCase();
//generate random number for computers selection
let computerSelection;
// players scores
let computerPlayerScore = 0;
let playerScore = 0;
let winner;
// generate computerPlay's input
function generateComputerSelection() {

    let computerPlay = Math.floor(Math.random() * 3);

    switch (computerPlay) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// determine who won
// return results of round
function playRound (playerChoice, computerSelection) {


    if  (
            (playerChoice === "rock" && String(computerSelection) === "paper") || 
            (playerChoice === "paper" && String(computerSelection) === "scissors") ||
            (playerChoice === "scissors" && String(computerSelection) === "rock")
        ) {    
            computerPlayerScore = computerPlayerScore + 1;
            console.log("You Lose! " + computerSelection + " beats " + playerChoice +"! " + playerScore + ", " + computerPlayerScore);
        }

    else if  (
            playerChoice === computerSelection
        ) {
            console.log("You tied! You both picked " + playerChoice + ".");
        }

    else if  (
            (playerChoice === "rock" && String(computerSelection) === "scissors") || 
            (playerChoice === "paper" && String(computerSelection) === "rock") ||
            (playerChoice === "scissors" && String(computerSelection) === "paper")
        ) {
            playerScore = playerScore + 1;
            console.log("You Win! " + playerChoice + " beats " + computerSelection + "! " + playerScore + ", " + computerPlayerScore);
        } 

}

const declareWinner = document.querySelector(".declareWinner")

const results = document.querySelector(".results");

const playRock = document.querySelector(".rockButton");

playRock.addEventListener('click', rockButtonClicked);

function rockButtonClicked() {
    
    playRound("rock", generateComputerSelection());
    results.innerText = "You have " + playerScore + ", the computer has " + computerPlayerScore + ".";
    if (playerScore > 4) {
        declareWinner.innerText = "You Win!";
    } else if (computerPlayerScore > 4) {
        declareWinner.innerText = "You Lose!";
    } else {
        declareWinner.innerText = "Choose again.";
    }
    
}

const playPaper = document.querySelector(".paperButton");

playPaper.addEventListener('click', paperButtonClicked);

function paperButtonClicked() {
    
    playRound("paper", generateComputerSelection());
    results.innerText = "You have " + playerScore + ", the computer has " + computerPlayerScore + ".";
    if (playerScore > 4) {
        declareWinner.innerText = "You Win!";
    } else if (computerPlayerScore > 4) {
        declareWinner.innerText = "You Lose!";
    } else {
        declareWinner.innerText = "Choose again.";
    }
}

const playScissors = document.querySelector(".scissorsButton");

playScissors.addEventListener('click', scissorsButtonClicked);

function scissorsButtonClicked() {
    
    playRound("scissors", generateComputerSelection());
    results.innerText = "You have " + playerScore + ", the computer has " + computerPlayerScore + ".";
    if (playerScore > 4) {
        declareWinner.innerText = "You Win!";
    } else if (computerPlayerScore > 4) {
        declareWinner.innerText = "You Lose!";
    } else {
        declareWinner.innerText = "Choose again.";
    }
    }






// initiate game of 5 rounds
//function game() {
//   for(let i = 0; i < 5; i++) {
//       computerSelection = generateComputerSelection();
//        playRound(playerChoice, computerSelection);
//        if (i < 4) {
//            playerChoice = prompt("Type Rock, Paper, Scissors").toLowerCase();
//        }    
//    } 
//}
        

//console.log(game())
//console.log(console.log("Your score = " + playerScore + ", Computer's score = " + computerPlayerScore))


