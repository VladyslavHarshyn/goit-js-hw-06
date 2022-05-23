function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const button = document.querySelector('.change-color');
const firstClr = document.querySelector('body');
const secondClr = document.querySelector('.color');

const randomColor = button.addEventListener('click', () => {
  firstClr.style.backgroundColor = `${getRandomHexColor()}`;
  secondClr.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});