// - парс числа с Number.parseInt() и Number.parseFloat()

// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log(elementWidth);



// let elementWidth = '225.23px';
// elementWidth = Number.parseFloat(elementWidth);
// console.log(elementWidth);



// - метод число.toFixed(digits)
// - матрешки на примере console.log(Number(число.toFixed(digits)))

// let salary = 1300.3521;
// salary = Number(salary.toFixed(2));
// // salary = Number(salary);

// console.log(salary);

// console.log(Number(salary.toFixed(2)));



// - приведение/преобразование к числу

// let quantity = '30';
// let value = 'Эту строку привести к числу невозможно'

// console.log(Number(quantity));
// console.log(Number(value));



// - объек Math

// const base = 2;
// const power = 4;

// const result = Math.pow(base, power);


// console.log(result)



// - написать скрипт в котором пользователь вводит число и степень
// - потом возводит число в эту степень и выводит результат в консоль

// 1. попросить ввести число и сохранить в переменную

// let base = prompt('Давай число');
// base = Number(base);
// console.log(base)


// 2. попросить ввести степень и сохранить в переменную

// let power = prompt('Давай степень');
// power = Number(power);
// console.log(power);


// 3.возвести введенные данные в степень и вывести результат в консоль

// const result = base ** power;
// console.log(result);


// - генерим псевдослучайные числа
// - Math.random()
// - Math.round()

const max = 70;
const min = 10;

const result = Math.round(Math.random() * (max - min) + min);
console.log(result);