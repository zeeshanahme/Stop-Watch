let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateStopwatch, 1000);
    document.getElementById('startStopBtn').textContent = 'Stop';
  } else {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('startStopBtn').textContent = 'Start';
  }
}

function updateStopwatch() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  displayTime();
}

function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime();
  document.getElementById('startStopBtn').textContent = 'Start';
}

function displayTime() {
  document.querySelector('.seconds').textContent = pad(seconds, 2);
  document.querySelector('.minutes').textContent = pad(minutes, 2);
  document.querySelector('.hours').textContent = pad(hours, 2);
}

function pad(value, length) {
  return (value.toString().length < length) ? pad('0' + value, length) : value;
}

document.getElementById('startStopBtn').addEventListener('click', startStopwatch);
document.getElementById('resetBtn').addEventListener('click', resetStopwatch);

displayTime();
