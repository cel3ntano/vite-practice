//TODO: № 5
console.log('=============Task-5===================');
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.

const array = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];

function logItems(array) {
  for (let i = 0; i <= array.length - 1; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}
logItems(array);
//
//TODO: № 6
console.log('=============Task-6===================');
// Напиши скрипт, який для об'єкта user,
// Послідовно:
// 1. додати поле mood зі значенням 'happy'
// 2. замінити hobby на 'skydiving'
// 3. замінити значення premium на false
// 4. виводити зміст об'єкта user у форматі
// ключ:значення використовуючи Object.keys() і for...of
//
const user = {
  name: 'John',
  age: 20,
  hobby: 'tenis',
  premium: true,
};

const userUpdate = function (user) {
  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;
  const properties = Object.keys(user);
  for (const property of properties) {
    console.log(property, user[property]);
  }
  return user;
};

console.log(userUpdate(user));
//
//TODO: № 7
console.log('=============Task-7===================');
// В нас є об'єкт, в якому зберігаються зарплати
// нашої команди.
// Напишіть код для суми всіх зарплат і
// Збережіть його результат в змінну sum.
// Якщо об'єкт salaries пустий, то результат має бути 0
//
const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};

const totalSalary = function (salaries) {
  let sum = 0;
  const salaryValues = Object.values(salaries);
  for (const salary of salaryValues) {
    sum += salary;
  }
  return sum;
};

console.log(totalSalary(salaries));
//
//TODO: № 10
console.log('=============Task-10===================');
// Напиши функцію яка приймає массив чисел і повертає новий массив,
// унікальних чисел, які не повторюються
//
const numbers = [1, 1, 1, 2, 3, 4, 7, 7, 6, 6, 5, 4, 23, 22, 22, 111, 1, 5];
const makeNewArray = function (numbers) {
  const newArray = [];
  for (const number of numbers) {
    if (!newArray.includes(number)) {
      newArray.push(number);
    }
  }
  return newArray;
};
console.log(makeNewArray(numbers));

function uniqueArray(array) {
  const uniq = [];
  for (const number of array) {
    uniq[number] = number;
  }
  return Object.values(uniq);
}
console.log(uniqueArray(numbers));
