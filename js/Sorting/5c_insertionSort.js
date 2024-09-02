function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    // console.log(`Key${i} ${key}, arr[${j}] ${arr[j]}`);
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log(insertionSort([4, 1, 9, 76, 3]));
