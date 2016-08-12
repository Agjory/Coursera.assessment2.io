var targetIndex=Math.floor(Math.random()*10);
var colors=["blue","cyan","gold","gray","green","magenta","orange","red","white","yellow"];
var target=colors[targetIndex];
var finished=false;
var guesses=0;
var guessInput;

function doGame(){
  while (!finished) {
    guessInput=prompt("I am thinking of one of these colos:\n\n"+"blue, cyan, gold, gray, green, magenta, orange, red, white, yellow\n\n"+"What color am I thinking of?\n");
    guesses+=1;
    finished=checkGuess();
  }
  document.getElementsByTagName("body")[0].style.background=target;
}

function checkGuess(){
  if(guessInputIndex()===false){
    alert("Sorry, I don't recognize your color.\n\n"+"Please try again.");
    return false;
  }
  else if (guessInputIndex()>targetIndex) {
    alert("Sorry, your guess is not correct!\n\n"+"Hint: your color is alphabetically higher than mine.\n\n"+"Please try again.");
    return false;
  }
  else if (guessInputIndex()<targetIndex) {
    alert("Sorry, your guess is not correct!\n\n"+"Hint: your color is alphabetically lower than mine.\n\n"+"Please try again.");
    return false;
  }
  else{
    //document.getElementsByTagName("body")[0].style.background=target;
    alert("Congratulations! You have guessed the color!\n\n"+"It took you "+guesses+" to finish the game!\n\n"+"You can see the color in the background.");
    return true;
  }
}

function guessInputIndex(){
  for(var i=0;i<colors.length;i++){
    if(guessInput==colors[i])
      return i;
  }
  return false;
}

doGame();
