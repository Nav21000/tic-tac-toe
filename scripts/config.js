function openPlayerConfig(){
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent = '';
}


function savePlayerConfig(event){
   event.preventDefault();     // prevent the default from submmission
    const formData = new FormData(event.target);   // get the form data
    const enteredPlayerName = formData.get('playername').trim();   //trim used for deleting the whitespaces    //get allows to take the value of the input 


    if(!enteredPlayerName){
        event.target.firstElementChild.classList.add('error');
      errorOutputElement.textContent = 'Please enter a valid name';
      return;
    }
}