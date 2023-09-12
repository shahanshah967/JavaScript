const name = "Ansari-SA"
const repoCount = 10

// console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ansari')

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

// console.log(gameName)
// console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 5)
console.log(anotherString);

const newStringOne = "    ansari   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20chaoudhry"

console.log(url.replace('%20', '-'))
console.log(url.includes('ite'));

console.log(gameName.split('-'))

