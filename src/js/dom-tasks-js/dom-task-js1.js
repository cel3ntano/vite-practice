//TODO: № 1 ==============================================
// Натискання на кнопку "SHOW ME"
//має виводити значення з поля
//введення (дивіться на елементи в
//html-розмітці)

const button = document.querySelector('#alertButton');
const input = document.querySelector('#alertInput');

button.addEventListener('click', () => {
  console.log(input.value);
});
