function getComputerChoice() {

  let choice = ["rock", "scissors", "paper"];
  let randomNum = Math.floor(Math.random() * choice.length);

  return choice[randomNum];

}

function getHumanChoice() {
  let input;

  while(true){
    input = prompt(`Pick Rock, Scissors or Paper: `, "").toLowerCase();
    
    if(input === "rock"){
      return "rock";
    }

    else if(input === "scissors"){
      return "scissors";
    }

    else if(input === "paper"){
      return "paper";
    }

    else{
      console.log(`Please only type in the given choices, try again`);
      continue;
    }
  }
}

  function playRound(humanChoice, computerChoice) {

    console.log(`Human Choice:${humanChoice} | Computer Choice:${computerChoice}`);

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

    for(let i = 1; i <= 5; i++){

      console.log(`Game ${i}`);

      let roundWinner = playRound(getHumanChoice(), getComputerChoice());

      if(roundWinner === 'h'){
        humanScore++;
      }
      else if(roundWinner === 'p'){
        computerScore++;
      }

      console.log(`Score is Human:${humanScore}|Computer:${computerScore}`);
    }

    if(humanScore > computerScore){
      console.log(`You are the Winner!! The score is Human:${humanScore}|Computer:${computerScore}`);
    }
    else if(computerScore > humanScore){
      console.log(`Computer is the Winner!! The score is Human:${humanScore}|Computer:${computerScore}`);
    }
    else{
      console.log(`Its a tie`);
    }

  }

//Main Code

playGame();






