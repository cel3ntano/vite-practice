//TODO: № 5 ==============================================
// Кнопка "Зменшити" робить квадрат менше на 10 пікселів,
// кнопка "Збільшити" - більше на 10 пікселів.

const box = document.querySelector('#box');
const btnDecrease = document.querySelector('#decrease');
const btnIncrease = document.querySelector('#increase');

btnDecrease.addEventListener('click', changeSize);
btnIncrease.addEventListener('click', changeSize);
let size = 10;

function changeSize(event) {
  const btn = event.target.id;
  const width = box.offsetWidth;
  const height = box.offsetHeight;
  if (btn === 'increase') {
    box.style.width = width + size + 'px';
    box.style.height = height + size + 'px';
  } else {
    box.style.width = width - size + 'px';
    box.style.height = height - size + 'px';
  }
}
