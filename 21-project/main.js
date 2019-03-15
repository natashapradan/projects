let str = process.argv[process.argv.length - 1];
let splitStr = str.split("");
let arr = splitStr.reverse();

let newArr = [];

const MAPPING = "0123456789ABCDEF".split("")
const NEW_MAPPING = {}

let keys = Object.keys(MAPPING);

keys.forEach(function(key){
  let value = MAPPING[key];
  NEW_MAPPING[value] = key;
  console.log(NEW_MAPPING[value])

});

console.log(NEW_MAPPING);

for (let i = 0; i < arr.length; i++) {
  let f = NEW_MAPPING[arr[i]] * Math.pow(16, i)
  newArr.unshift(f);
}

let totalNumber = 0;

  for (let i = 0; i < newArr.length; i++) {
    totalNumber += newArr[i];
  }

console.log(totalNumber)

