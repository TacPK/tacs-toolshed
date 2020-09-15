// DOM Elements
let month = document.querySelector('.month');
let date = document.querySelector('.date');

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
const currentDate = () => {
  date.innerText = getDate;
};

currentDate();

// Set First Day - if Statement
// let first = new Date(newDate.getFullYear(), newDate.getMonth(), 1);
// let last = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0);
// let firstDay = first.getDay();
// let lastDate = last.getDate();

// console.log(first);
// console.log(last);

// const mainDiv = document.querySelector('.grid');
// let childDiv = mainDiv.getElementsByTagName('div');

// // const findFirstDay = () => {
//   if (firstDay == 0) {
//     childDiv[7].innerText = '1';
//   } else if (firstDay == 1) {
//     childDiv[8].innerText = '1';
//   } else if (firstDay == 2) {
//     childDiv[9].innerText = '1';
//   } else if (firstDay == 3) {
//     childDiv[10].innerText = '1';
//   } else if (firstDay == 4) {
//     childDiv[11].innerText = '1';
//   } else if (firstDay == 5) {
//     childDiv[12].innerText = '1';
//   } else {
//     childDiv[13].innerText = '1';
//   }
// };

// findFirstDay();

// // if statement, if last.getDate()=30, do nothing, else last.getDate()=31, i++
// // else if last.getMonth()=1, i - 2;
