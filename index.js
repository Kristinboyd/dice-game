// dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = 'dice' + randomNumber1 + '.png';
var randomImageSource = 'images/' + randomDiceImage;

var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomImageSource);

// dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = 'dice' + randomNumber2 + '.png';
var randomImageSource2 = 'images/' + randomDiceImage2;

var image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src', randomImageSource2);

function generateRandomNum() {
  // gets a random number between 0.0 and 0.99999999
  var randomNum = Math.random();

  // multiply that num by the max number we want
  randomNum = randomNum * 6;

  // round that random num down to nearest .0
  // adds one to rounded down num to account for the 0th index
  randomNum = Math.floor(randomNum) + 1;

  // return the random num
  return randomNum;
}

// randomNumber1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = '🥇Player 1 Wins!';
} else if (randomNumber1 < randomNumber2) {
  // randomNumber2 wins
  document.querySelector('h1').innerHTML = '🥇Player 2 Wins!';
} else {
  document.querySelector('h1').innerHTML = 'Its a tie! Roll to play again';
}
