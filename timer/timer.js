// DOM
const timer = document.querySelector('.timer');
const startTimer = document.querySelector('.start');
const stopTimer = document.querySelector('.stop');

// START
startTimer.addEventListener('click', (e) => {
  startTimer.innerText = 'Pause';
  stopTimer.style.display = 'inline';
  toggleTimer();
});

// STOP
stopTimer.addEventListener('click', (e) => {
  startTimer.innerText = 'Start';
  toggleTimer(true);
});

const btn1 = Math.floor(userInput.value * 60);

// Timer Attributes
let setTime = btn1;
let timeLeft = btn1;
let activeTimer = false;

// Toggle Timer
const toggleTimer = (reset) => {
  if (reset) {
    stopClock();
  } else {
    if (activeTimer === true) {
      // pause
      clearInterval(countdownTimer);
      startTimer.innerText = 'Play';
      activeTimer = false;
    } else {
      // start
      countdownTimer = setInterval(() => {
        timeLeft--;
        displayTime();
      }, 1000);
      activeTimer = true;
    }
  }
};

const displayTime = () => {
  const secondsLeft = timeLeft;
  let result = '';
  const seconds = secondsLeft % 60;
  const minutes = parseInt(secondsLeft / 60) % 60;
  let hours = parseInt(secondsLeft / 3600);
  // add leading zeroes if it's less than 10
  function addZero(time) {
    return time < 10 ? `0${time}` : time;
  }
  if (hours > 0) result += `${hours}:`;
  result += `${addZero(minutes)}:${addZero(seconds)}`;
  timer.innerText = result.toString();
};

const stopClock = () => {
  // 1) reset the timer we set
  clearInterval(countdownTimer);
  // 2) update our variable to know that the timer is stopped
  activeTimer = false;
  // reset the time left in the session to its original state
  timeLeft = setTime;
  // update the timer displayed
  displayTime();
};
