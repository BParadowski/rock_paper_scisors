let playerPoints;
let computerPoints;
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const roundOutcome = document.querySelector("#roundOutcome");
const buttons = document.querySelectorAll("#rps");
const newGameBtn = document.createElement('button');
newGameBtn.textContent = "NEW GAME";
newGameBtn.setAttribute('id',"newGameBtn");
newGameBtn.addEventListener('click', Game)

buttons.forEach(button => button.addEventListener('click', function(e) {
    let outcome = playRound(this.dataset.choice);
    this.classList.add("selected")
    if (outcome.startsWith("You win")){
        playerPoints++;
        playerScore.textContent = `Player score: ${playerPoints}`;
    }
    else if (outcome.startsWith("You lose")){
        computerPoints++;
        computerScore.textContent = `Computer score: ${computerPoints}`;
      
    }
    if (computerPoints === 5){
        roundOutcome.textContent = "Computer won, I am sorry";
        document.body.appendChild(newGameBtn);
        return;
    }
    if (playerPoints === 5){
        roundOutcome.textContent = "Player won, congratulations!"
        document.body.appendChild(newGameBtn);
        return;
    }
        roundOutcome.textContent = outcome;
}));
buttons.forEach(button => button.addEventListener('transitionend', removeBorder));

function removeBorder(e){
    this.classList.remove("selected");
}

function computerPlay(){
    let randNum = Math.floor(Math.random()*3);
    switch (randNum){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scisors";
    }
}

function playRound(playerSelection, computer_choice=computerPlay() ){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computer_choice){
        return "It's a tie!";
    }
    else if (playerSelection=== "rock" && computer_choice==="paper"){
        return "You lose! Paper beats Rock.";
    }
    else if (playerSelection==="rock" && computer_choice==="scisors"){
        return "You win! Rock beats Scisors";
    }
    else if (playerSelection==="paper"){
        if ( computer_choice==="scisors"){
            return "You lose! Scisors beat Paper";
        }
        else{
            return "You win! Paper beats Rock";
        }
    }
    else if (playerSelection==="scisors"){
        if (computer_choice==="rock"){
            return "You lose! Rock beats Scisors";
        }
        else{
            return "You win! Scisors beat Paper";
        }
    }
}

function Game(e){
    let btnGone = document.getElementById("newGameBtn");
    if (btnGone){
    document.body.removeChild(btnGone);
    }
    playerPoints = 0;
    computerPoints = 0;
    playerScore.textContent = "Player score: 0";
    computerScore.textContent = "Computer score: 0"; 
}
function gameOver(){

}

Game();
