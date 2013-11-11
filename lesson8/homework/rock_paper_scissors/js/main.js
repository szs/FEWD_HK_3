


var human = document.getElementById("humanScore");
var computer = document.getElementById("computerScore");
var rockBtn = document.getElementById("rock");
var paperBtn = document.getElementById("paper");
var scissorsBtn = document.getElementById("scissors");
var statusMsg = document.getElementById("status");
var userInput;
var robotInput;

// $GAME_START

// # Get user input
rockBtn.onclick = rockClicked
paperBtn.onclick = paperClicked
scissors.onclick = scissorsClicked

// user_choice = get_user_choice
function rockClicked(){
  userInput = "rock"
  robotInput = getRobotInput();
  compare(userInput, robotInput)
}

function paperClicked(){
  userInput = "paper"
  robotInput = getRobotInput();
  compare(userInput, robotInput)
}

function scissorsClicked(){
  userInput = "scissors"
  robotInput = getRobotInput();
  compare(userInput, robotInput)
}

// # Get robot input

function getRobotInput(){
  var choices = {
    1: "rock",
    2: "paper",
    3: "scissors"
  };

// robot_choice = random(paper, scissors, stone)

  var randomNumber = Math.ceil(Math.random()*3);
  // console.log(randomNumber);
  // console.log(choices[randomNumber]);
  return choices[randomNumber]
}

// Compare inputs

function compare(userInput, robotInput){
  console.log(userInput);
  console.log(robotInput);

  if ((userInput =="scissors" && robotInput == "paper") || (userInput =="paper" && robotInput == "rock") ||(userInput =="rock" && robotInput == "scissors")) {
    console.log("User win");
  } else if((robotInput =="scissors" && userInput == "paper") || (robotInput =="paper" && userInput == "rock") || (robotInput =="rock" && userInput == "scissors")) {console.log("Robot win");
  } else {
    console.log("Draw");
  }
}


// # Setup the datastore
// results = initialize(10)

// # User win
// if (user_choice == scissors AND robot_choice == paper)
// or (user_choice == stone AND robot_choice == scissors)
// or (user_choice == paper AND robot_choice == stone)
//   say "YOU WIN"
//   save(results, "user")

// # User lose
// if (user_choice == paper AND robot_choice == scissors)
// or (user_choice == scissors AND robot_choice == stone)
// or (user_choice == stone AND robot_choice == paper)
//   say "YOU LOSE"
//   save(results, "robot")

// # Repeat if draw
// if (user_choice == robot_choice)
//   save(results, "draw")
//   GOTO $GAME_START
// else
//   say "GAME OVER"
//   # Display recent results
//   foreach(results as result)
//     say result
