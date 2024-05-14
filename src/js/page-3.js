//TODO: № 1 ==============================================
// Натискання на кнопку "SHOW ME"
//має виводити значення з поля
//введення (дивіться на елементи в
//html-розмітці)

const buttonTaskOne = document.querySelector('#alertButton');
const inputTaskOne = document.querySelector('#alertInput');

buttonTaskOne.addEventListener('click', () => {
  console.log(inputTaskOne.value);
});

//TODO: № 2 ==============================================
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

const buttonTaskTwo = document.getElementById('swapButton');
const leftInput = document.getElementById('leftSwapInput');
const rightInput = document.getElementById('rightSwapInput');

buttonTaskTwo.addEventListener('click', () => {
  const rightValue = rightInput.value;
  rightInput.value = leftInput.value;
  leftInput.value = rightValue;
});

//TODO: № 3 ==============================================
// При кліку на кнопку текст параграфів змінюється на їх порядковий номер

const btnTaskThree = document.querySelector('.task-three-button');
const peshki = document.querySelectorAll('.peshki');

btnTaskThree.addEventListener('click', onClickHandler);
function onClickHandler() {
  peshki.forEach((p, index) => {
    p.textContent = index + 1;
  });
}

//TODO: № 4 ==============================================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

const btn = document.querySelector('#passwordButton');
const input = document.querySelector('#passwordInput');

btn.addEventListener('click', handleClick);

function handleClick() {
  const value = input.getAttribute('type');
  console.log(value);
  const toggleTypeInput = value === 'password' ? 'text' : 'password';
  input.setAttribute('type', toggleTypeInput);

  const textBtn = btn.textContent;
  const toggleTextBtn = textBtn === 'Приховати' ? 'Розкрити' : 'Приховати';
  btn.textContent = toggleTextBtn;
}

//TODO: № 5 ==============================================
// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.
//TODO: № 6 ==============================================
// Додайде слухач кліку і визначте, коли клік відбувається
// всередині елемента з id "place" і коли клік припадає поза зоною елемента
//

//TODO: № 7 ==============================================
// Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази

//TODO: № 8 ==============================================
// Вводимо число у input з id="test" - число
// При кліку на кнопку, у інпут з id="result" повинен буди квадрат цього числа
// Зробити перевірку на число, реалізувати за допомогою alert з текстом

//TODO: № 9 ==============================================
// Напишіть інтерфейс, щоб створити список
// Для кожного пункту:
// Запитуйте вміст у користувача за допомогою promt
// створювати пункт та додавати його до списку
// процес припиняється коли користувач натискає ESC
// усі елементи мають створюватись динамічно
