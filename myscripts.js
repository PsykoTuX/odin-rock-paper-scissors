// Rock Paper Scissors game

    //Possible moves
let possibilities=['Rock','Paper','Scissors'];
    //Initial score
let computerScore=0;
let playerScore=0 ;
let playerSelection = '';

function computerPlay() {
    return computerSelection = possibilities[(Math.floor(Math.random() * 3))];
}

function playRound(){
    computerPlay();
    
    if ((computerSelection=='Rock' && playerSelection == 'Scissors') || (computerSelection=='Paper' && 
            playerSelection == 'Rock') || (computerSelection=='Scissors' && 
            playerSelection == 'Paper')) {
        contentRound.textContent = 'You lose this round! ' + computerSelection + ' beats '+ playerSelection ;
        computerScore++;
    } else if (computerSelection == playerSelection) {
        contentRound.textContent ='It\'s a draw, you both chose ' + playerSelection + ', play again.';
    } else { contentRound.textContent ='You win this round! ' + playerSelection + ' beats '+ computerSelection;
        playerScore++;
    }

    contentScore.textContent ='The current score is ' + computerScore + ' for the computer and ' + 
    playerScore + ' for you.';

    if ((computerScore==5 || playerScore==5)) {
        if (computerScore>playerScore) {
            contentScore.textContent ='You lost the game, the final score is '+ computerScore + 
                    ' for the computer and ' + playerScore + ' for you.';
        } else { contentScore.textContent ='You won the game, the final score is '+ computerScore + 
                ' for the computer and ' + playerScore + ' for you.';
        }
        computerScore=0;
        playerScore=0 ;
    }

}

const Rock = document.querySelector('#Rock');
const Paper = document.querySelector('#Paper');
const Scissors = document.querySelector('#Scissors');
const buttons = document.querySelectorAll('button');

Rock.addEventListener('click', chooseRock);
Paper.addEventListener('click', choosePaper);
Scissors.addEventListener('click', chooseScissors);

buttons.forEach((button) => {  
    button.addEventListener('click', () => {
        playRound();
        });
    });

function chooseRock() {
    playerSelection='Rock';
  }

function choosePaper() {
    playerSelection='Paper';
  }

function chooseScissors() {
    playerSelection='Scissors';
  }

  const container = document.querySelector('div'); 
  const contentScore = document.createElement('p');
  const contentRound = document.createElement('p');
  container.appendChild(contentRound);
  container.appendChild(contentScore);

