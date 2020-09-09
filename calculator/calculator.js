// DOM
const display = document.getElementsByClassName('display');
const calculator = document.getElementsByClassName('calculator');
const btn = document.querySelectorAll('.btn');
const operator = document.getElementsByClassName('op');
const clear = document.getElementsByClassName('clear');

btn.forEach((button) => {
  button.addEventListener('click', () => {
    const btnValue = button.getAttribute('value');
    console.log(btnValue);
  });
});
