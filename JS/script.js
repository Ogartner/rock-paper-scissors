// GLOBAL VARIABLES

// Create variable to store rock/paper/scissors string.
let computerChoice;
let humanChoice;

let humanScore = 0;
let computerScore = 0;

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
      return null;
  }
};

// Create a function that asks user for rock/paper/scissors and return it.
const getHumanChoice = function () {
  // Asking for a number between 1 - 3.
  let askHuman = prompt('Please type in "Rock", "Paper" or "Scissor');

  askHuman = askHuman.toLocaleLowerCase();

  // Same code as computerChoice.
  switch (askHuman) {
    case 'rock':
      humanChoice = 'Rock';
      return humanChoice;
    case 'paper':
      humanChoice = 'Paper';
      return humanChoice;
    case 'scissor':
      humanChoice = 'Scissor';
      return humanChoice;

    // User typed in a wrong value.
    default:
      console.log('User Input wrong.');
  }
};

const human = getHumanChoice();
const computer = getComputerChoice();

const playRound = function (human, computer) {
  if (human === computer) {
    console.log(`Both have ${human} so no one wins.`);
  } else {
    // Rock wins agains Scissor.
    if (human === 'Rock' && computer === 'Scissor') {
      humanScore += 1;
      return console.log(`You Win! ${human} wins against ${computer}.`);

      // Rock loose against Paper.
    } else if (human === 'Rock' && computer === 'Paper') {
      computerScore += 1;
      return console.log(`You Loose! ${computer} wins against ${human}.`);

      // Paper wins agains Rock.
    } else if (human === 'Paper' && computer === 'Rock') {
      humanScore += 1;
      return console.log(`You Win! ${human} wins against ${computer}.`);

      // Paper loses against Scissor.
    } else if (human === 'Paper' && computer === 'Scissor') {
      computerScore += 1;
      return console.log(`You Loose! ${computer} wins against ${human}.`);

      // Scissor wins against Paper.
    } else if (human === 'Scissor' && computer === 'Paper') {
      humanScore += 1;
      return console.log(`You Win! ${human} wins against ${computer}.`);

      // Scissor looses against Rock.
    } else if (human === 'Scissor' && computer === 'Rock') {
      computerScore += 1;
      return console.log(`You Loose! ${computer} wins against ${human}.`);

      // Wrong Input
    } else {
      return alert(
        'Wrong Input! Please try again and type in "Rock", "Paper" or "Scissor."'
      );
    }
  }
};

playRound(human, computer);
