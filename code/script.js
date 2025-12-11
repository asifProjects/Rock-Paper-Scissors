const choices = document.querySelectorAll(".choice");
const turnText = document.getElementById("turn-text");

const p1Display = document.getElementById("player1-choice");
const p2Display = document.getElementById("player2-choice");
const resultText = document.getElementById("result-text");
const resultsBox = document.getElementById("results");

const scoreP1El = document.getElementById("score-p1");
const scoreP2El = document.getElementById("score-p2");

const newGameBtn = document.getElementById("new-game-btn");
const resetScoreBtn = document.getElementById("reset-score-btn");

let player1 = "";
let player2 = "";
let turn = 1;

let scoreP1 = 0;
let scoreP2 = 0;

choices.forEach(btn => {
    btn.addEventListener("click", () => {
        let choice = btn.getAttribute("data-choice");

        if (turn === 1) {
            player1 = choice;
            turn = 2;
            turnText.textContent = "Player 2: Choose your move";
        } 
        else if (turn === 2) {
            player2 = choice;
            turnText.style.display = "none";
            showResults();
        }
    });
});

function showResults() {
    p1Display.textContent = player1;
    p2Display.textContent = player2;
    resultsBox.style.display = "block";

    if (player1 === player2) {
        resultText.textContent = "It's a Draw!";
        resultText.style.color = "#7a7a7a";
    } else {
        const p1Wins =
            (player1 === "rock" && player2 === "scissors") ||
            (player1 === "paper" && player2 === "rock") ||
            (player1 === "scissors" && player2 === "paper");

        if (p1Wins) {
            resultText.textContent = "Player 1 Wins 🎉";
            resultText.style.color = "#007200";
            scoreP1++;
            scoreP1El.textContent = scoreP1;
        } else {
            resultText.textContent = "Player 2 Wins 🎉";
            resultText.style.color = "#9d0208";
            scoreP2++;
            scoreP2El.textContent = scoreP2;
        }
    }
}

newGameBtn.addEventListener("click", () => {
    player1 = "";
    player2 = "";
    turn = 1;
    turnText.style.display = "block";
    turnText.textContent = "Player 1: Choose your move";
    resultsBox.style.display = "none";
});

resetScoreBtn.addEventListener("click", () => {
    scoreP1 = 0;
    scoreP2 = 0;
    scoreP1El.textContent = scoreP1;
    scoreP2El.textContent = scoreP2;
});
