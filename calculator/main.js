const numbers = document.querySelectorAll('.button');
let screenVal = document.querySelector('.calculator-screen');
let array = [];

// Get value when clicked;
document.addEventListener('click', (e) => {

  // Store the recent number that was clicked in an array.
  let lastClicked = e.target.dataset.val;

  // This will return an integer
  let currentValue = addLastToArray(lastClicked);

  // Show the value on the screen
  screenVal.textContent = currentValue;

  // Get the calculator function when clicked
  let calcFunc = e.target.dataset.func;
  // console.log(calcFunc);
  let currentFunc = doOperator(currentValue, calcFunc);

});

// function for numbers: add to array
function addLastToArray(newNumber){
  array.push(newNumber);
  return array.join('');
}

// When clicking operator add to the array
function doOperator(number, operator){

  // If there is no operator, return
  if(!operator){
    return;
  }
  let numberOperator =  number + operator;

  // Show operator on the screen
  screenVal.textContent = operator;

  // Store old number
  console.log(numberOperator);
  return numberOperator;

}