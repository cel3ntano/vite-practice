//TODO: № 2 ==============================================
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

const button = document.getElementById('swapButton');
const leftInput = document.getElementById('leftSwapInput');
const rightInput = document.getElementById('rightSwapInput');

button.addEventListener('click', () => {
  const rightValue = rightInput.value;
  rightInput.value = leftInput.value;
  leftInput.value = rightValue;
});
