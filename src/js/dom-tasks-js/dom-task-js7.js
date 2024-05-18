//TODO: № 7 ==============================================
// Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази

const btn = document.getElementById('double');
const list = document.querySelectorAll('.listItem');
btn.addEventListener('click', onClick);
function onClick() {
  list.forEach(item => {
    item.textContent *= 2;
  });
}
