const categories = document.querySelector("ul#categories");

const items = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.children.length}`);

    items.forEach(item => {
  const title = item.firstElementChild;
  const numberOfElements = item.lastElementChild;
  console.log(`Category: ${title.textContent}`);
  console.log(`Number of elements: ${numberOfElements.children.length}`);
});