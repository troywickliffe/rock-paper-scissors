// step 3 - randomly return rock paper scissors
function getComputerChoice() {
    const pick = ["rock", "paper", "scissors"];
    return pick[Math.floor(Math.random()*pick.length)]; 
}

// step 4 - single round of rock paper scissors and returns string
function playRound(playerChoice, computerChoice) {
    let playerSelection = prompt("Choose: Rock, Paper or Scissors?").toLowerCase();
    let computerSelection = getComputerChoice();
    if(playerSelection === computerSelection) {
        playerScore += 0
        computerScore += 0
        return `It's a Draw! You both picked ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
            ++playerScore
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
            ++playerScore
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
            ++playerScore
        return "You Win! Scissors beats Paper";
    } else {
            ++computerScore
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// step 5:6 - 5 round game of rock paper scissors
function game() {
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());

    if (playerScore > computerScore) {
        return "You Win the game!";
    } else if (playerScore < computerScore) {
        return "You lost the game..";
    } else {
        return "It's a Draw!";
    }
}
let playerScore = 0;
let computerScore = 0;
console.log(game())