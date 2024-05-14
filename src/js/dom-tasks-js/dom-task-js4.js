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
