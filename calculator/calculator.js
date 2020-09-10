// DOM
const display = document.querySelector('.display');
const calculator = document.querySelector('.calculator');
const btn = document.querySelectorAll('.btn');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

btn.forEach((button) => {
  button.addEventListener('click', () => {
    const btnValue = button.getAttribute('value');
    display.textContent += btnValue;
    console.log(btnValue);
  });
});

equals.addEventListener('click', () => {
  display.textContent = eval(display.textContent);
});

clear.addEventListener('click', () => {
  display.textContent = '';
});
