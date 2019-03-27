// let arr = [8, 5, 11, 4, 30, 9, 7, 25, 3, 6, 1]
//
// let minArr = Math.min(...arr);
//
// while (arr[0] > minArr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//     }
//     if (arr[0] === minArr) {
//       break;
//     }
//   }
// }
//     console.log(arr)


let arr = [8, 5, 11, 4, 30, 9, 7, 25, 3, 6, 1]

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    }
  }
}
console.log(arr)

