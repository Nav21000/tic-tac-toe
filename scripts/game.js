function resetGameStatus(){
    activePlayer=0;
    currentRound=1;
    gameOverElement.firstElementChild.innerHTML='You Won!,<span id="winner-name">PLAYER NAME</span>';
    gameOverElement.style.display='none';
    

    let gameBoardIndex=0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++)
        {
            gameData[i][j]=0;
            const gameBoardElements=gameBoardElements.children[gameBoardIndex];
            gameBoardElements.textContent='';
            gameBoardElements.classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}




function startNewGame() {
    if (players[0].name == '' || players[1].name == '') {
        return alert('Please enter custom player names');
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}



function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectedGameField(event) {

    const selectField = event.target;
    const selectedColumn = +selectField.dataset.col - 1;
    const selectedRow = +selectField.dataset.row - 1;

    if (gameData[selectedRow][selectedColumn] > 0) {
        alert('Please Select an empty field');
        return;
    }

    event.target.textContent = players[activePlayer].Symbol;
    event.target.classList.add('disabled');



    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    const winnerId = checkForGameOver();
    // if (winnerId > 0) {
    //     return alert(`${players[winnerId - 1].name} has won the game`);
    // }
if(winnerId!==0)
{
    endGame(winnerId);
}


    currentRound++;
    switchPlayer();
}


function checkForGameOver() {
//check for horizontal win

    for(let i=0;i<3;i++)
    {
      if (gameData[i][0] > 0 && gameData[i][0] === gameData[i][1] && gameData[i][0] === gameData[i][2]) {
        return gameData[i][0];
    }
  
    }

    //check for vertical win
    for(let i=0;i<3;i++)
    {
      if (gameData[0][i] > 0 && gameData[0][i] === gameData[1][i] && gameData[0][i] === gameData[2][i]) {
        return gameData[0][i];
    }
  
    }
    // check for left to bottom diagonal win
    if(gameData[0][0]>0&&gameData[0][0]===gameData[1][1] && gameData[1][1]===gameData[2][2])
    {
        return gameData[0][0];
    }

    //check for diagonal win
    if(gameData[2][0]>0&&gameData[2][0]===gameData[1][1] && gameData[1][1]===gameData[0][2])
    {
        return gameData[2][0];
    }

    if(currentRound===9)
    {
        return -1;
    }

    return 0;
}


function endGame(winnerId)
{
    gameOverElement.style.display='block';    //display game over element
    if(winnerId>0){

        const WinnerName=players[winnerId-1].name;
        gameOverElement.firstElementChild.textContent=WinnerName;
    }
    else{
        gameOverElement.firstElementChild.textContent='It\'s a Draw!!';
    }

}