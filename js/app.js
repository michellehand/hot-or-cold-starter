
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

});
/* new game */
$('.new').click(function() {
  newGame();
  console.log(secretNumber);
});

/*--Variables--*/

var secretNumber = randomNumber();
var guessNum = +$('#userGuess').val();
var guessCount = 0;


/*-- Functions--*/

function newGame() {
    $('#count').text('0');
    $('#feedback').text('Make your Guess!');
    randomNumber();
  }

/* Random number */
function randomNumber() {
	return Math.floor((Math.random()*100)+1);
}

function resetGuess() {
  $('#guessList').find("li").remove();
}

function feedback() {
  if (isNan(guessNum) || guessNum > 100 || guessNum < 1) {
    $("#feedback").text("Enter a number between 1 and 100");
  };
	}
