const game = () => {
    let pScore = 0;
    let cScore = 0;
 
    //Start Game of Rock Paper Scissors function
    const startGame = () => {
        const playBtn = document.querySelector('.play-game button');
        const intro = document.querySelector('.play-game');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            intro.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    //Play Match function
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        //Computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function() {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //Compare hands
                compareHands(this.textContent, computerChoice);
            });
        });
    };
    

    
    const compareHands = (playerChoice, computerChoice) => {
        //Update Winner on h3
        const winner = document.querySelector('.winner')
        //Check for a tie
        if(playerChoice === computerChoice) {
            winner.textContent = 'It is a Tie';
            return;
        }
        //Check for Rock
        if(playerChoice === 'rock') {
            if(computerChoice === 'scissors') {
                winner.textContent = 'You Win!'
                return;
            } else {
                winner.textContent = 'Computer Wins';
                return;
            }
        }
        //Check for Paper
        if(playerChoice === 'paper') {
            if(computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins'
                return;
            } else {
                winner.textContent = 'You Win!';
                return;
            }
        }
        //Check for Scissors
        if(playerChoice === 'scissors') {
            if(computerChoice === 'rock') {
                winner.textContent = 'Computer Wins'
                return;
            } else {
                winner.textContent = 'You Win!';
                return;
            }
        }
    }

    startGame();
    playMatch();
};
game();

//     //Decide Winner
//     const winner = (player, computer) => {
//         const results = document.querySelector('.results');
//         const playerScore = document.querySelector('.p-count');
//         const computerScore = document.querySelector('.c-count');
//         player = player.toLowerCase();
//         computer = computer.toLowerCase();
//         if (player === computer) {
//             results.textContent = 'Tie'
//         } else if (player === 'rock' && computer === 'paper') {
//             results.textContent = 'You Won';
//             pScore++;
//             playerScore.textContent = pScore;
//         } else if (player === 'paper' && computer === 'rock') {
//             results.textContent = 'You Won';
//             pScore++;
//             playerScore.textContent = pScore;
//         } else if (player === 'scissors' && computer === 'paper') {
//             results.textContent = 'You Won';
//             pScore++;
//             playerScore.textContent = pScore;
//         } else {
//             results.textContent = 'Computer Won';
//             cScore++;
//             computerScore.textContent = cScore;
//         }
//         if (pScore === 5) {
//             results.textContent = 'You Win the Game!';
//             return;
//         } else if (cScore === 5) {
//             results.textContent = 'Computer Wins the Game..';
//             return;
//         }
//     }
//     // Call playMatch function
//     playMatch();
// }
// game();
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