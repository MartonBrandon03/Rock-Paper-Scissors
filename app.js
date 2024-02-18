const start = document.querySelector('.start');
const main = document.querySelector('main');
const container = document.querySelector('.container');
const counter = document.querySelector('.counter');
const dialog = document.querySelector('.dialog');
const match1 = document.querySelector('.match1');
const match2 = document.querySelector('.match2');
const playAgain = document.querySelector('.play-again');
let humanCounter = 0;
let computerCounter = 0;
start.addEventListener('click',e=>{
  start.classList.toggle('hidden',true);
  main.classList.toggle('hidden',false);
});
function getComputerChoice(){
  let rng = Math.floor(Math.random()*3);
  switch (rng) {
    case 0
    :return "rock";
    case 1
    :return "paper";
    case 2
    :return "scissors";
  }
}
function updateCounter(){
  if(humanCounter === 5){
    dialog.innerText = 'You win!';
    container.classList.toggle('hidden',true);
    playAgain.classList.toggle('hidden',false);
  }else if(computerCounter === 5){
    dialog.innerText = 'You lose!';
    container.classList.toggle('hidden',true);
    playAgain.classList.toggle('hidden',false);
  }
  counter.innerText = `Human:${humanCounter} Computer:${computerCounter}`;
}
playAgain.addEventListener('click',()=>{
  humanCounter = 0;
  computerCounter = 0;
  container.classList.toggle('hidden',false);
  playAgain.classList.toggle('hidden',true);
  dialog.innerText = 'Choose';
  match1.innerText = '';
  match2.innerText = '';
  updateCounter();
});
container.addEventListener('click',e=>{
  switch(e.target.id){
    case 'rock'
    :playRound('rock',getComputerChoice());
    updateCounter()
    break;
    case 'paper'
    :playRound('paper',getComputerChoice());
    updateCounter();
    break;
    case 'scissors'
    :playRound('scissors',getComputerChoice());
    updateCounter();
    break;
  }
});

function playRound(playerSelection, computerSelection) {
  if(playerSelection === 'rock'){
    match1.innerText = 'Rock';
    switch(computerSelection){
      case "rock"
      :match2.innerText = 'Rock';
      break;
      case "paper"
      :match2.innerText = 'Paper';
      computerCounter++;
      break
      case "scissors"
      :match2.innerText = 'Scissors';
      humanCounter++;
      break;
    }
  }else if(playerSelection === 'paper'){
    match1.innerText = 'Paper';
    switch(computerSelection){
      case "rock"
      :match2.innerText = 'Rock';
      humanCounter++;
      break;
      case "paper"
      :match2.innerText = 'Paper';
      break;
      case "scissors"
      :match2.innerText = 'Scissors';
      computerCounter++;
    }
  }else{
    match1.innerText = 'Scissors';
    switch(computerSelection){
      case "rock"
      :match2.innerText = 'Rock';
      computerCounter++;
      break;
      case "paper"
      :match2.innerText = 'Paper'
      humanCounter++;
      break;
      case "scissors"
      :match2.innerText = 'Scissors';
      break;
    }
  }
}
function game(){
  let hc = 0
  let cc = 0
  for(let i =0;hc<5||cc<5;i++){
    switch(playRound(prompt("choose"),getComputerChoice())){
      case "tie"
      :console.log("tie")
      break
      case "u lose"
      :++cc
      console.log("u lost")
      break
      case "u win"
      :++hc
      console.log("u won")
      break
    }
    if(cc == 5){
      return "u lost the game"
      } else if(hc == 5) {
      return "u won the game"
    }
  }
}