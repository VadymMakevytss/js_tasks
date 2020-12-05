//****Remove duplicates */
//****Filter method */

//******************************** */
// const uniqGet = (arr) => {
//   const newArr = [];
//   const newSet = new Set(arr);
//   for(let item of newSet){
//     newArr.push(item);
//   }
//   return newArr;
// }

//******************************* */
// const uniqGet = (arr) => {
//   return [...new Set(arr)];
// }

// const uniqGet = (arr) => {
//   return arr.filter((item, index, array) => array.indexOf(item) === index);
// }

// console.log(uniqGet([1, 3, 5, 3, 8, 8, 5, 3, 9]))