let calculation = '';

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  document.querySelector('.js-display').innerText = calculation;
}

function calculate() {
  calculation = eval(calculation);
  console.log(calculation);
  document.querySelector('.js-display').innerText = calculation;
}

function clearCalc() {
  calculation = '';
  console.log('Cleared.');
  document.querySelector('.js-display').innerText = '';
}