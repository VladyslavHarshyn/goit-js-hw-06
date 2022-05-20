
const contentsOfElement = document.querySelectorAll(".item");

console.log(`Number of categories: ${contentsOfElement.length}`)

console.log(contentsOfElement);

for (const element of contentsOfElement) {
  console.log(`Category: ${element.firstElementChild.textContent} 
  Elements: ${element.querySelectorAll("li").length}`);
}
