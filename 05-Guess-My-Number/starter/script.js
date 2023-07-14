'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

// const secretNumber = Math.floor(Math.random() * 20) + 1;
// const number = Math.trunc(Math.random() * 20) + 1;
// console.log(number);

let score = 20;

// document.querySelector('.number').textContent = secretNumber;
let secretNumber = Math.floor(Math.random() * 20) + 1;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🔴 No Number!');
    // guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('✅ Correct Number!');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? '🔺 Too high!' : '🔻 Too low!');
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('😥 You lost the game!');
    }
  }
  // } else if (guess > secretNumber) {
  //   // guess is too high
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = '🔺 Too high!';
  //   } else {
  //     document.querySelector('.score').textContent = 0;

  //     document.querySelector('.message').textContent = '😥 You lost the game!';
  //   }

  //   // guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = '🔻 Too low!';
  //   } else {
  //     document.querySelector('.number').textContent = secretNumber;
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '😥 You lost the game!';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = 20;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.floor(Math.random() * 20) + 1;
});
