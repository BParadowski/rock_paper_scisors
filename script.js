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

function playRound(player_choice, computer_choice=computerPlay() ){
    player_choice = player_choice.toLowerCase();
    if (player_choice === computer_choice){
        return "It's a tie!";
    }
    else if (player_choice=== "rock" && computer_choice==="paper"){
        return "You lose! Paper beats Rock.";
    }
    else if (player_choice==="rock" && computer_choice==="scisors"){
        return "You win! Rock beats Scisors";
    }
    else if (player_choice==="paper"){
        if ( computer_choice==="scisors"){
            return "You lose! Scisors beat Paper";
        }
        else{
            return "You win! Paper beats Rock";
        }
    }
    else if (player_choice==="scisors"){
        if (computer_choice==="rock"){
            return "You lose! Rock beats Scisors";
        }
        else{
            return "You win! Scisors beat Paper";
        }
    }
}
function Game(){
    let playerScore = 0;
    let computerScore =0;
    let player_choice;
    let outcome;

    while (playerScore < 5 && computerScore < 5){
        player_choice = prompt("Rock, paper or scisors?");
        outcome = playRound(player_choice);
        console.log(outcome);
        if (outcome.startsWith("You win")){
            playerScore++;
        }
        else if (outcome.startsWith("You lose")){
            computerScore++;
        }
    }
    if (playerScore > computerScore){
        console.log("Player won.");
    }
    else{
        console.log("Computer won.");
    }
}

