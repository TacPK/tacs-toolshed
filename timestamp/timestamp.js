// DOM Elements
let month = document.querySelector('.month');
let day = document.querySelector('.day');
let date = document.querySelector('.date');
let time = document.querySelector('.time');

// Month
const newDate = new Date();
let getMonth = newDate.getMonth();
let getYear = newDate.getFullYear();
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const currentMonth = () => {
  month.innerText = months[getMonth] + ' ' + getYear;
};

currentMonth();

// Date
const getDate = newDate.getDate();
const getDay = newDate.getDay();
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const currentDate = () => {
  day.innerHTML = days[getDay];
  date.innerHTML = getDate;
};

currentDate();

// Time
const currentTime = () => {
  const getTime =
    newDate.getHours() +
    ':' +
    newDate.getMinutes() +
    ':' +
    newDate.getSeconds();
  time.innerHTML = getTime;
};

currentTime();
