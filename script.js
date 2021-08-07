'use strict!';

let myNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('No Number!');
  } else if (guess === myNumber) {
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#1fe800';
    document.querySelector('.pict').classList.remove;
    document.querySelector('.victory').textContent = 'Victory!';
    document.querySelector('.rank').textContent = highScore;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.rank').textContent = highScore;
    }
  } else if (guess !== myNumber) {
    if (score > 1) {
      displayMessage(guess > myNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  myNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing ...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#e80000';
  document.querySelector('.victory').textContent = '';
});
