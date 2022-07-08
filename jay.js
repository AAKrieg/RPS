let randomArray = ['rock', 'paper', 'scissors'];
let compChoice;
let playerChoice;
let round;
let playerLife = 5;
let compLife = 5;
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const playerScore = document.getElementById('playerScore');
const compScore = document.getElementById('compScore');
const roundResult = document.getElementById('roundResult');
const winner = document.getElementById('winner');

function playerWin(){
    compLife -= 1;
    compScore.innerHTML = "Computer life: " + compLife;
    roundResult.innerHTML = "Result: You Won!";
}

function computerWin(){
    playerLife -= 1;
    playerScore.innerHTML = "Player life: " + playerLife;
    roundResult.innerHTML = "Result: You Lost!";
}
function draw(){
        roundResult.innerHTML = "Result: Draw!";
}

function computerPlay(){
    randomChoice = randomArray[Math.floor(Math.random()*randomArray.length)]
    return randomChoice;
}

function playRound(playerChoice,compChoice){
    
    if(playerChoice === compChoice){
            draw();
    }
        else if(playerChoice === 'rock' && compChoice === 'scissors'){
            playerWin();
        } else if(playerChoice === 'paper' && compChoice === 'rock'){
            playerWin();
        }
        else if(playerChoice ==='scissors' && compChoice === 'paper'){
            playerWin();
        }
        else{
            computerWin();
        }

    if (playerLife === 0){
        winner.innerHTML = "You LOST the game!";
        }
    if (compLife === 0){
        winner.innerHTML = "You WON the game!";
        }
    }

rockBtn.addEventListener('click', function(){
        playerChoice = 'rock';
        compChoice = computerPlay();
        while (playerLife && compLife > 0){
            playRound(playerChoice,compChoice);
            reset(playerChoice);}
    });
    
paperBtn.addEventListener('click', function() {
        playerChoice = 'paper';
        compChoice = computerPlay();
        while (playerLife && compLife > 0){
            playRound(playerChoice, compChoice);
            reset(playerChoice);}
    });
    
scissorsBtn.addEventListener('click', function() {
        playerChoice = 'scissors';
        compChoice = computerPlay();
        while (playerLife && compLife > 0){
            playRound(playerChoice, compChoice);
            reset(playerChoice);}
    });