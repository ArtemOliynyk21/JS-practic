// //  - задача 1 (3тема)
// // Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

//  - задача 2 (3тема)

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

//  - задача 3 (3тема)
// ДОСТУП К СВОЙСТВАМ ЧЕРЕЗ ТОЧКУ

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this lin

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

//  - задача 4 (3тема)

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Change code above this line
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

//  - задача 5 (3тема);
// ДОСТУП К СВОЙСТВАМ ЧЕРЕЗ КВАДРАТНЫЕ СКОБКИ
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

//  - задача 6 (3 тема)
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

//  - задача 7 (3 тема)
// ДОБАВЛЕНИЕ СВОЙСТВ
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: 'Jamaica',
//   city: 'Kingston',
// };

//  - задача 8 (3 тема)
// // КОРОТКИЕ СВОЙСТВА
// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };
// console.log(name);
// console.log(price);
// console.log(image);
// console.log(tags);

//  - задача 9 (3 тема)
// ВЫЧИСЛЯЕМЫЕ СВОЙСТВА
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
//   // Change code above this line
// };
// console.log(credentials.email);
// console.log(credentials.password);

//  - задача 10 (3 тема)
// ЦИКЛ FOR...IN
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

//  - задача 11 (3 тема)

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     // Change code below this line
//     if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
// }
//   // Change code above this line
// }

//  - задача 12 (3 тема)
// ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     for (let key in object){
// let nums = object.hasOwnProperty(key);
//     propCount += nums;}

//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

//  - задача 13 (3 тема)
// МЕТОД OBJECT.KEYS()
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys) {
//     values.push(apartment[key]);
//     console.log(apartment[key]);
// }

//  - задача 14 (3 тема)
// ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ 2.0
// function countProps(object) {
//   // Change code below this line
//     const keys = Object.keys(object);
//     return keys.length
//     // Change code above this line
// }
// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

//  - задача 15 (3 тема)
// МЕТОД OBJECT.VALUES()
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys);
// console.log(values);

//  - задача 16 (3 тема)
// ЗАДАЧА. РАСХОДЫ НА ЗАРПЛАТУ
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//      const keys = Object.keys(salaries);
//      for (const key of keys) {
//        totalSalary += salaries[key];
//     }

//     // ИЛИ ЛУЧШЕ

//     const values = Object.values(salaries)
//     for (const value of values) {
//         totalSalary += value;

//     }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

//  - задача 17 (3 тема)
// МАССИВ ОБЪЕКТОВ
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//     // console.log(color.hex);
//     // console.log(color.rgb)
//     hexColors.push(color.hex);
//     console.log(hexColors);
//     rgbColors.push(color.rgb);
//     console.log(rgbColors);

// }

//  - задача 18 (3 тема)
// ЗАДАЧА. ПОИСК ОБЪЕКТА ПО ЗНАЧЕНИЮ СВОЙСТВА
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const key of products) {
//     // console.log(key.name);
//     if (key.name === productName){
//       return key.price;
//     }
//   }
//   return null
//   // Change code above this line
// }
// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Grip'));
// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Engine'));

//  - задача 19 (3 тема)
// ЗАДАЧА. КОЛЛЕКЦИЯ ЗНАЧЕНИЙ СВОЙСТВА

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const prop = [];
//   for (const key of products) {
//     if (Object.keys(key).includes(propName)) {
//       prop.push(key[propName]);
//     }
//     // Change code above this line
//   }
//   return prop;
// }
// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

//  - задача 20 (3 тема)
// ЗАДАЧА. ОБЩАЯ СТОИМОСТЬ ТОВАРА
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   for (const product of products) {
//     // console.log(key.name)
//     let total = product.price * product.quantity;
//     if (productName === product.name) {
//       return total;
//     }
//   }
//   return 0;
//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Droid'));
// console.log(calculateTotalPrice('Grip'));
// console.log(calculateTotalPrice('Scanner'));

//  - задача 21 (3 тема)
// ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday, today, tomorrow} = highTemperatures
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature)

//  - задача 22 (3 тема)
// ЗНАЧЕНИЯ ПО УМОЛЧАНИЮ
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// } = highTemperatures;

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(icon);

//  - задача 23 (3 тема)
// ИЗМЕНЕНИЕ ИМЕНИ ПЕРЕМЕННОЙ
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// } = highTemperatures;
// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

//  - задача 24 (3 тема)
// ДЕСТРУКТУРИЗАЦИЯ В ЦИКЛАХ
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// // for (const color of colors) {
// //   hexColors.push(color.hex);
// //   rgbColors.push(color.rgb);
// // }
// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

//  - задача 25 (3 тема)
// ГЛУБОКАЯ ДЕСТРУКТУРИЗАЦИЯ
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

//  - задача 26 (3 тема)
// ПАТТЕРН «ОБЪЕКТ НАСТРОЕК»
// Change code below this line
// function calculateMeanTemperature(forecast) {
//   //   const todayLow = forecast.today.low;
//   //   const todayHigh = forecast.today.high;
//   //   const tomorrowLow = forecast.tomorrow.low;
//   //   const tomorrowHigh = forecast.tomorrow.high;
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

//  - задача 27 (3 тема)
// ОПЕРАЦИЯ SPREAD ПРИ ПЕРЕДАЧЕ АРГУМЕНТОВ
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);

//  - задача 28 (3 тема)
// ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО МАССИВА
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

//  - задача 29 (3 тема)
// ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО ОБЪЕКТА
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {
//   ...defaultSettings,
//   ...overrideSettings
// };
// console.log(finalSettings);

//  - задача 30 (3 тема)
// ЗАДАЧА. КАРТОЧКИ ЗАДАЧ
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   return {
//     ...{
//       category,
//       priority,
//     completed
//     },...data,
//   };
//   // Change code above this line
// }
// console.log(makeTask({}));
// console.log(makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }));
// console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
// console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));
// console.log(makeTask({ text: 'Buy bread' }));

//  - задача 31 (3 тема)
// ОПЕРАЦИЯ REST ДЛЯ СБОРА ВСЕХ АРГУМЕНТОВ ФУНКЦИИ
// Change code below this line
// function add(...args) {
//   let total = 0
//   for (const arg of args) {
//     total += arg;
//   }
//   return total
//      // Change code above this line
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));

//  - задача 32 (3 тема)
// ОПЕРАЦИЯ REST ДЛЯ СБОРА ЧАСТИ АРГУМЕНТОВ ФУНКЦИИ
// Change code below this line
// function addOverNum(firstNumber, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }
//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

//  - задача 33 (3 тема)
// ЗАДАЧА. МАССИВ СОВПАДЕНИЙ
// Change code below this line
// function findMatches(firstMas, ...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     if (firstMas.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

//  - задача 34 (3 тема)
// МЕТОДЫ ОБЪЕКТА
// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   }
//   // Change code above this line
// };
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook('Red sunset'));
// console.log(bookShelf.updateBook('Sands of dune', 'Dune'));

//  - задача 35 (3 тема)
// ДОСТУП К СВОЙСТВАМ ОБЪЕКТА В ЕГО МЕТОДАХ
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const index = this.books.indexOf(oldName);
//     this.books.splice(index,1,newName);
//     // Change code above this line
//   },
// };

//  - задача 36 (3 тема)
// ЗАДАЧА. ЛАВКА ЗЕЛИЙ «У СТАРОЙ ЖАБЫ»
// const atTheOldToad = {
//   // Change code below this line
//   potions: []
//   // Change code above this line
// };

//  - задача 37 (3 тема)
// ЗАДАЧА. ПОЛУЧАЕМ ВСЕ ЗЕЛЬЯ
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   // Change code above this line
// };

//  - задача 38 (3 тема)
// ЗАДАЧА: ДОБАВЛЯЕМ НОВОЕ ЗЕЛЬЕ
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line
// return this.potions.push(potionName)
//     // Change code above this line
//   },
// };

//  - задача 39 (3 тема)
// ЗАДАЧА. УДАЛЯЕМ ЗЕЛЬЕ
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line
//     let potionRemove = this.potions.indexOf(potionName);
//     this.potions.splice(potionRemove, 1);
//     return this.potions
//     // Change code above this line
//   },
// };

//  - задача 40 (3 тема)
// ЗАДАЧА: ОБНОВЛЯЕМ ЗЕЛЬЕ
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const index = this.potions.indexOf(oldName);
//     this.potions.splice(index, 1, newName);
//     return this.potions;
//     // Change code above this line
//   },
// };

//  - задача 41 (3 тема)
// ЗАДАЧА: РАСШИРЯЕМ ИНВЕНТАРЬ
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    for (const potion of this.potions) {
      if (potion.name === potionName) {
        if (this.potions.includes(potion)) {
          const potionIndex = this.potions.indexOf(potion);
          return this.potions.splice(potionIndex, 1);
        }
      }
    }
    return console.log(`Potion ${potionName} is not in inventory!`);
  },

  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === oldName) {
        this.potions[i].name = newName;
      }
    }
  },
  // Change code above this line
};
