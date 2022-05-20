const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const sked = document.querySelector("#ingredients");

const element = ingredients.map((el) => {

  const listOfEl = document.createElement("li");
  listOfEl.className = "item";
  listOfEl.textContent = el;
  return listOfEl;

});

sked.append(...element);
console.log(sked)