// - длинна строки, свойство length

// const message = 'в этой строке 26 символов.';
// console.log(message.length);


// - конкатенация строк

// const firstName = 'Chelsy';
// const lastName = 'Emerland';
// const fullName = firstName +' '+ lastName;

// console.log(fullName);


// - шаблонные строки(template strings)

// const quantity = 7;
// const orderMSg = `Вы заказываете ${quantity} холодильников`;
// console.log(orderMSg);



// - нормализация с методом toLowerCase

// let brand = 'saMsUng';
// brand = brand.toLowerCase();
// console.log(brand);

// let brand = 'saMsUng';
// console.log(brand.slice(1).toLowerCase());

// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);


// - поиск в строке методом includes
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам';
const string2 = 'Самая большая РАСПРОДАЖА эо недели';
const string3 = 'Рекламная камания #fatlive smatter';

console.log(string1.includes(blacklistedWord1)); 
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));

const normalizeString2 = string2.toLowerCase();
console.log(normalizeString2.includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1)); 
console.log(string3.includes(blacklistedWord2));



