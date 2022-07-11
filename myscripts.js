// Rock Paper Scissors game

let possibilities=['Rock','Paper','Scissors'];
let computerScore=0;
let playerScore=0 ;

function computerPlay() {
return computerSelection = possibilities[(Math.floor(Math.random() * 3))];
}



function playerPlay() {
let playerChoice = prompt("Choose your move: Rock, Paper or Scissors");
return playerSelection = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
}


function playRound(){
computerPlay();
playerPlay();

if ((computerSelection=='Rock' && playerSelection == 'Scissors') || (computerSelection=='Paper' && playerSelection == 'Rock') 
|| (computerSelection=='Scissors' && playerSelection == 'Paper')) {
    console.log('You lose this round! ' + computerSelection + ' beats '+ playerSelection );
    computerScore++;
} else if (computerSelection == playerSelection) {
    console.log('It\'s a draw, you both chose ' + playerSelection);
    playRound();
} else if ((playerSelection != 'Rock' ) && (playerSelection != 'Scissors') && (playerSelection !='Paper' ) ) {
    console.log('You did not choose a proper value, please try again choosing Rock, Paper or Scissors');
    playRound();
}

else {
    console.log('You win this round! ' + playerSelection + ' beats '+ computerSelection );
    playerScore++;
}
    
}

function game() {


for (let i=1; i<6;i++) {
    console.log('%cRound '+i, 'font-weight: bold')
    playRound(i);
    console.log('%cThe current score is ' + computerScore + ' for the computer and ' + playerScore + ' for you.','font-weight: bold')
}

if (computerScore>playerScore) {
    console.log('%cYou lost the game, the final score is '+ computerScore + ' for the computer and ' + playerScore + ' for you.','font-weight: bold')
} else {
    console.log('%cYou won the game, the final score is '+ computerScore + ' for the computer and ' + playerScore + ' for you.','font-weight: bold')
}

}

game()