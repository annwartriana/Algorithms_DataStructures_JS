// function binarySearch(arr, numSearched) {
//   let min = 0;
//   let max = array.length - 1;

//   while (min <= max) {
//     let middle = Math.floor((min + max) / 2);

//     if (numSearched == array[middle]) return middle;
//     else if (array[middle] < numSearched) {
//       min = middle + 1;
//     } else {
//       max = middle - 1;
//     }
//   }
//   return -1;
// }

// Refactored Version
function binarySearch(arr, numSearched) {
  let start = 0;
  let end = arr.length - 1;
  while (arr[middle] !== numSearched && start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (numSearched < arr[middle]) end = middle - 1;
    else start = middle + 1;
  }
  return arr[middle] === numSearched ? middle : -1;
}

// console.log(binarySearch([1,2,3,4,5,6],5), 4)
// console.log(binarySearch([1,2,3,4,5,6],4), 3)
// console.log(binarySearch([1,2,3,4,5,6],6), 5)
// console.log(binarySearch([1,2,3,4,5,6],11), -1)
