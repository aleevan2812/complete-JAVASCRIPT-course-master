'use strict';

let score0 = 0,
  score1 = 0;

let current = 0;

let playerPlay = 0;
let playing = true;

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const scorePlayer0 = document.querySelector('#score--0');
const scorePlayer1 = document.querySelector('#score--1');
const currentPlayer0 = document.querySelector('#current--0');
const currentPlayer1 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');

dice.classList.add('hidden');

scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;

btnNewGame.addEventListener('click', function () {
  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;
  currentPlayer0.textContent = 0;
  currentPlayer1.textContent = 0;
  dice.classList.add('hidden');
  score0 = 0;
  score1 = 0;
  current = 0;
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--1').classList.remove('player--winner');
  playerPlay = 0;
  playing = true;
});

btnRoll.addEventListener('click', function () {
  if (playing) {
    //   console.log(Math.floor(Math.random() * 5) + 1);
    const randomDice = Math.floor(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${randomDice}.png`;

    if (randomDice == 1) {
      // if (playerPlay === 1) {
      //   currentPlayer1.textContent = 0;
      //   playerPlay = 0;
      //   current = 0;
      //   console.log(playerPlay, typeof playerPlay, 'in');
      //   document.querySelector('.player--0').classList.add('player--active');
      //   document.querySelector('.player--1').classList.remove('player--active');
      // } else {
      //   currentPlayer0.textContent = 0;
      //   playerPlay = 1;
      //   current = 0;
      //   console.log(playerPlay, typeof playerPlay, 'in');
      //   document.querySelector('.player--1').classList.add('player--active');
      //   document.querySelector('.player--0').classList.remove('player--active');
      // }

      switchPlayer();
    }
    // if (playerPlay === 0 && randomDice !== 1) {
    //   current = current + randomDice;
    //   currentPlayer0.textContent = current;
    // }
    // if (playerPlay === 1 && randomDice !== 1) {
    //   current = current + randomDice;
    //   currentPlayer1.textContent = current;
    // }
    else {
      current += randomDice;
      document.querySelector(`#current--${playerPlay}`).textContent = current;
    }
    // console.log(playerPlay, typeof playerPlay, 'out');
    whoWins();
  }
});

let switchPlayer = () => {
  // let playerNotPlay = playerPlay;
  document.querySelector(`#current--${playerPlay}`).textContent = 0;
  document
    .querySelector(`.player--${playerPlay}`)
    .classList.remove('player--active');
  // document.querySelector(`#score--${playerPlay}`).textContent =
  //   playerPlay === 1 ? score1 : score0;
  playerPlay = playerPlay === 0 ? 1 : 0;

  current = 0;
  document
    .querySelector(`.player--${playerPlay}`)
    .classList.add('player--active');
  console.log(playerPlay);
};

btnHold.addEventListener('click', () => {
  if (playing) {
    if (playerPlay === 0) {
      score0 += current;
      scorePlayer0.textContent = score0;
      switchPlayer();
      // playerPlay = 1;
      // current = 0;
      // currentPlayer0.textContent = 0;
      // document.querySelector('.player--0').classList.remove('player--active');
      // document.querySelector('.player--1').classList.add('player--active');
    } else {
      score1 += current;
      scorePlayer1.textContent = score1;
      switchPlayer();
      // playerPlay = 0;
      // current = 0;
      // currentPlayer1.textContent = 0;
      // document.querySelector('.player--0').classList.add('player--active');
      // document.querySelector('.player--1').classList.remove('player--active');
    }
  }

  whoWins();
});

let whoWins = () => {
  if (score0 >= 20) {
    // document.querySelector('.player--0').style.backgroundColor = 'green';
    document.querySelector('.player--0').classList.add('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    playing = false;
  }
  if (score1 >= 20) {
    // document.querySelector('.player--1').style.backgroundColor = 'green';
    document.querySelector('.player--1').classList.add('player--winner');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.remove('player--active');
    playing = false;
  }
};
