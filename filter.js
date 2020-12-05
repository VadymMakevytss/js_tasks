//  1***Дан массив с числами. Оставьте в нем только отрицательные числа.*/
// const negativeNumbers = (arr) => {
//   return arr.filter((current, index, array) => current < 0)
// }

// console.log(negativeNumbers([2, 4, -1, -8, 9, 0, 'code']))

//  2*** Дан массив с числами. Оставьте в нем только четные числа, отсортировать */
// const evenNumbers = arr => {
//   return arr.filter((current, index, array) => current % 2 === 0)
//              .sort((a, b) => a-b);
// }

// console.log(evenNumbers([2, 4, -1, -8, 9, 0, 'code']))

//  3***Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов
// const sortByLength = (arr) => {
//   return arr.filter(item => item.length > 5)
// }

// console.log(sortByLength(['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az', 2]));

//  4***Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Создать из него одноуровневый массив и найти сумму элементов
// const createdArr = (arr) => {
//   const newArr = arr.toString().split(',');

//   const sum = newArr.reduce((accumul, current, index, array) => {
//     return accumul += +current;
//   }, 0)

//   return sum;
// }

//  5**Создать одноуроневый массив из чисел и отсортировать по возрастанию
// const createdArr = (arr) => {
//   const newArr = arr.toString().split(',');

//   return newArr.sort((a, b) => a - b).map(item => Number(item));

// }

// console.log(createdArr([1, 2, [6,7], [3,4], 5, 9, 'polo']));

//  6***Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы
// const createdArr = (arr) => {
//   return arr.filter(elem => Array.isArray(elem))
// }

// console.log(createdArr([1, 'string', [3, 4], 5, [6, 7]]));

// 7***Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве
// const countNegative = (arr) => {
//   const newArr = arr.filter(item => item < 0);

//   return newArr.length;
// }

// console.log(countNegative([5, -3, 6, -5, 0, -7, 8, 9]))

//  8***Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).
//const removeDuplicates = (arr) => {
//   return arr.filter((item, index, array) => array.indexOf(item) === index)
// }


// console.log(removeDuplicates(["php", "php", "css", "css",
// "script", "script", "html", "html", "java"
// ]))

//  9***Напишите функцию getDuplicates(arr), которая возвращает массив, в котором собраны только повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру)
// const getDuplicates = (arr) => {
//   return arr.filter((item, index, array) => array.indexOf(item) !== index)
// }

// console.log(getDuplicates(["php", "php", "css", "css",
// "script", "script", "html", "html", "java"
// ]));

//  10***Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые 'n' элементов массива.
// const getFirst = (arr, n) => {
//   return arr.filter((item, index, arr) => index < n);
// }

// const getFirst = (arr, n) => {
//   return arr.reduce((cumul, item, index, arr) => {
//     if(index < n){
//       cumul.push(item);
//     }
//     return cumul
//   }, []);
// }

// console.log(getFirst([1,2,3,4,5,6,7,8,9], 5))

//  11***Напишите функцию getLast(array, n), которая возвращает фрагмент массива, содержащий последние 'n' элементов массива.
// const getLast = (arr, n) => {
//   return arr.filter((item, index, array) => index > array.length - n -1)
// }

// const getLast = (arr, n) => {
//   return arr.reduce((accumul, item, index, array) => {
//     if(index > array.length - n - 1){
//       accumul.push(item);
//     }
//     return accumul
//   }, [])
// }

// console.log(getLast([1,2,3,4,5,6,7,8,9], 5))

//  12***Напишите функцию countIdentic(arr), которая возвращает количество повторяющихся элементов в массиве.
// const countEdentic = (arr) => {
//   let counter = {};

//   arr.forEach(val => {
//     if(val in counter){
//       counter[val] += 1;
//     } else{
//       counter[val] = 1;
//     }
//   })

//   const counts = Object.values(counter).filter(item => item > 1).length;

//   return counts;
// }

// const countEdentic = (arr) => {
//   let obj = {};

//   arr.forEach(element => element in obj ? obj[element] += 1: obj[element] = 1);

//   return Object.values(obj).reduce((res, current) => {
//     if(current > 1){
//       res++;
//     }
//     return res;
//   }, 0)
// }

// console.log(countEdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]))

//  13***Напишите код, который находит наиболее часто используемый элемент массива.
//   const offenElementFinding = (arr) => {
//     let obj = {};

//     arr.forEach(element => element in obj? obj[element] += 1: obj[element] = 1)

//     return Object.entries(obj).reduce((accumul, current, index) => {
//       let max = 0;
//       if(current[1]> max){
//         max = current[1];
//         accumul = current
//       }
//       return accumul[0];
//     }, []);
//   }

// console.log(offenElementFinding([7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7]))

//  14***Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0
// const sumElementsBeforeZero = (arr) => {
//   let sum = 0
//   const result = arr.reduce((res, current) => {
//     if(current === 0){
//       sum = res;
//     } else {
//       return res += current;
//     }
//   }, 0)
//   return sum;
// }

// const sumElementsBeforeZero = (arr) => {
//   return arr.reduceRight((res, current, index, array) => {
//     const zeroIndex = array.indexOf(0);
//     if(index > zeroIndex){
//       res += current;
//     }
//     return res;
//   }, 0)
// }

// console.log(sumElementsBeforeZero([1, 2, 3, 0, 4, 5, 6]))

//  15***Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0
// const sumElementsAfterZero = (arr) => {

//   return arr.reduce((res, current, index, array) => {
//     const zeroIndex = array.indexOf(0);
//     if (index > zeroIndex){
//       res+=current
//     }
//     return res
//   }, 0)
// }

// console.log(sumElementsAfterZero([1, 2, 3, 0, 4, 5, 6]))

//  16***Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти
// const getAboveTen = (arr) => {
//   let count = 0;
//   const result = arr.reduce((res, current) => {
//     if(res > 10){
//       return count;
//     } else {
//       count++;
//       return res + current;
//     }
//   }, 0)
//   return count;
// }

// console.log(getAboveTen([1, 2, 3, 0, 4, 5, 6]))

//  17***Дан массив с числами. Узнайте сколько элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти.
const getAboveTenFromEnd = (arr) => {
  let count = 0;
  const result = arr.reduceRight((res, current) => {
    if (res > 10) {
      console.log(count)
      return count;
    } else {
      count++;
      return res + current;
    }
  }, 0)
  return count;
}

console.log(getAboveTenFromEnd([1, 2, 3, 0, 4, 5, 6]))