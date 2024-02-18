const start = document.querySelector('.start');
const main = document.querySelector('main');
start.addEventListener('click',e=>{
  start.classList.toggle('hidden',true);
  main.classList.toggle('hidden',false);
});
function getComputerChoice(){
  let rng = Math.floor(Math.random()*3)
  let choice;
  switch (rng) {
    case 0
    :choice = "rock"
    break;
    case 1
    :choice = "paper"
    break;
    case 2
    :choice = "scissors"
    break;
  }
  return choice
}
function playRound(playerSelection, computerSelection) {
  let rockRegex = /rock/gi
  let paperRegex = /paper/gi
  let scissorsRegex = /scissors/gi
  if(playerSelection.match(rockRegex)){
    switch(computerSelection){
      case "rock"
      :return "tie"
      break
      case "paper"
      :return "u lose"
      break
      case "scissors"
      :return "u win"
      break
    }
  }else if(playerSelection.match(paperRegex)){
    switch(computerSelection){
      case "rock"
      :return "u win"
      break
      case "paper"
      :return "tie"
      break
      case "scissors"
      :return "u lose"
    }
  }else{
    switch(computerSelection){
      case "rock"
      :return "u lose"
      break
      case "paper"
      :return "u win"
      break
      case "scissors"
      :return "tie"
      break
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