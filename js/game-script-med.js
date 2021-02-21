let guessNum = Math.trunc(Math.random() * 20) + 1;
let currScore = 10;


document.querySelector('.guess-check').addEventListener('click', function() {
  let guess = Number(document.querySelector('.guess-input').value);

  if (!guess) {
    document.querySelector('.game-message').textContent = 'Input a valid number!';
  } else if (guess === guessNum) {
    document.querySelector('.game-message').textContent = 'You got the correct number!';
    document.querySelector('.num').textContent = guessNum;
    document.querySelector('.h-score').textContent = currScore;
  } else if (guess !== guessNum) {
    if (currScore > 1) {
      document.querySelector('.game-message').textContent = guess > guessNum ? 'Number is too high!' : 'Number is too low!';
      currScore--;
      document.querySelector('.c-score').textContent = currScore;
    } else {
      document.querySelector('.game-message').textContent = 'GAME OVER!';
      document.querySelector('.c-score').textContent = '0';
      document.querySelector('.num').textContent = guessNum;
    }
  }
});

document.querySelector('.guess-again').addEventListener('click', function() {
  currScore = 10;
  document.querySelector('.c-score').textContent = '10';
  document.querySelector('.num').textContent = '?';
  guessNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess-input').value = '';
})
