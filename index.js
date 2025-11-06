// data types and variable declaration 
// data types

// 🌟 Primitive Data Types

// 1. Number
let age = 25;
let price = 99.99;
console.log(typeof age, age);       // number 25
console.log(typeof price, price);   // number 99.99

// 2. String
let name = "Ramesh";
let message = `Hello, ${name}!`;
console.log(typeof name, name);     // string Ramesh
console.log(typeof message, message); // string Hello, Ramesh!

// 3. Boolean
let isOnline = true;
let isAdmin = false;
console.log(typeof isOnline, isOnline); // boolean true
console.log(typeof isAdmin, isAdmin);   // boolean false

// 4. Undefined
let city;
console.log(typeof city, city);     // undefined undefined

// 5. Null
let car = null;
console.log(typeof car, car);       // object null

// 6. Symbol
let id = Symbol('id');
console.log(typeof id, id);         // symbol Symbol(id)

// 7. BigInt
let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber, bigNumber); // bigint 123456789012345678901234567890n


// 🌟 Non-Primitive (Reference) Data Types

// 8. Object
let person = {
  name: "Ramesh",
  age: 22,
  city: "Bangalore"
};
console.log(typeof person, person); // object { name: 'Ramesh', age: 22, city: 'Bangalore' }

// 9. Array
let fruits = ["apple", "banana", "mango"];
console.log(typeof fruits, fruits); // object [ 'apple', 'banana', 'mango' ]

// 10. Function
function greet() {
  return "Hello World!";
}
console.log(typeof greet, greet()); // function Hello World!


// var - function scoped
var userName = "Ramesh";
console.log("var:", userName);

// let - block scoped, can be reassigned
let userAge = 25;
userAge = 26;
console.log("let:", userAge);

// const - block scoped, cannot be reassigned
const userCountry = "India";
console.log("const:", userCountry);

// Block scope demonstration
{
  var a = 10;     // function scoped
  let b = 20;     // block scoped
  const c = 30;   // block scoped
  console.log("Inside block:", a, b, c);
}

console.log("Outside block:", a);   // ✅ Accessible
// console.log(b); // ❌ Error
// console.log(c); // ❌ Error

