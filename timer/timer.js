// DOM
const timer = document.querySelector('.timer');
const startTimer = document.querySelector('.start');
const pauseTimer = document.querySelector('.pause');
const stopTimer = document.querySelector('.stop');
const timerValue = document.querySelector('.timerValue');
const alarm = new Audio('alarm.wav');

// Minutes to Seconds
function adjustInput() {
  let userInput = timerValue.value;
  let newInput = userInput * 60 + 1;
  timerValue.value = newInput;
}

// START
startTimer.addEventListener('click', () => {
  startTimer.style.display = 'none';
  timerValue.style.display = 'none';
  pauseTimer.style.display = 'inline';
  stopTimer.style.display = 'inline';
  adjustInput();
  toggleTimer();
});

// PAUSE
pauseTimer.addEventListener('click', () => {
  pauseTimer.innerText = 'Pause';
  toggleTimer();
});

// STOP
stopTimer.addEventListener('click', () => {
  alarm.pause();
  alarm.currentTime = 0;
  startTimer.innerText = 'Start';
  timerValue.style.display = 'inline';
  pauseTimer.style.display = 'none';
  stopTimer.style.display = 'none';
  toggleTimer(true);
});

// Timer Attributes
let activeTimer = false;

// Toggle Timer
const toggleTimer = (reset) => {
  if (reset) {
    stopClock();
  } else {
    if (activeTimer === true) {
      // Pause
      clearInterval(countdownTimer);
      pauseTimer.innerText = 'Play';
      activeTimer = false;
    } else {
      // Start
      countdownTimer = setInterval(() => {
        timerValue.value--;
        displayTime();
      }, 1000);
      activeTimer = true;
    }
  }
};

const displayTime = () => {
  const secondsLeft = timerValue.value;
  let result = '';
  const seconds = secondsLeft % 60;
  const minutes = parseInt(secondsLeft / 60) % 60;
  let hours = parseInt(secondsLeft / 3600);

  function addZero(time) {
    return time < 10 ? `0${time}` : time;
  }

  if (hours > 0) result += `${hours}:`;
  result += `${addZero(minutes)}:${addZero(seconds)}`;

  timer.innerText = result.toString();

  // When Timer Runs Out
  if (seconds <= 0 && minutes <= 0 && hours <= 0) {
    clearInterval(countdownTimer);
    alarm.play();
    timer.innerText = 'DONE';
    pauseTimer.style.display = 'none';
    timerValue.value = '';
  }
};

// Stop Button
const stopClock = () => {
  clearInterval(countdownTimer);
  activeTimer = false;
  timerValue.value = '';
  timer.innerText = '';
  startTimer.style.display = 'inline';
};
