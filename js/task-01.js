const categoriesList = document.querySelector("ul#categories");

const categoriesItems = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItems.length}`);

    categoriesItems.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const numberOfElements = item.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Number of elements: ${numberOfElements}`);
});