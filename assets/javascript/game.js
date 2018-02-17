//varaiable of words to choose from goes here:// Array




var wineChoices = ["chianti","champagne","bordeaux","meritage","malbec","chardonnay"];
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
var lossCounter = 0;
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
    function wrongGuesses(letters) {
    //Write the code needed to 
    //add this letter to the wrong guesses array
    wrongLetter.push(letters)
    guessesLeft -= 1 
    //subtract 1 from the guesses left number
}
    document.getElementById("word-blanks").innerHTML = underScore;

    function updateLetters(letters) {
        for (var i = 0; i < randomWine.length; i++) {
            //the for loop runs through all of the words letters
            // now if a letter matches, the if (below) comes in to play
            if (letter === randomWine[i]) {
                var answerWordletter = randomWine[i]
            underScore[i] = answerWordletter;
            }
        }
    }
    //Keyboard interactive-- cannot get full functionality. It
    var usedChars = [];
    document.onkeyup = function (event) {
    var keypress = event.key
    console.log(keypress);
        if(wineChoices.indexOf(keypress) >= 0){
            updateLetters(keypress)
            document.getElementById("word-blanks").innerHTML = underScore;
        } 
        else{
            wrongGuesses(keypress)
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
