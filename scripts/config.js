function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid;  //dataset is used to get the data from the html
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';  //clear the input field //this is not the best practise but it works
}


function savePlayerConfig(event){
   event.preventDefault();     // prevent the default from submmission
    const formData = new FormData(event.target);   // get the form data
    const enteredPlayerName = formData.get('playername').trim();   //trim used for deleting the whitespaces    //get allows to take the value of the input 
    // console.log(enteredPlayerName);
    if(!enteredPlayerName){
        event.target.firstElementChild.classList.add('error');
      errorOutputElement.textContent = 'Please enter a valid name';
      return;
    }


    const updatedPlayerDataElement=document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;


  players[editedPlayer-1].name = enteredPlayerName;    //editedPlayer-1 is used to get the index of the player //this player is the player that is being edited and store for accessing when to print winners name

  closePlayerConfig(); //close the player config // when done edited done
}

