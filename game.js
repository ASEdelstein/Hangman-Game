
//varaiable of words to choose from goes here:// Array



var wineChoices = ["Chianti","Champagne","Bordeaux","Meritage","Malbec","Chardonnay"];
//variable of the alaphabet for letter choices goes here -Array Include wins, losses, and guesses
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
var wins = 0;
var loss = 0;
var underScore ="";
var wrongLetter = [];
var userScore = [];
var winCounter = 0;
var guessesLeft = 10;
var userGuesses = [];
var lossesCounter = 0;
var letters = [];

//Start Game function???

//pick random word from wineChoice array
    randomWine = wineChoices[Math.floor(Math.random() * wineChoices.length)];
    console.log(randomWine.length);
    for(var i = 0; i < randomWine.length; i++);{
            
}

    for(var i = 0; i < randomWine.length; i++){
    underScore +="_ ";
}

  //Underscore blanks will appear on screen include number of guesses, wrong guesses, and guesses left. 
    function displayNumberOfGuesses(number) {
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    guessesLeft = 10;
    }
    document.getElementById("word-blanks").innerHTML = underScore;


    //Keyboard interactive-- cannot get full functionality. It
    var usedChars = [];
    document.onkeyup = function (event) {
    var key_press = String.randomWine(event.keyCode);
    console.log(key_press);
    usedChars.push(key_press)
    document.getElementById("wrong-guesses").innerHTML = usedChars.toString();

    if(randomWine.indexof(userGuesses) > -1){
        for(var i = 0; i < randomWine.length; i++){
           underScore.push(' _');
        }
        if(randomWine[i] === userGuesses);{
           underScore[i] = userGuesses;
           winCounter++;
           winLose();
        } 
       }

       else{
           wrongLetter.push(userGuesses);
           guessesLeft --;
           console.log(wrongLetter);
       }
   }

        /* userGuesses = event.key.toUpperCase;
     for (i = 0; i < randomWine.length; i++)
     if (userGuesses === randomWine[i])
     document.getElementById("answer").innerHTML = letters.join(" _");
     console.log(userGuesses);
    }
    */

//win Lose alerts for letter choices
function winLose(){
    if(winCounter === randomWine.length){
        alert("Winner!");
         
    }
    else if(guessesLeft === 0){
        alert("You're Drunk Go Home!");
        
    }

}

