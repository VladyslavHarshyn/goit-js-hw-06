'use strict';

const text = document.querySelector('#text');
const sliderSizer = document.querySelector('#font-size-control');

sliderSizer.addEventListener('input', event => {
    text.style.fontSize = `${event.target.value}px`
});