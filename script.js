let d = new Date();

let date = d.getDate();
let day = d.getDay();
let month = d.getMonth() + 1;
let year = d.getFullYear();

if(date < 10) date = '0' + date;
if(month < 10) month = '0' + month;

let days = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'];

const dateDiv = document.querySelector('div#date');
dateDiv.textContent = `${days[day]}, ${date} / ${month} / ${year}`; 

function getFullTime() {
    let d = new Date();

    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    if(hour < 10) hour = '0' + hour;
    if(min < 10) min = '0' + min;
    if(sec < 10) sec = '0' + sec;

    return `${hour}:${min}:${sec}`;
}

function setClock() {
    const clockDiv = document.querySelector('div#clock');
    clockDiv.textContent = getFullTime();
    setTimeout(setClock, 1000);
}

setClock();

