// *******************Есть массив имён (строк). Найдите самое длинное. Если есть несколько имён одинаковой длинны, верните первое из них**************************

// const longestName = (names) => {
//   let longName = ''

//   if (names.length === 1) {
//     longName = names[0];
//   } else {
//     longName = names.reduce((prev, current) => {
//       if (prev.length < current.length) {
//         prev = current;
//       }
//       return prev;
//     })

//   }
//   console.log(longName);
// }

//******************************** */
// const longestName = (names) => {
//   let length = 0;
//   let longName = '';

//   for(let i = 0; i < names.length; i++){
//     if(length < names[i].length){
//       longName = names[i];
//       length = names[i]. length;
//     }
//   }
//   console.log(longName);
// }

//********************************** */
// const longestName = (names) => {
//   let length = 0;
//   let longName = '';

//   for(let item of names){
//     if(length < item.length){
//       longName = item;
//       length = item.length;
//     }
//   }
//   console.log(longName);
// }

// longestName(['Vas', 'Oksaba']);

//***************************Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2. */
// function rowWeights(array) {
//   let first = 0;
//   let second = 0;
//   const sumArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0) {
//       first += array[i];
//     } else {
//       second += array[i];
//     }

//   }
//   sumArray.push(first);
//   sumArray.push(second);
//   console.log(sumArray);
// }


// ******** Return even index members
// function rowWeights(array) {
//   const arr = array.reduce((accumul, current, index) => {
//     if(index % 2 === 0){
//       accumul.push(current);
//     }
//     return accumul;
//   }, []);
//   console.log(arr);
// }
// rowWeights([29, 83, 67, 54, 53, 33, 19, 28, 28, 96]);

//***************Return only unique numbers */
// const uniqueNumbers = (numbers) => {
//   const sorted = numbers.sort((a, b) =>  a-b);
//   const res = numbers.reduce((accumul, current) => {
//     if(accumul.slice(-1)[0] !== current){
//       accumul.push(current)
//     }
//     return accumul
//   }, [])
//   console.log(res);
// }

// const uniqueNumbers = (numbers) => {
//   const newSet = new Set(numbers);

//   const unique = Array.from(newSet);
//   console.log(unique);
// }

// const uniqueNumbers = (numbers) => {
//   const unique = numbers.filter((current, index, arr) => arr.indexOf(current) === index);
//   console.log(unique);
// }

// uniqueNumbers([29, 83, 83, 67, 96, 54, 53, 33, 19, 28, 28, 96]);


//*********Есть строка, состоящая только из цифр '12320345'. Проверь, является ли строка палиндромом: первая цифра равна последней, вторая - предпоследней и т.д. */

// function isPalindrome(str) {
//   let res = true;
//   const string = str.toLowerCase();

//   for(let i = 0; i < string.length/2; i++){
//   if(string[i] !== string[string.length - 1 - i])
//     res = false;
//   }
//   console.log(res);
// }

//isPalindrome('1234567');

//******************Напишите функцию copyArr(arr), которая копирует массив не изменяя oригинал. */

// function arrayClone(arr) {
//   const newArr = [...arr];

//   console.log(newArr);
//   }

// function arrayClone(arr) {
//   const newArr = arr.slice();

//   console.log(newArr);
// }

// arrayClone(['Капуста', 'Репа', 'Редиска', 'Морковка']);

//***************Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой. Получите результат двумя разными методами. */

// const arrayToString = (arr) => {
//   const resString = arr.toString();
//   console.log(resString);
// }

// const arrayToString = (arr) => {
//   const resString = arr.join();
//   console.log(resString);
// }

// arrayToString(['Капуста', 'Репа', 'Редиска', 'Морковка']);

//*************Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. Например, если вводится число 55639217, то на выход должно быть 5:563:921:7. */

// const enterColon = (number) => {
//   let str = number.toString();
//   let result = [str[0]];
//   for(var i=1; i<str.length; i++) {
//       if((str[i-1]%2 !== 0)&&(str[i]%2 !== 0)) {
//         result.push(':', str[i]);
//        }
//       else {
//         result.push(str[i]);
//       }
//   }

//   console.log(result.join(''));
// }

//enterColon(55639217)

/*You are provided with an array of positive integers and an additional integer n (n > 1).
Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array. */

// function modifiedSum(arr, n) {
//   let cumulPow = 0;
//   let cumulSum = 0;

//   for (let i = 0; i < arr.length; i++){
//     cumulPow += Math.pow(arr[i], n);
//     cumulSum += arr[i];
//   }
//   console.log(cumulPow - cumulSum) ;
// }
// modifiedSum([1, 2, 3], 3);

//************Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number. */

// function consecutive(arr) {
//   const sortedArr = arr.sort((a, b) => a - b);
//   const temp = [];
//   let min = sortedArr[0];
//   let max = sortedArr[sortedArr.length - 1];

//   for (let j = min; j <= max; j++){
//     if(sortedArr.indexOf(j) === -1){
//       temp.push(j);
//     }

//   }
//   console.log(temp.length);
// };
// consecutive([2, 3, 10, 20]);

//***************Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. */

// function adjacentElementsProduct(array) {
//   let max = 1;

//   for (let i = 0; i < array.length; i++){
//     if(array[i - 1] * array[i] > max){
//       max = array[i - 1] * array[i] ;
//     }
//   }
//   console.log(max) ;
// }

// function adjacentElementsProduct(array) {
//   const res = array.reduce((max, current, i, arr) => {
//     if(max < current * arr[i - 1]){
//       max = current * arr[i - 1];
//     }
//     return max;
//   }, array[0]*array[1])
//   console.log(array)
//   return(res);
// }

// adjacentElementsProduct([4, -12, -3, -1, -5]);

//*************Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx". */

// const tripleX = str => { 
//   let x = str.indexOf('x')
//   return x > -1 && x === str.indexOf('xxx'); 
// }


/******You're saying good-bye your best friend , See you next happy year 
Happy Year is the year with only distinct digits , (e.g) 2018 */

// function nextHappyYear(year){
//   let newYear = year + 1;
//   let arr = newYear.toString().split('');

//   let uniq = arr.filter((item, pos) => arr.indexOf(item) == pos);
//   if (uniq.length !== arr.length){
//     return nextHappyYear(newYear);
//   }

//   return newYear;
// }

// console.log(nextHappyYear(2019))

//************************************************ */
//*****************Positive integers have so many gorgeous features. Some of them could be expressed as a sum of two or more consecutive positive numbers.

function consecutiveDucks(num) {
  for (let i = 2; i < num / 2 + 1; i++)
    if ((num - (i * (i - 1)) / 2) % i === 0) {
      return true
    }
  return false
}



console.log(consecutiveDucks(32))

