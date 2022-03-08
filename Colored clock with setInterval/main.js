const p = document.getElementsByTagName('p')[0];

getTime();

function getTime() {
    const date = new Date();
    p.firstChild.data = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

let id = setInterval(getTime, 1000);
const buttons = document.getElementsByTagName('button');

function clearTimer() {
    clearTimeout(id);
}

function startTimer() {
    clearTimer();
    getTime();
    id = setInterval(getTime, 1000);
}

buttons[0].addEventListener('click', startTimer);
buttons[1].addEventListener('click', clearTimer);