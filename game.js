
//varaiable of words to choose from goes here:// Array

var WineChoices = ["Chianti", "Champagne", "Bordeaux", "Meritage", "Malbec", " Pinot Noir", "Sauvignon Blanc"];
//variable of the alaphabet for letter choices goes here -Array Include wins, losses, and guesses
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
var guessesRemaining = 14;
var wins = 0;
var loss = 0;
var underScore = [];
var randomWine;
var wrongLetter = [];
var userGuesses = [];
var userScore = [];
var winCounter = [];
var lossCounter = [];

//Start Game fuctnion
function startGame(){
    randomWord = WineChoices[Math.floor(Math.random() * WineChoices.length)];
    console.log(randomWord);{
    underScore.push('')
    }
    for(var i = 0; i < randomWine.length; i++);
    }
//Underscore blanks will appear on screen
function makeUnderScore()
    if (WineChoices.length === 0)
    {
        var underScoreBlack = rightWordtxt.txtContent = [];
    }
document.getElementById("word-blanks").innerHTML = underScore;
console.log(underScore)
//reset
wrongLetter = [];
guessesRemaining = 14;

//Affects the HTML code
document.getElementById("guesses-left").textContent = guessesRemaining;{

}
    //Checking to see if the letter exists inside of the word choice.
document.onkeyup = function(event){
    userGuesses = event.key;
    if(randomWord.indexOf(userGuesses) > -1);{
        for(var i = 0; i < randomWord.length; i++);{
            if(randomWord[i] === userGuesses);{
                underScore[i] = userGuesses;
                console.log(underScore);
                winCounter++;
                winLose();
            }
      
        }
    }
}
    else{
    wrongLetter.push(userGuesses)
    guessesRemaining--;
    }
    console.log(wrongLetter);   
    winLose();
    
     

