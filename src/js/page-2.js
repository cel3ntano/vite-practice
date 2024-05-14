const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// TODO Task-1
console.log('=============Task-1===================');

// Отримати масив імен всіх користувачів (поле name).
const getUserNames = users => {
  // твій код
};

console.log(getUserNames(users));
//
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez',
//  'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// TODO Task-2
console.log('=============Task-2===================');

// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
const getUsersWithEyeColor = (users, color) => {
  // твій код
};

console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// TODO Task-3
console.log('=============Task-3===================');

// Отримати масив імен користувачів за статтю (поле gender).
const getUsersWithGender = (users, gender) => {
  // твій код
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// TODO Task-4
console.log('=============Task-4===================');

// Отримати масив тільки неактивних користувачів (поле isActive).
const getInactiveUsers = users => {
  // твій код
};

console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
// TODO Task-5
console.log('=============Task-5===================');

// Отримати користувача (не масив) по email (поле email, він унікальний).
const getUserWithEmail = (users, email) => {
  // твій код
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}
// TODO Task-6
console.log('=============Task-6===================');

// Отримати масив користувачів, які потрапляють у вікову
// категорію від min до max років (поле age).
const getUsersWithAge = (users, min, max) => {
  // твій код
};

console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
// TODO Task-7
console.log('=============Task-7===================');

// Отримати загальну суму балансу (поле balance) всіх користувачів.
const calculateTotalBalance = users => {
  // твій код
};

console.log(calculateTotalBalance(users)); // 20916
// TODO Task-8
console.log('=============Task-8===================');

// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.
const getUsersWithFriend = (users, friendName) => {
  // твій код
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
// TODO Task-9
console.log('=============Task-9===================');

// Масив імен (поле name) людей, відсортованих в залежності
// від кількості їх друзів (поле friends)
const getNamesSortedByFriendsCount = users => {
  // твій код
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
// TODO Task-10
console.log('=============Task-10===================');

// Отримати масив всіх умінь всіх користувачів
// (поле skills), при цьому не має бути повторюваних
// умінь і вони повинні бути відсортовані в алфавітному порядку.
const getSortedUniqueSkills = users => {
  // твій код
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

//TODO Task-11
console.log('=============Task-11===================');

// Даний масив із числами. Залишіть у ньому
// лише позитивні числа.
// Потім витягніть квадратний корінь і цих чисел.
const array = [121, -2, 225, 0, 4, -5, 36, -11];
//
//TODO Task-12
console.log('=============Task-12===================');

// Знайти унікальні елементи за допомогою reduce
const numbers = [1, 9, 0, 1, 5, 9, 1, 6];
//
//TODO Task-13
console.log('=============Task-13===================');

// Напишіть функцію each(array, callback), яка
// першим параметром приймає масив, а другим - функцію,
// Яка застосовується до кожного елементу масиву.
// Функція each повинна повернути новий масив, елементами
// якого будуть результати виклику callback
// callback функції повинна множити елементи на 2
