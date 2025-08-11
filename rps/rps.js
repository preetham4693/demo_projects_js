
let score = JSON.parse(localStorage.getItem('score'));
if (score === null) {
  score = {
    wins: 0,
    lose: 0,
    ties: 0,
  };
}
//adding (addeventlisteners) instead of onclick 
document.querySelector('.js-rock')
.addEventListener('click',()=>{
  playGame('rock')
})
document.querySelector('.js-paper')
.addEventListener('click',()=>{
  playGame('paper')
})
document.querySelector('.js-scissors')
.addEventListener('click',()=>{
  playGame('scissors')
})
//adding keydown to body
document.body.addEventListener('keydown',(event)=>{
  if(event.key==='r'){
    playGame('rock')
  }
  else if(event.key==='p'){
    playGame('paper')
  }
  else if(event.key==='s'){
    playGame('scissors')
  }
})

let isAutoPlaying = false;
let intervalId;

// Update score display after DOM loaded       Use window.onload to ensure your JavaScript code runs only after the whole page is loaded
window.onload = function () {
  updateScore();
};

function autoplay() {
  const btn = document.getElementById('autoplay-btn');
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);

    isAutoPlaying = true;
    btn.textContent = 'Stop Auto';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    btn.textContent = 'Auto play';
  }
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose!';
    } else if (computerMove === 'paper') {
      result = 'You won';
    } else {
      result = 'Tie';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You won';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else {
      result = 'You lose!';
    }
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lose!';
    } else {
      result = 'You won';
    }
  }

  if (result === 'You won') {
    score.wins += 1;
  } else if (result === 'You lose!') {
    score.lose += 1;
  } else if (result === 'Tie') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScore();

  document.querySelector('.js-moves').innerHTML = `You
    <img src="rps-images/${playerMove}-emoji.png" class="move-img" alt="${playerMove}" />
    <img src="rps-images/${computerMove}-emoji.png" class="move-img" alt="${computerMove}" />
    Computer`;

  document.querySelector('.js-results').innerHTML = result;
}

function updateScore() {
  const scoreElem = document.querySelector('.js-score');
  if (scoreElem) {
    scoreElem.innerHTML = `Wins: ${score.wins}, Lose: ${score.lose}, Ties: ${score.ties}`;
  }
}

function pickComputerMove() {
  const randomNum = Math.random();
  let computerMove = '';

  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
}
