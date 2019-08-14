
// Get the start button
const start = document.getElementById('colorStart');

const stop = document.getElementById('colorStop');

// Get colors
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const greenChange = document.getElementById('greenChangeInt');
const redChange = document.getElementById('redChangeInt');
const blueChange = document.getElementById('blueChangeInt');


const colorBox = document.getElementsByClassName('colorBox');

// Grab color values in hex, Convert to numbers
let redInt = parseInt(red.value,16);
let blueInt = parseInt(blue.value,16);
let greenInt = parseInt(green.value,16);

// Grab the change intervals, change color by that much for the CSS variable
let newRed = parseInt(redInt + redChange);
let newBlue = parseInt(blueInt + blueChange);
let newGreen = parseInt(greenInt + greenChange);



// Repeat the function every 250ms
function startChanging(){
    setInterval(startColorCycle, 250);
}

function stopChanging(){
    clearInterval(startColorCycle);
    console.log(stop);
}

// Create the function, run on click
function startColorCycle(){
newRed = newRed + redInt;
newBlue = newBlue + blueInt;
newGreen = newGreen + greenInt;

if(newRed > 255){
    newRed = newRed - 255;
};
if(newBlue > 255){
    newBlue = newBlue - 255;
};
if(newBlue > 255){
    newBlue = newBlue - 255;
}


colorBox[0].style.backgroundColor = `rgb(${newRed}, ${newBlue}, ${newGreen})`;

console.log('hello');

}

// When user clicks start, run the function
start.addEventListener('click', startChanging);

stop.addEventListener('click', stopChanging);

