//TODO: № 3 ==============================================
// При кліку на кнопку текст параграфів змінюється на їх порядковий номер

const btn = document.querySelector('button');
const peshki = document.querySelectorAll('p:not(.taskTitle)');

btn.addEventListener('click', onClickHandler);
function onClickHandler() {
  peshki.forEach((p, index) => {
    p.textContent = index + 1;
  });
}
