// Select every li
let evens = document.querySelectorAll('li:nth-child(even)');
let odds = document.querySelectorAll('li:nth-child(odd)');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

let toggleEvens = setInterval(evenTimer, 1500);
let toggleOdds = setInterval(oddTimer, 750);


function evenTimer(){
    console.log(toggleEvens);

    for(even of evens){
        even.classList.toggle('lights-on');
    };
}
function oddTimer(){
    for(odd of odds){
        setTimeout(odd.classList.toggle('lights-on'), 750);
    }
};

start.addEventListener('click', e =>{
    setInterval(evenTimer, 1500);
    setInterval(oddTimer, 750);
} );
stop.addEventListener('click', e => {
    clearInterval(toggleEvens);
    clearInterval(toggleOdds);
});





// function oddTimer(){
//     for(even of evens){
//         even.style.boxShadow = "inherit";
//     }
//     for(odd of odds){
//         odd.style.boxShadow = "none";
//     }
// }