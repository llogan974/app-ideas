// Target the box
let box = document.querySelector('.colorBox');

// Get values from all three fields
let red = document.getElementById('red').value;
let blue = document.getElementById('blue').value;
let green = document.getElementById('green').value;


// Listen for all clicks
document.addEventListener('click', (e) => {

// When user clicks "start", get all values
if(e.target.id === "colorStart"){

    // Append a comma to each value
    box.style = `color: rgb(${red}, ${blue}, ${green})`;
    }



});

// User clicks start, get value of three fields

