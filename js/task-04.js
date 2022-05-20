'use strict';

const buttonMin = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
let valueChange = 0;

// minus
const increment = () => {
    valueChange += 1;
    value.textContent = valueChange;
};

buttonPlus.addEventListener('click', increment);

//plus
const decrement = () => {
    valueChange -= 1;
    value.textContent = valueChange;
};

buttonMin.addEventListener('click', decrement);

