$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*---Declaring variables---*/
  	var random;
  	var feedback = $("#feedback");
  	var userGuess = $("#userGuess");
  	var guess
  	var count = $("#count");
  	var i = 0;
  	var guessButton = $("#guessButton");
  	var variance = Math.abs(random - guess);
  	var feedback = $("#feedback");

  	/*--- Generating a random variable ---*/
  	function randomNumber() {
    	random = Math.floor(Math.random() * (100)) + 1;
    	console.log(+random);
    };
    randomNumber();

	/*---Number of times guessed---*/
	function guessCount() {
		i++;
		count.text(i);
		$("#guessList").append("<li>"+ userGuess.val() +"</li>");
	 	userGuess.val("");
	};

	/*---Feedback text---*/
	function temperature(variance) {
	  if (variance == 0) {
	    feedback.text("You got it - the temperature is just right!");
	    guessButton.attr("disabled", true);
	    userGuess.attr("disabled", true);
	  } else if(variance <= 2) {
	    feedback.text("Boiling hot");
	  } else if(variance <= 5) {
	    feedback.text("So hot");
	  } else if(variance<= 10) {
	    feedback.text("Hot");
	  } else if(variance <= 20) {
	    feedback.text("Warm");
	  } else if(variance <= 30) {
	    feedback.text("Chilly");
	  } else if(variance <= 40) {
	  	feedback.text("Cold");
	  } else if(variance <= 50) {
	    feedback.text("So cold");  
	  } else {
	    feedback.text("Freezing cold");
	  };
	};

	/*---Play game---*/
	guessButton.click(function() {
	  var guess = +$("#userGuess").val();
	  if (guess > 0 && guess < 101) {
	    guessCount();
	    temperature(Math.abs(guess - random));
	    return false;
	  } else {
	    feedback.text('Please enter a number between 1 and 100');
	    userGuess.val('');
	    return false;
	  };
	});

	/*---New game---*/
	$(".new").click(function() {
  		i = 0;
	  	randomNumber();
	  	feedback.text("Make your Guess!");
	  	guessButton.attr("disabled", false);
	  	userGuess.attr("disabled", false);
	  	$("#guessList").empty();
	 	count.text(i);
	});

});