//  1***Дан массив с числами. Оставьте в нем только отрицательные числа.*/
// const negativeNumbers = (numbers) => {
//   return numbers.reduce((accumul, current) => {
//     if(current < 0){
//       accumul.push(current);
//     }
//     return accumul;
//   }, [])
// }

// const negativeNumbers = (numbers) => {
//   return numbers.filter(item => item < 0)
// }

// const negativeNumbers = (numbers) => {
//   const arr = [];

//   numbers.forEach(number => {
//     if(number < 0){
//       arr.push(number);
//     }
//   })
//   return arr;
// }

// console.log(negativeNumbers([2, 4, -1, -8, 9, 0, 'code']))

//  2*** Дан массив с числами. Оставьте в нем только четные числа, отсортировать */
// const evenNumbers = (arr => {
//   return arr.reduce((accumul, current) => {
//     if(current > 0 && !isNaN(current)){
//       accumul.push(current);

//     }
//     return accumul.sort((a, b) => a - b);
//   }, [])
// })

// const evenNumbers = (arr => {
//   return arr.filter(item => item > 0 && !isNaN(item))
//             .sort((a, b) => a-b);
// })

// const evenNumbers = arr => {
//   const temp = [];

//   arr.forEach(item => {
//     if (item > 0 && !isNaN(item)){
//       temp.push(item);
//     }
//   })
//   return temp.sort((a, b) => a-b)
// }

// console.log(evenNumbers([2, 4, 5, 100, -1, -8, 9, 0, 'code']))

//  3***Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов
// const sortByLength = stringArr => {
//   return stringArr.reduce((accumul, current) => {
//     if(current.length > 5){
//       accumul.push(current);
//     }
//     return accumul;
//   }, [])
// }

// const sortByLength = stringArr => {
//   return stringArr.filter(item => item.length > 5);
// }

// console.log(sortByLength(['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az', 2]));

//  4***Есть массив имён (строк). Найдите самое длинное. Если есть несколько имён одинаковой длинны, верните первое из них
// const longestString = strArr => {
//   return strArr.reduce((accumul, current) => {
//     if(accumul.length < current.length){
//       accumul = current
//     }
//     return accumul
//   }, '')
// }

// const longestString = strArr => {
//   let temp = ''
//   strArr.filter(item => {
//     if(temp.length < item.length){
//       temp = item;
//     }
//   })
//   return temp;
// }

// const longestString = strArr => {
//   let temp = '';

//   strArr.forEach(item => {
//     if(temp.length < item.length && isNaN(item)){
//       temp = item;
//     }
//   })
//   return temp;
// }

// console.log(longestString(['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qqqaqq', 'qsaa', 'q', 'az', 2]))

//  5***Есть строка, состоящая только из цифр '12320345'. Проверь, является ли строка палиндромом: первая цифра равна последней, вторая - предпоследней и т.д.
// const isPalindrome = str => {
//   return Array.from(str).reduce((accumul, current, index, arr) => {
//     if(current !== arr.reverse()[index]){
//       accumul = false;
//     }
//     return accumul
//   }, true)
// }

// const isPalindrome = str => {
//   let isOk = true;

//   Array.from(str).filter((item, index, arr) => {
//     if(item !== arr.reverse()[index]){
//       return isOk = false;
//     }
//   })
//   return isOk;
// }

// const isPalindrome = str => {
//   const arr = Array.from(str);

//   for (let i = 0; i < arr.length/2; i++){
//     if(arr[i] !== arr[arr.length - i - 1]){
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPalindrome('12321'))

//  6**Создать одноуроневый массив из чисел и отсортировать по возрастанию
// const createdArr = arr => {
//   return Array.from(arr.toString().split(',')).reduce((accumul, current) => {
//     if(!isNaN(+current)){
//       accumul.push(+current);
//     }
//     return accumul;
//   }, [])
// }

// console.log(createdArr([1, [10, 7], 'string', [3, 4], 5, [6, 7]]));

//  6***Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы
// const createdArr = arr => {
//   return arr.filter(item => Array.isArray(item));
// }

// console.log(createdArr([1, 'string', [3, 4], 5, [6, 7]]));

// 7***Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве
// const countNegative = arr => {
//   return arr.reduce((accumul, current) => {
//     if(current < 0){
//       accumul++;
//     }
//     return accumul;
//   }, 0)
// }

// const countNegative = arr => {
//   return arr.filter((item, index, arr) => item < 0).length;
// }

// console.log(countNegative([5, -3, 6, -5, 0, -7, 8, 9]))

//  7***Напишите код, который определяет сумму и произведение значений массива.
// const arrayManipulation = arr => {
//   const sum = arr.reduce((sum, current) => sum + current);
//   const mult = arr.reduce((mult, current) => mult * current);
//   return (`Sum of arr ${sum} and multiplication ${mult}`)
// }

// console.log(arrayManipulation([ 1, 2 , 3 , 4 , 5 , 6 , 7, 8 ,9]))

//..8***Напишите функцию filterFalse(arr), которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустя строка).
// const filterFalse = arr => {
//   return arr.filter(item => !!item);
// }

// console.log(filterFalse([NaN, 0, 77, false, -17, '',undefined, 99, null]))

//  9***Напишите код, который отсортирует массив объектов litmir по значению свойства title.
// const litmir = [
//   { author: 'Хэленка', title: 'Улетела сказка'},
//   { author: 'Коул Кресли', title: 'Восстание Аркан'},
//   { author: 'Райчел Мид', title: 'Золотая лилия'}
//   ];

// const compare = arr => {
//   const sorted =  arr.reduce((res, current) => {
//     res.push(current.title);
//     return res.sort();
//   }, [])
//   return sorted.toString();
// }

// const compare = arr => {
//   return arr.map(item => item.title).sort().toString();
// }

// console.log(compare(litmir))

//  10***Напишите функцию findCouple(array, number), которая ищет в массиве все пары целых чисел, сумма которых равна заданному значению.
// const findCouple = (arr, n) => {
//   const obj = {};
//   const subArr = [];
//   arr.forEach(elem => obj[elem] in obj? obj[elem] += 1: obj[elem] = 1 )

//   const resArr = Array.from(Object.keys(obj)).reduce((result, current, index, array) => {
//     array.forEach(item => {
//       if(+item + (+current) === n ){
//         result.push(+current, +item);
//       }
//     })    
//     return result.filter((item, index, array) => array.indexOf(item) === index);
//   }, []);

//   while(resArr.length){
//     subArr.push(resArr.splice(0, 2));
//   }

//   return subArr;

// }

// function findCouple(array, number) {
//   const store = {};
//   const differences = array.map((elem) => number - elem);


//   array.forEach((elem, i) => {
//     if (differences.indexOf(elem) > -1 && !store[elem]) {
//       store[elem] = store[differences[i]] = true;
//       console.log(`Ваша пара чисел: ${differences[i]} + ${elem}`)
//     }
//   })
// }

// console.log(findCouple([2, 1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18], 5))

//   11***Напишите код, который отсортирует массив объектов litmir по значению свойства title.
// var litmir = [ 
//   { author: 'Хэленка', title: 'Улетела сказка'},
//   { author: 'Коул Кресли', title: 'Восстание Аркан'},
//   { author: 'Райчел Мид', title: 'Золотая лилия'}
//   ];

// function filterFalse(arr) {
//   arr.sort((a, b) => a.title > b.title ? 1 : -1)

//   arr.forEach(item => {
//     console.log(item.title);
//   })
// }
// filterFalse(litmir);

//  12***Напишите функцию propertyValue(array, key), которая принимает в качестве аргументов массив объектов и имя свойства, а затем возвращает все значения данного свойства из массива объектов.

// const litmir = [ 
//   { author: 'Хэленка', title: 'Улетела сказка'},
//   { author: 'Коул Кресли', title: 'Восстание Аркан'},
//   { author: 'Райчел Мид', title: 'Золотая лилия'}
// ];

// const propertyValue = (array, key) => {
//   array.forEach(item => {
//     console.log(item[key]);
//   })
// }

// propertyValue(litmir, 'author');

//  14***Напишите функцию startingSubstring(arr), которая возвращает общую начальную подстроку в массиве строк.
// const arr1 = ['Капуста', 'Капуиcтал'];

// var startingSubstring = function startingSubstring(arr) {
//   let checked = false;
//   let count = 0;

//   return arr.reduce((resullt, current) => {
//     return resullt.filter((item, index) => {
//       if(item === current[index]){
//         return true;
//       } else {
//         if(!checked){
//           checked = true;
//           count = index;
//           return false;
//         }
//       }
//     })
//   }, Array.from(arr[0])).join('').substring(0, count)
// };

// console.log(startingSubstring(arr1));


const isSorted = arr => {
  // charCodeAt(0)
  arr.forEach(item => {
    if(isNaN(item)){
      console.log(item.charCodeAt())
    }
  })
}


console.log(isSorted(['a', 1, 2, 2, 2]))  