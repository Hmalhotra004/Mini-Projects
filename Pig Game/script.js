'use strict';

const player_0El = $('.player--0');
const player_1El = $('.player--1');

const score_0El = $('#score--0');
const score_1El = $('#score--1');

const current_0El = $('#current--0');
const current_1El = $('#current--1');

const diceEl = $('.dice');

const btnNew = $('.btn--new');
const btnRoll = $('.btn--roll');
const btnhHold = $('.btn--hold');
const btnHtp = $('.btn--htp');

const modal = $('.modal');
const overlay = $('.overlay');
const btnCloseModal = $('.close-modal');

let scores, currentScore, activePlayer, playing;

//starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score_0El.text(0);
  score_1El.text(0);
  current_0El.text(0);
  current_1El.text(0);

  diceEl.addClass('hidden');
  player_0El.removeClass('player--winner');
  player_1El.removeClass('player--winner');
  player_0El.addClass('player--active');
  player_1El.removeClass('player--active');
};
init();

const switchPlayer = function () {
  $(`#current--${activePlayer}`).text(0);
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player_0El.toggleClass('player--active');
  player_1El.toggleClass('player--active');
};

const openModal = function () {
  modal.removeClass('hidden');
  overlay.removeClass('hidden');
};

const closeModal = function () {
  modal.addClass('hidden');
  overlay.addClass('hidden');
};

//rolling dice
btnRoll.on('click', function (e) {
  if (playing) {
    //generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //display dice
    diceEl.removeClass('hidden');
    diceEl.attr('src', `./assets/dice-${dice}.png`);

    //check for rolled 1
    if (dice !== 1) {
      currentScore += dice;
      $(`#current--${activePlayer}`).text(currentScore);
    } else {
      switchPlayer();
    }
  }
});

btnhHold.on('click', function (e) {
  if (playing) {
    // add current score to active players score
    scores[activePlayer] += currentScore;
    $(`#score--${activePlayer}`).text(scores[activePlayer]);

    //check if players score >= 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.addClass('hidden');
      $(`.player--${activePlayer}`).addClass('player--winner');
      $(`.player--${activePlayer}`).removeClass('player--active');
    } else {
      // switch player
      switchPlayer();
    }
  }
});

btnNew.on('click', init);

btnHtp.on('click', openModal);
btnCloseModal.on('click', closeModal);
overlay.on('click', closeModal);

$(document).on('keydown', function (e) {
  if (e.key === 'Escape' && !modal.hasClass('hidden')) {
    closeModal();
  }
});
