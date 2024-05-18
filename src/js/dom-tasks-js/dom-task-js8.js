import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
//TODO: № 8 ==============================================
// Вводимо число у input з id="test" - число
// При кліку на кнопку, у інпут з id="result" повинен буди квадрат цього числа
// Зробити перевірку на число, реалізувати за допомогою alert з текстом
const input = document.getElementById('test');
const result = document.getElementById('result');
const btn = document.querySelector('.magic-button');

btn.addEventListener('click', onClick);
function onClick() {
  if (isNaN(input.value)) {
    iziToast.show({
      message: '❌ Please, enter a number',
      color: 'red',
      position: 'topRight',
      progressBar: false,
      timeout: 2000,
      close: false,
    });
  } else {
    result.value = input.value ** 2;
  }
}
