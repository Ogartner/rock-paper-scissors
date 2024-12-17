// GLOBAL VARIABLES

// Create variable to store rock/paper/scissors string.
let computerChoice;
let userChoice;
let humanScore = 0;
let computerScore = 0;
let rockPaperScissor;

// DOM
const startGameBtn = document.querySelector('.start-btn');
const humanHalf = document.querySelector('.human-half');
const computerHalf = document.querySelector('.computer-half');
const resultPage = document.querySelector('body');

const rockBox = document.querySelector('.human-half .rock-box');
const paperBox = document.querySelector('.human-half .paper-box');
const scissorBox = document.querySelector('.human-half .scissor-box');
const rockImg = document.querySelector('.human-half .rock-box');
const paperImg = document.querySelector('.human-half .paper-box');
const scissorImg = document.querySelector('.human-half .scissor-box');
const confirmBtn = document.querySelector('.confirm-btn');
const rpsImgContainer = document.querySelector(
  '.human-half .rps-img-container'
);

const drawResult = document.querySelector('.draw-result');
const winResult = document.querySelector('.win-result');
const looseResult = document.querySelector('.loose-result');

const Rock = document.querySelector('.result-rock');
const Paper = document.querySelector('.result-paper');
const Scissor = document.querySelector('.result-scissor');

// FUNCTIONS

// Create function to get a random computer choice of rock/paper/scissors.
const getComputerChoice = function () {
  // Create a variable to store random number between 1 - 3.
  const randomNum = Math.floor(Math.random() * 3) + 1;

  // Add randomNum to one of the three strings.
  switch (randomNum) {
    // 1 === 'rock'
    case 1:
      computerChoice = 'Rock';
      return computerChoice;
    // 2 === 'paper'
    case 2:
      computerChoice = 'Paper';
      return computerChoice;
    // 3 === 'scissor'
    case 3:
      computerChoice = 'Scissor';
      return computerChoice;
    // If code above not working correctly.
    default:
      console.log('Something went wrong');
  }
};

const getUserChoice = () => {
  rockBox.addEventListener('click', () => {
    userChoice = 'Rock';
    console.log(userChoice);
    rockBox.classList.add('choose');
    paperBox.classList.remove('choose');
    scissorBox.classList.remove('choose');
    confirmBtn.classList.remove('hidden');
  });
  paperBox.addEventListener('click', () => {
    userChoice = 'Paper';
    console.log(userChoice);
    paperBox.classList.add('choose');
    rockBox.classList.remove('choose');
    scissorBox.classList.remove('choose');
    confirmBtn.classList.remove('hidden');
  });
  scissorBox.addEventListener('click', () => {
    userChoice = 'Scissor';
    console.log(userChoice);
    scissorBox.classList.add('choose');
    rockBox.classList.remove('choose');
    paperBox.classList.remove('choose');
    confirmBtn.classList.remove('hidden');
  });
};

const getWinner = function (human, computer) {
  // Both the same output.
  if (human === computer) {
    return 'draw';

    // Who wins?
  } else {
    // Rock wins agains Scissor.
    if (human === 'Rock' && computer === 'Scissor') {
      return human;

      // Rock loose against Paper.
    } else if (human === 'Rock' && computer === 'Paper') {
      return computer;

      // Paper wins agains Rock.
    } else if (human === 'Paper' && computer === 'Rock') {
      return human;

      // Paper loses against Scissor.
    } else if (human === 'Paper' && computer === 'Scissor') {
      return computer;

      // Scissor wins against Paper.
    } else if (human === 'Scissor' && computer === 'Paper') {
      return human;

      // Scissor looses against Rock.
    } else if (human === 'Scissor' && computer === 'Rock') {
      return computer;
    }
  }
};

const playGame = function () {
  getUserChoice();
  // Confirm choice and play round.
  confirmBtn.addEventListener('click', () => {
    // get each round a new input.
    const computer = getComputerChoice();
    const human = userChoice;
    console.log(human, computer);
    const playRound = getWinner(human, computer);
    console.log(human, computer);

    if (playRound === 'draw') {
      humanHalf.classList.add('hidden');
      computerHalf.classList.add('hidden');
      resultPage.classList.add('draw');
      drawResult.classList.remove('hidden');
    } else if (playRound === human) {
      humanHalf.classList.add('hidden');
      computerHalf.classList.add('hidden');
      resultPage.classList.add('win-human');
      winResult.classList.remove('hidden');
      if (human === 'Rock') {
      }
      human.classList.remove('hidden');
    } else if (playRound === computer) {
      humanHalf.classList.add('hidden');
      computerHalf.classList.add('hidden');
      resultPage.classList.add('win-computer');
      looseResult.classList.remove('hidden');
      computer.classList.remove('hidden');
    }
  });
};

// // No one wins round.
// if (game === 'same') {
//   console.log(`Round ${i}: DRAW!`);
//   // Human wins round.
// } else if (game) {
//   humanScore += 1;
//   console.log(`Round ${i}: You Win! ${human} wins against ${computer}.`);
//   // Computer wins round.
// } else if (!game) {
//   computerScore += 1;
//   console.log(`Round ${i}: You Loose! ${human} loose against ${computer}.`);

//   // Wrong input, this round restarts.
// } else {
//   i--;
//   alert(
//     'Wrong Input! Try this round again. Please type in "Rock", "Paper" or "Scissor."'
//   );
// }
// Human wins game.
// if (humanScore > computerScore) {
//   console.log(`Win for the Human Race: ${humanScore} : ${computerScore}`);
//   // Computer wins game.
// } else if (computerScore > humanScore) {
//   console.log(`Win for the Computer Race: ${computerScore} : ${humanScore}`);
//   // Scientology always wins at the end.
// } else {
//   console.log('Equal points. Scientology wins!');
// }

// playGame();

const init = function () {
  // Click start game to toggle to actual game.
  startGameBtn.addEventListener('click', () => {
    startGameBtn.classList.toggle('active');
    humanHalf.classList.remove('hidden');
    computerHalf.classList.remove('hidden');
  });

  // getUserChoice();

  playGame();
};

init();
