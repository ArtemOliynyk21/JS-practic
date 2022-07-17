//  - задача 1 (2тема)

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

//  - задача 2 (2тема)

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line

//     if (password === ADMIN_PASSWORD) {
//         return 'Welcome!';
//     }
//  return 'Access denied, wrong password!';

//   // Change code above this line
// }

// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));

//  - задача 3 (2тема)

// function checkStorage(available, ordered) {
//   // Change code below this line
// //   let message;

//   if (ordered === 0) {
//       return 'Your order is empty!';

//   } if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//     }
//     return 'The order is accepted, our manager will contact you';

// //   return message;
//   // Change code above this line
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

//  - задача 4 (2тема)

// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);

//  - задача 5 (2тема)

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// const firstElement = fruits[0];
// console.log(firstElement);
// const secondElement = fruits[1];
// console.log(secondElement);
// const lastElement = fruits[3];
// console.log(lastElement);

//  - задача 6 (2тема)

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// console.log(fruits);

//  - задача 7 (2тема)

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

//  - задача 8 (2тема)

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex);
// console.log(lastElement);

//  - задача 9 (2тема)

// function getExtremeElements(array) {
//   // Change code below this line

//     return [array[0], array[array.length - 1]];
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

//  - задача 10 (2тема)

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//     words = message.split(delimeter);

//   // Change code above this line
//   return words;
// }

// console.log(splitMessage('Mango hurries to the train', ' '));
// console.log(splitMessage('Mango', ''));

//  - задача 11 (2тема)

// function calculateEngravingPrice(message, pricePerWord) {
//   //   Change code below this line
//   let wordCount = message.split(' ').length * pricePerWord;
//   console.log(wordCount);
//   return wordCount;
//   // Change code above this line
// }

// calculateEngravingPrice('JavaScript is in my blood', 10);
// calculateEngravingPrice('JavaScript is in my blood', 20);
// calculateEngravingPrice('Web-development is creative work', 40);
// calculateEngravingPrice('Web-development is creative work', 20);

//  - задача 12 (2тема)

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimeter);

//   console.log(string);
//   // Change code above this line
//   return string;
// }

// makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ');
// makeStringFromArray(['M', 'a', 'n', 'g', 'o'], '');
// makeStringFromArray(['top', 'picks', 'for', 'you'], '_');

//  - задача 13 (2тема)

// function slugify(title) {
//   // Change code below this line
//   let slugify = title.toLowerCase().split(' ').join('-');
//     console.log(slugify);
//     return slugify;
//   // Change code above this line
// }

// slugify('Arrays for begginers');
// slugify('Ten secrets of JavaScript');
// slugify('How to become a JUNIOR developer in TWO WEEKS');

//  - задача 14 (2тема)

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, 4);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

//  - задача 15 (2тема)

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

//  - задача 16 (2тема)

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let concatArray = firstArray.concat(secondArray);
//   if (concatArray.length > maxLength) {
//     return concatArray.slice(0, maxLength);
//   } else {
//     concatArray;
//   }
//   return concatArray;

//   // Change code above this line
// }
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));

//  - задача 17 (2тема)

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

//  - задача 18 (2тема)

// function calculateTotal(number) {
//   // Change code below this line
//     let total = 0;
//     for (let i = 1; i <= number; i += 1){
//         total += i
//         }

//     return total;
//   // Change code above this line
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());

//  - задача 19 (2тема)

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = (fruits[i]); // Change this line
//   console.log(fruit);
// }

//  - задача 20 (2тема)

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//     for (let i = 0; i < order.length; i += 1){
//         total += order[i];
//         // console.log(total);
//     }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//  - задача 21 (2тема)
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   // Change code below this line
//   let words = string.split(' ');
//   // console.log(words);
//   let longWord = words[0];
//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i].length > longWord.length) {
//       longWord = words[i];
//     }
//   }
//   // console.log(longWord);
//   // Change code above this line
//   return longWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

//  - задача 22 (2тема)

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//     for (let i = min; i <= max; i += 1){
//         numbers.push(i);
//     };
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

//  - задача 23 (2тема)

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filter = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filter.push(numbers[i]);
//     }
//   }
//   return filter;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//  - задача 24 (2тема)

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit('plum'));
// console.log(checkFruit('mandarin'));
// console.log(checkFruit('pear'));
// console.log(checkFruit('Pear'));
// console.log(checkFruit('apple'));

//  - задача 25 (2тема)

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const sameArray = [];
//   for (let i = 0; i <= array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       sameArray.push(array1[i]);
//     }
//   }
//   return sameArray;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

//  - задача 26 (2тема)

// function calculateTotalPrice(order) {
//   let total = 0;
//   let item = [];
//   // Change code below this line
//   for (const item of order) {
//     total += item;
//   }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

//  - задача 27 (2тема)

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//  - задача 28 (2тема)

// // Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

//  - задача 29 (2тема)

// function getEvenNumbers(start, end) {
//   // Change code below this line
//     const evenNumber = [];
//     for (let i = start; i <= end; i += 1){
//         if ( i % 2 === 0) {
//             evenNumber.push(i);
//       }
//     }
//     return evenNumber;
//   // Change code above this line
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

//  - задача 30 (2тема)

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//       number = i;
//       break;
//   }
// }
// console.log(number);

//  - задача 31 (2тема)

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }
//   // Change code above this line
// }

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));

//  - задача 32 (2тема)

// function includes(array, value) {
//   // Change code below this line
//     let x = false;
//   for (let i = 0; i < array.length; i += 1) {
//     let concat = array[i];
//       if (concat === value) {
//           x = true;
//     }
//   }
//   return x;
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'));
// console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'));
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum'));
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'));
