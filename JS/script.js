// GLOBAL VARIABLES

// Create variable to store rock/paper/scissors string.
let computerChoice;
let userChoice;
let humanScore = 0;
let computerScore = 0;
let rockPaperScissor;

// Elements.
const startGameBtn = document.querySelector('.start-btn');
const humanHalf = document.querySelector('.human-half');
const computerHalf = document.querySelector('.computer-half');
const resultPage = document.querySelector('body');
const rockBox = document.querySelector('.human-half .rock-box');
const paperBox = document.querySelector('.human-half .paper-box');
const scissorBox = document.querySelector('.human-half .scissor-box');
const confirmBtn = document.querySelector('.confirm-btn');
const rpsImgContainer = document.querySelector(
  '.human-half .rps-img-container'
);
const resultBox = document.querySelector('.result-box');
const container = document.querySelector('.container');
const resultRock = document.querySelector('.result-rock');
const resultPaper = document.querySelector('.result-paper');
const resultScissor = document.querySelector('.result-scissor');

// Create elements.
const humanWinMessage = document.createElement('h3');
humanWinMessage.textContent = 'You Win!';
const computerWinMessage = document.createElement('h3');
computerWinMessage.textContent = 'Computer Wins!';
const drawMessage = document.createElement('h3');
drawMessage.textContent = 'DRAW!';

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

// Create function that choose rock/paper/scissor and hightlights chosen element.
const getUserChoice = () => {
  rockBox.addEventListener('click', () => {
    userChoice = 'Rock';
    rockBox.classList.add('choose');
    paperBox.classList.remove('choose');
    scissorBox.classList.remove('choose');
    confirmBtn.classList.remove('hidden');
  });
  paperBox.addEventListener('click', () => {
    userChoice = 'Paper';
    paperBox.classList.add('choose');
    rockBox.classList.remove('choose');
    scissorBox.classList.remove('choose');
    confirmBtn.classList.remove('hidden');
  });
  scissorBox.addEventListener('click', () => {
    userChoice = 'Scissor';
    scissorBox.classList.add('choose');
    rockBox.classList.remove('choose');
    paperBox.classList.remove('choose');
    confirmBtn.classList.remove('hidden');
  });
};

// Create function that returns true if human wins, else false.
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
  // Start with this function to get value of userChoice.
  getUserChoice();

  // Confirm choice and play round.
  confirmBtn.addEventListener('click', () => {
    // get each round a new input.
    const computer = getComputerChoice();
    const human = userChoice;

    // Returns true for human or false for computer.
    const playRound = getWinner(human, computer);

    // DRAW
    if (playRound === 'draw') {
      humanHalf.classList.add('hidden');
      computerHalf.classList.add('hidden');
      // Set result color background with timer.
      setTimeout(() => {
        resultPage.classList.add('draw-background');
        resultPage.classList.add('filter');
      }, 1337);

      if (human === 'Rock') {
        // Set result image/message with timer. (same time as color background)
        setTimeout(() => {
          resultBox.classList.remove('hidden');
          resultRock.classList.remove('hidden');
          resultBox.appendChild(drawMessage);
        }, 1337);
      }
      if (human === 'Paper') {
        setTimeout(() => {
          resultBox.classList.remove('hidden');
          resultPaper.classList.remove('hidden');
          resultBox.appendChild(drawMessage);
        }, 1337);
      }
      if (human === 'Scissor') {
        setTimeout(() => {
          resultBox.classList.remove('hidden');
          resultScissor.classList.remove('hidden');
          resultBox.appendChild(drawMessage);
        }, 1337);
      }
      // Reset the game after timer makes winner of this round clear.
      setTimeout(() => {
        reset();
      }, 4000);

      // HUMAN WINS
    } else if (playRound === human) {
      humanHalf.classList.add('hidden');
      computerHalf.classList.add('hidden');
      setTimeout(() => {
        resultPage.classList.add('win-human-background');
        resultPage.classList.add('filter');
      }, 1337);
      if (human === 'Rock') {
        setTimeout(() => {
          resultBox.classList.remove('hidden');
          resultRock.classList.remove('hidden');
          resultBox.appendChild(humanWinMessage);
        }, 1337);
      }
      if (human === 'Paper') {
        setTimeout(() => {
          resultBox.classList.remove('hidden');
          resultPaper.classList.remove('hidden');
          resultBox.appendChild(humanWinMessage);
        }, 1337);
      }
      if (human === 'Scissor') {
        setTimeout(() => {
          resultBox.classList.remove('hidden');
          resultScissor.classList.remove('hidden');
          resultBox.appendChild(humanWinMessage);
        }, 1337);
      }
      setTimeout(() => {
        reset();
      }, 4000);

      // COMPUTER WINS.
    } else if (playRound === computer) {
      humanHalf.classList.add('hidden');
      computerHalf.classList.add('hidden');
      setTimeout(() => {
        resultPage.classList.add('win-computer-background');
        resultPage.classList.add('filter');
      }, 1337);
      if (computer === 'Rock') {
        setTimeout(() => {
          resultBox.classList.remove('hidden');
          resultRock.classList.remove('hidden');
          resultBox.appendChild(computerWinMessage);
        }, 1337);
      }
      if (computer === 'Paper') {
        setTimeout(() => {
          resultBox.classList.remove('hidden');
          resultPaper.classList.remove('hidden');
          resultBox.appendChild(computerWinMessage);
        }, 1337);
      }
      if (computer === 'Scissor') {
        setTimeout(() => {
          resultBox.classList.remove('hidden');
          resultScissor.classList.remove('hidden');
          resultBox.appendChild(computerWinMessage);
        }, 1337);
      }
      setTimeout(() => {
        reset();
      }, 4000);
    }
  });
};

// Reset the game.
const reset = () => {
  resultBox.classList.add('hidden');
  resultRock.classList.add('hidden');
  resultPaper.classList.add('hidden');
  resultScissor.classList.add('hidden');
  humanWinMessage.remove();
  computerWinMessage.remove();
  drawMessage.remove();
  resultPage.classList.remove('win-human-background');
  resultPage.classList.remove('win-computer-background');
  resultPage.classList.remove('draw-background');
  resultPage.classList.remove('filter');
  humanHalf.classList.remove('hidden');
  computerHalf.classList.remove('hidden');
};

// Create initialization.
const init = function () {
  // Click Play Game to switch from title menu to actual game.
  startGameBtn.addEventListener('click', () => {
    startGameBtn.classList.toggle('active');
    humanHalf.classList.remove('hidden');
    computerHalf.classList.remove('hidden');
  });

  // Start Game.
  playGame();
};

// Initialize page.
init();
