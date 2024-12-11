let humanScore = 0;
let computerScore = 0;

const getComputerChoice = function () {
  // Create a variable to store random number between 1 - 3.
  const randomNum = Math.floor(Math.random() * 3) + 1;

  // Create variable to store rock/paper/scissors string.
  let computerChoice;

  // Add randomNum to one of the three strings.
  switch (randomNum) {
    // 1 === 'rock'
    case 1:
      computerChoice = 'rock';
      console.log(computerChoice);
      break;
    // 2 === 'paper'
    case 2:
      computerChoice = 'paper';
      console.log(computerChoice);
      break;
    // 3 === 'scissor'
    case 3:
      computerChoice = 'scissor';
      console.log(computerChoice);
      break;
    // If code above not working correctly.
    default:
      console.log('Something went wrong');
  }
};

const getHumanChoice = function () {
  // Asking for a number between 1 - 3.
  let askHuman = prompt('Please type in "Rock", "Paper" or "Scissor');

  askHuman = askHuman.toLocaleLowerCase();

  // Same code as computerChoice.
  let humanChoice;
  switch (askHuman) {
    case 'rock':
      humanChoice = 'rock';
      console.log(humanChoice);
      break;
    case 'paper':
      humanChoice = 'paper';
      console.log(humanChoice);
      break;
    case 'scissor':
      humanChoice = 'scissor';
      console.log(humanChoice);
      break;
    // User typed in a wrong value.
    default:
      console.log(
        'Wrong Input! Please try again and type either "Rock", "Paper" or "Scissor."'
      );
  }
};

human = getHumanChoice();
computer = getComputerChoice();

const playRound = function (human, computer) {
  
};
