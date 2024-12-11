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
      break;
    // 2 === 'paper'
    case 2:
      computerChoice = 'paper';
      break;
    // 3 === 'scissor'
    case 3:
      computerChoice = 'scissor';
      break;

    default:
      console.log('Something went wrong');
  }
};

getComputerChoice();
