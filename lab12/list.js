const fruits = ["Strawberry", "Blueberry", "Kiwi", "Watermelon", "Peach", "Cherry", "Mango"];
const list = document.getElementById('fruit-list');

fruits.forEach(fruit => {
  const li = document.createElement('li');
  li.textContent = fruit;
  list.appendChild(li);
});