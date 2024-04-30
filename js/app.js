// function playgame(){
//     let randnumb = (Math.random()*20)+1;
//     let randomnom = parseInt(randnumb);
        
//     let nom = document.querySelector("#guessarea").value;
//     let guess = parseInt(nom);
        
//     console.log(nom);
//     console.log(randomnom);
        
        
//     if(randomnom == guess) {
//     document.getElementById("result").innerHTML = "You guessed right!";
//     document.getElementById("guessarea").disabled = true;
//     } 
//     else{
//     document.getElementById("result").innerHTML = "You guessed incorrectly...";
//     document.getElementById("guessarea").disabled = true;  
//     }  
    
//     }
//     function resetgame(){
//     document.getElementById("guessarea").value = '';
//     document.getElementById("guessarea").disabled = false;
//     }