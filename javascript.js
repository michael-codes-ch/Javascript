function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice < 0.33) {
        return "rock";
    } else if (computerChoice < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper, or Scissors? shoot!")
    return humanChoice;
} 

function playGame() {
    let humanScore = 0;
    let computerScore =0;

    function playRound(humanChoice, computerChoice) {
    if (!humanChoice) {
        console.log("Round skipped (no input)")
    }
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
    } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper") 
    ){
                humanScore++;
                console.log("You win! " + humanChoice + " beats " + computerChoice);
            } else {
                computerScore++;
                console.log("You lose! " + computerChoice + " beats " + humanChoice);
            }
            alert("Score -> Human: " + humanScore + " | Computer: " + computerScore)
    }
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())

    console.log("--Final Result--");
    if (humanScore < computerScore) {
        console.log("Game over! The computer won.");
    } else if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else {
        console.log("The whole game is a tie!")
    }
}
playGame();