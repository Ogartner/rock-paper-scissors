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
      console.log('User Input wrong. Try again.');
  }
};

const playRound = function (human, computer) {
  // Both the same output.
  if (human === computer) {
    return 'same';

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

      // Wrong Input
    } else {
      return false;
    }
  }
};

const playGame = function () {
  // Create a loop of 5 rounds.
  for (let i = 1; i <= 5; i++) {
    // get each round a new input.
    const human = getHumanChoice();
    const computer = getComputerChoice();
    // Start round.
    const game = playRound(human, computer);

    // Human wins round.
    if (human === game) {
      humanScore += 1;
      console.log(`You Win Round ${i}! ${human} wins against ${computer}.`);
      // Computer wins round.
    } else if (computer === game) {
      computerScore += 1;
      console.log(`You Loose Round ${i}! ${human} loose against ${computer}.`);
      // No one wins round.
    } else if (game === 'same') {
      console.log('Both with same output. This round is a draw. No points');
      // Wrong input, this round restarts.
    } else {
      i--;
      alert(
        'Wrong Input! Try this round again. Please type in "Rock", "Paper" or "Scissor."'
      );
    }
  }
  // Human wins game.
  if (humanScore > computerScore) {
    console.log(`Win for the Human Race. ${humanScore} : ${computerScore}`);
    // Computer wins game.
  } else if (computerScore > humanScore) {
    console.log(`Win for the Computer Race. ${computerScore} : ${humanScore}`);
    // Scientology always wins at the end.
  } else {
    console.log('Equal points. Scientology wins!');
  }
};

playGame();
