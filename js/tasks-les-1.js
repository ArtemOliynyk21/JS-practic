// - Скрипт который проверяет возможность открыть чат
// Для этого пользователь должен быть:
//     -другом
//     - онлайн
//     - без режима не беспокоить

// const isOnlaine = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnlaine && isFriend && !isDnd;
// console.log('Можно открыть чат', canOpenChat);

// let clientCounter = 11;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

//  - задача 18 (1тема)

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//    // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits){
//       message = 'Insufficient funds!';
//       console.log(message);
//   }
//   else {
//     message = customerCredits - totalPrice;
//       message = `You ordered ${orderedQuantity} droids, you have ${message} credits left`;
//       console.log(message);

//   }
//   // Change code above this line
//   return message;
// }
// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

//  - задача 19 (1тема)

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//     }
//     console.log(message);

//   return message;
// }
// checkPassword("jqueryismyjam");

//  - задача 20 (1тема)

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//     if (ordered === 0) {
//         message = 'There are no products in the order!';
//     } else if (ordered > available){
//         message = 'Your order is too large, there are not enough items in stock!';
//     } else {
//         message = 'The order is accepted, our manager will contact you';
//     }
//     console.log(message);
//   // Change code above this line
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);

//  - задача 21 (1тема)

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line
//   console.log(isInRange);
//   return isInRange;
// }

// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

//  - задача 22 (1тема)

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line
//   console.log(canAccessContent);
//   return canAccessContent;
// }
// checkIfCanAccessContent('pro');
// checkIfCanAccessContent('starter');
// checkIfCanAccessContent('vip');
// checkIfCanAccessContent('free');

//  - задача 23 (1тема)

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange =!isInRange ; // Change this line

//     console.log(isNotInRange);
//   return isNotInRange;
// }

// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);
// isNumberNotInRange(20, 50, 76);

//  - задача 24 (1тема)

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//       discount = BRONZE_DISCOUNT;
//   } else if (totalSpent < 5000) {
//       discount = BASE_DISCOUNT;
//     }
//     console.log(discount);

//   // Change code above this line
//   return discount;
// }

// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);

//  - задача 25 (1тема)

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//     message = ordered > available
//   ?  'Not enough goods in stock!'
//   :  'The order is accepted, our manager will contact you';
// console.log(message);

// //   if (ordered > available) {
// //     message = 'Not enough goods in stock!';
// //   } else {
// //     message = 'The order is accepted, our manager will contact you';
// //   }

//   // Change code above this line
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

//  - задача 26 (1тема)

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line
//   message = password === ADMIN_PASSWORD ? 'Access is allowed' : 'Access denied, wrong password!';
//   console.log(message);
//   // Change code above this line
//   return message;
// }

// checkPassword('jqueryismyjam');
// checkPassword('angul4r1sl1f3');
// checkPassword('r3actsux');

//  - задача 27 (1тема)

//   function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }
//       console.log(`Ваша подписка стоит ${price} кредитов`);
//   // Change code above this line
//   return price;
// }
// getSubscriptionPrice('professional');
// getSubscriptionPrice('organization');
// getSubscriptionPrice("starter");

//  - задача 28 (1тема)

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line

//   //   if (password === null) {
//   //     message = 'Canceled by user!';
//   //   } else if (password === ADMIN_PASSWORD) {
//   //     message = 'Welcome!';
//   //   } else {
//   //     message = 'Access denied, wrong password!';
//   //     }

//   switch (password) {
//       case null:
//           message = 'Canceled by user!';
//           break;

//       case ADMIN_PASSWORD:
//           message = 'Welcome!';
//           break;

//       default:
//           message = 'Access denied, wrong password!'
//     }
//     console.log(message);

//   // Change code above this line
//     return message;
//     }
// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

//  - задача 29 (1тема)

// function getShippingCost(country) {
//   let message;
//   let price;
//   // Change code below this line
//   switch (country) {
//     case 'China':
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Chile':
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Australia':
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Jamaica':
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }
//   console.log(message);

//   // Change code above this line
//   return message;
// }

// getShippingCost('Australia');
// getShippingCost('Germany');
// getShippingCost('China');
// getShippingCost('Chile');
// getShippingCost('Jamaica');
// getShippingCost('Sweden');

//  - задача 30 (1тема)

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line
//     console.log(message);
//   return message;
// }
// getNameLength('Poly');
// getNameLength('Harambe');
// getNameLength('Billy');
// getNameLength('Joe');

//  - задача 31 (1тема)

// const courseTopic = 'JavaScript essentials';
// // Change code below this line
// console.log(courseTopic);

// const courseTopicLength = courseTopic.length;
// console.log(courseTopicLength);
// const firstElement = courseTopic[0];
// console.log(firstElement);
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(lastElement);

//  - задача 32 (1тема)

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line
//     console.log(substring);
//   return substring;
// }
// getSubstring('Hello world', 3);
// getSubstring('Hello world', 6);
// getSubstring('Hello world', 8);
// getSubstring('Hello world', 11);
// getSubstring('Hello world', 0);

//  - задача 33 (1тема)

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//     if (message.length > maxLength) {
//     result = message.slice(0, maxLength) + '...'
//     }
//     else {
//         result = message
//     }
//     console.log(result);
//   /// Change code above this line
//   return result;
// }
// formatMessage('Curabitur ligula sapien', 16);
// formatMessage('Curabitur ligula sapien', 23);
// formatMessage('Vestibulum facilisis purus nec', 20);
// formatMessage('Vestibulum facilisis purus nec', 30);
// formatMessage('Nunc sed turpis a felis in nunc fringilla', 15);
// formatMessage('Nunc sed turpis a felis in nunc fringilla', 41);

//  - задача 34 (1тема)

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line
//  console.log(normalizedInput);
//   return normalizedInput;
// }

// normalizeInput('Hello world');
// normalizeInput("This ISN'T SpaM");
// normalizeInput('Big SALE');

//  - задача 35 (1тема)

// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//     console.log(result);
//     return result;
// }
// checkForName('Egor Kolbasov', 'Egor');
// checkForName('Egor Kolbasov', 'egor');
// checkForName('Egor Kolbasov', 'egOr');
// checkForName('Egor Kolbasov', 'Zhenya');
// checkForName('Vadim Nekrasov', 'Vadim');
// checkForName("Vadim Nekrasov", "vadim");
// checkForName('Vadim Nekrasov', 'Dima');

//  - задача 36 (1тема)

// function checkForSpam(message) {
//   let result;
//   let NormalizedMessage;
//   // Change code below this line
//   NormalizedMessage = message.toLowerCase();
//   result = NormalizedMessage.includes('spam') || NormalizedMessage.includes('sale');
//   console.log(result);
//   // Change code above this line
//   return result;
// }
// checkForSpam('Latest technology news');
// checkForSpam('JavaScript weekly newsletter');
// checkForSpam('Get best sale offers now!');
// checkForSpam('Amazing SalE, only tonight!');
// checkForSpam('Trust me, this is not a spam message');
// checkForSpam('Get rid of sPaM emails. Our book in on sale!');
// checkForSpam('[SPAM] How to earn fast money?');
