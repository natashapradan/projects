// const x = 32767;
// alert(x.toString(16));
//
// yourNumber = parseInt('3A5', 16);
//
//
// alert(yourNumber)
// console.log(process.argv)
//
// console.log(process.argv[process.argv.length - 1])

let Number = parseInt(process.argv[process.argv.length - 1], 10);
let Remainder = null;
// let arr = [];

let string = '';

const MAPPING = "0123456789ABCDEF".split("")

while (Number > 16) {
  Remainder = Number % 16;
  Number = Math.floor(Number / 16);
  // arr.unshift(MAPPING[Remainder]);
  string += MAPPING[Remainder];
}

// arr.unshift(MAPPING[Number]);
string += MAPPING[Number];
// console.log(arr.join(""))

let splitString = string.split("");
let reverseArray = splitString.reverse();
let joinArray = reverseArray.join("");

console.log(joinArray)
