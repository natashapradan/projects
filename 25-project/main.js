let number = parseInt(process.argv[process.argv.length - 1], 10);
// let originalNumber = number
// let i = 1
// let arr = []
// while (number > 1) {
//   number = number - i
//   arr.unshift(number)
// }
// arr.push(originalNumber)
// let squareArr = []
// for (let i = 0; i < newArr.length; i++){
//   let n = Math.pow(newArr[i], 2)
//   squareArr.push(n)
// }
// console.log(squareArr.join('_'));
//

let i = [...Array(number).keys()].map(x => x + 1)
console.log(i.map(x => x * x).join('_'));

// let N = parseInt(process.argv[process.argv.length - 1], 10);
// i = Array.from({length: N}, (v, k) => k+1);
// console.log(i.map(x => x * x).join('_'));
