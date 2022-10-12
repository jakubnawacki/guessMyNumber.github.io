//function which randomly choose value from 1 to 50
let numberSelected = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = 0;

//function which display message when it's needed
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === numberSelected) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = numberSelected;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== numberSelected) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > numberSelected ? 'Your number is too high 🔥' : 'Your number is too low ❄';
      displayMessage(
        guess > numberSelected
          ? 'Your number is too high 🔥'
          : 'Your number is too low ❄'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You loose! 🤷‍♀️';
      displayMessage('You loose! 🤷‍♀️');
      document.querySelector('.score').textContent = 0;
    }
  }

  //LONGER SOLUTION BELOW:
  //   //   //when player guess the higher number
  //   // } else if (guess > numberSelected) {
  //   //   if (score > 1) {
  //   //     document.querySelector('.message').textContent =
  //   //       'Your number is too high 🔥';
  //   //     score--;
  //   //     document.querySelector('.score').textContent = score;
  //   //   } else {
  //   //     document.querySelector('.message').textContent = 'You loose! 🤷‍♀️';
  //   //     document.querySelector('.score').textContent = 0;
  //   //   }
  //   //   //when player guess the lower number
  //   // } else if (guess < numberSelected) {
  //   //   if (score > 1) {
  //   //     document.querySelector('.message').textContent = 'Your number is too low';
  //   //     score--;
  //   //     document.querySelector('.score').textContent = score;
  //   //   } else {
  //   //     document.querySelector('.message').textContent = 'You loose! 🤷‍♀️';
  //   //     document.querySelector('.score').textContent = 0;
  //   //   }
  //   // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 50) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
