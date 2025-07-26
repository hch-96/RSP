
function getComputerChoice() {

  let choice = ["rock", "scissors", "paper"];
  let randomNum = Math.floor(Math.random() * choice.length);

  return choice[randomNum];

}

function playRound(humanChoice, computerChoice) {

  const display = document.querySelector("#resultDisplay");
  display.innerHTML = ""; //To clear the old results
  const displayChoices = document.createElement("p");
  displayChoices.textContent = `Human Choice: ${humanChoice} | Computer Choice: ${computerChoice}`;
  display.appendChild(displayChoices);

  if(humanChoice === computerChoice){
    return 't';
  }
    
  else if((humanChoice === "rock" && computerChoice === "scissors") || 
  (humanChoice === "scissors" && computerChoice === "paper") ||
  (humanChoice === "paper" && computerChoice === "rock")) {
    return 'h';
  }

  else { 
    return 'p';
  }
}

function playGame(){
  let humanScore = 0;
  let computerScore = 0;
  let roundWinner = '';

  const display = document.querySelector("#resultDisplay");
  const displayRoundResult = document.createElement("p");
  const displayWinner = document.createElement("p");


  function handleClick(event) {

    const target = event.target;

    switch (target.id) {
      case 'rock':
      roundWinner = playRound('rock', getComputerChoice());
      break;
      case 'paper':
      roundWinner = playRound('paper', getComputerChoice());
      break;
      case 'scissors':
      roundWinner = playRound('scissors', getComputerChoice());
      break;
    }
    
    if(roundWinner === 'h'){
      humanScore++;
      displayRoundResult.textContent = `You won the round!! The score is Human: ${humanScore} | Computer: ${computerScore}`;
    }
    else if(roundWinner === 'p'){
      computerScore++;
      displayRoundResult.textContent = `Computer won the round!! The score is Human: ${humanScore} | Computer: ${computerScore}`;
    }
    else {
      displayRoundResult.textContent = `Its a Tie!!`;
    }

    display.appendChild(displayRoundResult);

    if (humanScore === 5 || computerScore === 5) {
      if(humanScore > computerScore){
        displayWinner.textContent = `You are the Winner!! The score is Human: ${humanScore} | Computer: ${computerScore}`;
      }
      else if(computerScore > humanScore){
        displayWinner.textContent = `Computer is the Winner!! The score is Human: ${humanScore} | Computer: ${computerScore}`;
      }
      display.appendChild(displayWinner);
      buttons.removeEventListener('click', handleClick);
    }
  }
  buttons.addEventListener('click', handleClick);
  }

//Main Code

playGame();








