// DOM Elements
const calendar = document.getElementsByClassName('calendar');
let month = document.querySelector('.month');
const day = document.querySelectorAll('.day');
let date = document.querySelectorAll('.date');

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
  month.innerText = months[getMonth - 1] + ' ' + getYear;
};

currentMonth();

// Date
