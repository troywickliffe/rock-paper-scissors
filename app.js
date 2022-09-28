const game = () => {
    let pScore = 0;
    let cScore = 0;


//Play Match 
    const playMatch = () => {
        // const rockBtn = document.querySelector('.rock');
        // const paperBtn = document.querySelector('.paper');
        // const scissorBtn = document.querySelector('.scissors');
        const playerOptions = document.querySelectorAll('.options button')
        const computerOptions = ['rock', 'paper', 'scissors'];
        //Function that will start the game
        playerOptions.forEach(option => {
            option.addEventListener('click', function() {
                console.log(this);
                //Computer Random Choice
                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber]; 
                //Check winner
                winner(this.textContent, computerChoice) 
            })
        })
        
    }
    //Decide Winner
    const winner = (player, computer) => {
        const results = document.querySelector('.results');
        const playerScore = document.querySelector('.p-count');
        const computerScore = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer) {
            results.textContent = 'Tie'
        } else if (player === 'rock' && computer === 'paper') {
            results.textContent = 'You Won';
            pScore++;
            playerScore.textContent = pScore;
        } else if (player === 'paper' && computer === 'rock') {
            results.textContent = 'You Won';
            pScore++;
            playerScore.textContent = pScore;
        } else if (player === 'scissors' && computer === 'paper') {
            results.textContent = 'You Won';
            pScore++;
            playerScore.textContent = pScore;
        } else {
            results.textContent = 'Computer Won';
            cScore++;
            computerScore.textContent = cScore;
        }
        if (pScore === 5) {
            results.textContent = 'You Win the Game!';
            return;
        } else if (cScore === 5) {
            results.textContent = 'Computer Wins the Game..';
            return;
        }
    }
    // Call playMatch function
    playMatch();
}
game();
// // step 3 - randomly return rock paper scissors
// function getComputerChoice() {
//     const pick = ["rock", "paper", "scissors"];
//     return pick[Math.floor(Math.random()*pick.length)]; 
// }

// // step 4 - single round of rock paper scissors and returns string
// function playRound(playerChoice, computerChoice) {
//     let playerSelection = prompt("Choose: Rock, Paper or Scissors?").toLowerCase();
//     let computerSelection = getComputerChoice();
//     if(playerSelection === computerSelection) {
//         playerScore += 0
//         computerScore += 0
//         return `It's a Draw! You both picked ${playerSelection}`;
//     } else if (playerSelection === "rock" && computerSelection === "scissors") {
//             ++playerScore
//         return "You Win! Rock beats Scissors";
//     } else if (playerSelection === "paper" && computerSelection === "rock") {
//             ++playerScore
//         return "You Win! Paper beats Rock";
//     } else if (playerSelection === "scissors" && computerSelection === "paper") {
//             ++playerScore
//         return "You Win! Scissors beats Paper";
//     } else {
//             ++computerScore
//         return `You Lose! ${computerSelection} beats ${playerSelection}`;
//     }
// }

// // step 5:6 - 5 round game of rock paper scissors
// function game() {
//     console.log(playRound());
//     console.log(playRound());
//     console.log(playRound());
//     console.log(playRound());
//     console.log(playRound());

//     if (playerScore > computerScore) {
//         return "You Win the game!";
//     } else if (playerScore < computerScore) {
//         return "You lost the game..";
//     } else {
//         return "It's a Draw!";
//     }
// }
// let playerScore = 0;
// let computerScore = 0;
// console.log(game())