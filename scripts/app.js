const gameData = [
[0,0,0],
[0,0,0],
[0,0,0],
];



let editedPlayer = 0;
let activePlayer=0;
let currentRound=1;

const players=[
    {
        name: '',
        Symbol:'X'
    },
    {
        name: '',
        Symbol:'O'
    },
];


const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutputElement = document.getElementById('config-error');
const startNewGameBtnElement=document.getElementById('start-game-btn');
const gameAreaElement=document.getElementById('active-game');
const activePlayerNameElement=document.getElementById('active-player-name');
const gameOverElement=document.getElementById('game-over');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const gamefieldElements=document.querySelectorAll('#game-board li');

editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

cancelConfigBtnElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);


formElement.addEventListener('submit',savePlayerConfig);

startNewGameBtnElement.addEventListener('click',startNewGame);

for(const gamefieldElement of gamefieldElements)   //for loop to add event listeners to all the gamefield elements
{
    gamefieldElement.addEventListener('click',selectedGameField);
}
