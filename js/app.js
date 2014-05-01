/* Notes: got it to give feedback on the first guess, //
but not from mulitple guess. button doesnt respond */



$(document).ready(function(){

	newGame();

  /*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });

 
  /* new game */
  $('.new').click(function(){
    newGame();
  });

  /*guess button*/
  $('#guessButton').click(function() {
    event.preventDefault();
    validate($('#userGuess').val());
  });

});


/*--Variables--*/

var secretNumber = randomNumber();
var guessCount = 0;


/*-- Functions--*/
function newGame() {
    $('#count').text('0');
    $('#feedback').text('Make your Guess!');
    secretNumber = randomNumber();
  }


/* Random number */
function randomNumber() {
	return Math.floor((Math.random()*100)+1);
}

function resetGuess() {
  $('#guessList').find("li").remove();
}

function validate(guessNum) {
  if (isNaN(guessNum) || guessNum > 100 || guessNum < 1) {
    alert(guessNum);
    $("#feedback").text("Enter a number between 1 and 100");
  } else {
    feedback(guessNum);
  }
}

function feedback(guessNum) {
  var relativeNum = Math.abs(guessNum - secretNumber);
  if (relativeNum === 0) {
    $("#feedback").text("You Guessed Correctly! Yay!");
  } else if (relativeNum <= 5) {
    $("#feedback").text("You are practically on FIRE!");
  } else if (relativeNum <= 10) {
    $("#feedback").text("HOT");
  } else if (relativeNum <= 25) {
    $("#feedback").text("Warm");
  } else if (relativeNum <= 50) {
    $("#feedback").text("Cold");
  } else {
    $("#feedback").text("Brrrrrr!");
  }
}




