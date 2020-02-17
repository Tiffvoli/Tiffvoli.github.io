window.addEventListener("DOMContentLoaded", start);

let playerChoose;
let computerChoose;

function start() {
  console.log("start Game");
  clickButtons();
}
function clickButtons() {
  console.log("clickButtons");

  //Make the clickable buttons for players
  document
    .querySelector("#buttons > button.rock")
    .addEventListener("click", playersChoice);
  document
    .querySelector("#buttons > button.scissors")
    .addEventListener("click", playersChoice);
  document
    .querySelector("#buttons > button.paper")
    .addEventListener("click", playersChoice);
}
function playersChoice() {
  console.log("playersChoice");

  //store the player's choice
  console.log(this.className);
  playerChoose = this.className;

  //hands' animation start
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");

  //player cannot make any more choices
  document.querySelector("#buttons").classList.add("disabled");

  //when animation is ended, show computer's choice
  document
    .querySelector("#player1")
    .addEventListener("animationend", computersChoice);

  //reset the game when clicked on buttons
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
}

function computersChoice() {
  console.log("computersChoice");
  //set Computer's options to be random
  const random = Math.floor(Math.random() * 3);

  //Computer has these answers to choose from
  const answers = ["rock", "scissors", "paper"];

  //Computer will choose its answers randomly
  computerChoose = answers[random];

  theResult();
}

function theResult() {
  console.log("theResult");

  //make decisions in browser's console
  console.log(`Player choose: ${playerChoose}`);
  console.log(`Computer choose: ${computerChoose}`);

  if (computerChoose == playerChoose) {
    tie();
  } else if (playerChoose == "rock" && computerChoose == "scissors") {
    win();
  } else if (playerChoose == "rock" && computerChoose == "paper") {
    lose();
  } else if (playerChoose == "scissors" && computerChoose == "rock") {
    lose();
  } else if (playerChoose == "scissors" && computerChoose == "paper") {
    win();
  } else if (playerChoose == "paper" && computerChoose == "scissors") {
    lose();
  } else if (playerChoose == "paper" && computerChoose == "rock") {
    win();
  }

  //Rækkefølge er vigtig. Show the result png
  console.log("show hands");
  document.querySelector("#player2").classList.add(computerChoose);
  document.querySelector("#player1").classList.add(playerChoose);
}

function tie() {
  console.log("tie");
  //Show the "It's a draw"
  document.querySelector("#draw").classList.remove("hidden");
  document.querySelector("#buttons").classList.add("disabled");
  resetGame();
}
function win() {
  console.log("you win");
  //Show the "You win"
  document.querySelector("#win").classList.remove("hidden");
  document.querySelector("#buttons").classList.add("disabled");
  resetGame();
}
function lose() {
  console.log("you lose");
  //Show the "You lose"
  document.querySelector("#lose").classList.remove("hidden");
  document.querySelector("#buttons").classList.add("disabled");
  resetGame();
}
function resetGame() {
  //2 hands come back to original position: rock
  document.querySelector("#player1").classList = "player";
  document.querySelector("#player2").classList = "player";
  document.querySelector("#buttons").classList.remove("disabled");
}
