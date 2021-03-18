
const secEl = document.getElementById('seconds');
const minEl = document.getElementById('minutes');
const hourEl = document.getElementById('hours');
const daysEl = document.getElementById('days');


let newYear = "1 jan 2022"

const  countdown = ()=>{
    let newYearDate = new Date(newYear);
    let currentDate = new Date()
    let totalSecond = (newYearDate - currentDate) / 1000;
    let days = Math.floor(totalSecond / 3600 / 24);
    let hours = Math.floor(totalSecond / 3600) % 24;
    let minutes = Math.floor(totalSecond / 60) % 60;
    let seconds = Math.floor(totalSecond) % 60;
    // console.log(days, houre, minutes, seconds)
    console.log(seconds, minutes, hours,days)

secEl.innerHTML = seconds;
minEl.innerHTML = minutes;
hourEl.innerHTML = hours;
daysEl.innerHTML = days;


}
countdown();

setInterval(countdown, 1000)
