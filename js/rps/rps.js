let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const resultsDiv = document.querySelector("#results")
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const restartBtn = document.querySelector("#restart");


// Step 2
function getComputerChoice() {
	const r = Math.random();
	if (r < 1 / 3) return "rock";
	if (r < 2 / 3) return "paper";
	return "scissors";
}

function addResultLine(text, className = "") {
	const p = document.createElement("p");
	p.textContent = text;
	if (className) p.classList.add(className);
	resultsDiv.appendChild(p);
}

function showScore() {
  addResultLine(`Score: Human ${humanScore} - Computer ${computerScore}`, "muted");
}

function announceWinnerIfNeeded() {
  if (humanScore >= 5) {
    addResultLine(`🎉 You win the game! ${humanScore} to ${computerScore}.`);
    gameOver = true;
  } else if (computerScore >= 5) {
    addResultLine(`💀 You lose the game! ${computerScore} to ${humanScore}.`);
    gameOver = true;
  }
}

function playRound(humanChoice) {
  if (gameOver) return;

  const computerChoice = getComputerChoice();
  humanChoice = humanChoice.toLowerCase();

  // show round choices
  addResultLine(`You chose ${humanChoice}. Computer chose ${computerChoice}.`);

  if (humanChoice === computerChoice) {
    addResultLine(`Tie! Both chose ${humanChoice}.`);
    showScore();
    return;
  }

  const humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

  if (humanWins) {
    humanScore++;
    addResultLine(`You win! ${humanChoice} beats ${computerChoice}.`);
  } else {
    computerScore++;
    addResultLine(`You lose! ${computerChoice} beats ${humanChoice}.`);
  }

  showScore();
  announceWinnerIfNeeded();
}

function restartGame() {
  humanScore = 0;
  computerScore = 0;
  gameOver = false;
  resultsDiv.textContent = ""; // clear results
  addResultLine("New game started. First to 5 wins!", "muted");
  showScore();
}

// Event listeners
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
restartBtn.addEventListener("click", restartGame);

// Start message
restartGame();