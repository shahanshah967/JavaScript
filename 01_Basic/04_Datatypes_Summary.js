// # Primitive DataTypes
// 7 types:
// String, Boolean, null, Number, Symbol, undefined, BigInit

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(anotherId === id);

const bigNumber = 32164943216548915164616516544n;

console.log(typeof bigNumber)

//Reference Type(Non Primitive)

//Array,Objects,Functions

const heros = ["shaktiman", "naagraaj", "doga"]
let myObj = {
    name: 'ansari',
    age: 23,
}


const myFunction = function () {
    console.log("Hello World")

}
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof myObj);
// console.log(typeof);