
// Get all field entries as an object
let eventName = document.getElementById('eventName');
let eventDate = document.getElementById('eventDate');
let eventTime = document.getElementById('eventTime');


var daysContent = document.getElementById('days');
var hoursContent = document.getElementById('hours');
var minutesContent = document.getElementById('minutes');
var secondsContent = document.getElementById('seconds');

console.log(daysContent);





function showTimer(){

    const then = new Date(eventDate.valueAsNumber);
    const futureDate = then.getTime();

    // Current time in seconds
    const now = new Date();
    const currentTime = now.getTime();

    var res = Math.abs(futureDate - currentTime) / 1000;

    var days = Math.floor(res / 86400);
    var hours = Math.floor(res / 3600 ) % 24;
    var minutes = Math.floor(res / 60 ) % 60;
    var seconds = Math.floor(res % 60);
    secondsContent.textContent = seconds;


    minutesContent.textContent = minutes;
    hoursContent.textContent = hours;
    daysContent.textContent = days;
    setTimeout(showTimer, 1000);
}
showTimer();

