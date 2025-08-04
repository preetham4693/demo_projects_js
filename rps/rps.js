let score = JSON.parse(localStorage.getItem('score'));
if (score === null) {
  score = {
    wins: 0,
    lose: 0,
    ties: 0
  };
} 

updateScore();


function playGame(playerMove){
var computerMove = pickComputerMove();

var result = '';

if (playerMove==='scissors'){
    if (computerMove === 'rock') {
    result = 'You lose!';
  } else if (computerMove === 'paper') {
    result = 'You won';
  } else if (computerMove === 'scissors') {
    result = 'Tie';
  }
}else if(playerMove==='paper'){
    if (computerMove === 'rock') {
    result = 'You won';
  } else if (computerMove === 'paper') {
    result = 'Tie';
  } else if (computerMove === 'scissors') {
    result = 'You lose!';
  }
}else if (playerMove==='rock'){
    if (computerMove === 'rock') {
    result = 'Tie';
  } else if (computerMove === 'paper') {
    result = 'You lose!';
  } else if (computerMove === 'scissors') {
    result = 'You won';
  }
}

if (result==='You won'){
    score.wins+=1;
  }else if (result==='You lose!'){
    score.lose+=1;
  }else if(result==='Tie'){
    score.ties+=1;
 }
localStorage.setItem('score',JSON.stringify(score));

updateScore();

document.querySelector('.js-moves')
    .innerHTML=`You 
    <img src="rps-images/${playerMove}-emoji.png" class="move-img">
    <img src="rps-images/${computerMove}-emoji.png" class="move-img">
    Computer`;


document.querySelector('.js-results')
    .innerHTML= result;

};



function updateScore(){
  document.querySelector('.js-score')
    .innerHTML = ` wins: ${score.wins},lose:${score.lose},tie:${score.ties}`
}

function pickComputerMove(){
  const randomNum = Math.random();
  let computerMove = '';

  if (randomNum >= 0 && randomNum < 1/3) {
    computerMove = 'rock';
  } else if (randomNum >= 1/3 && randomNum < 2/3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
}