# JavaScript: Data Types (Detailed Explanation)

## 📌 Overview

JavaScript is a **dynamically typed language**, which means you don’t need to declare the data type of a variable—it is automatically determined at runtime.

Example:

```javascript
let x = 10;      // number
x = "hello";     // now string
```

---

# 🔹 1. Primitive Data Types (In Depth)

Primitive types store **single values** and are **immutable** (cannot be changed directly).

---

## 1️⃣ Number

* Represents **integers and floating-point numbers**
* JavaScript has **only one number type** (no separate int/float)
* Range: ±(2^53 - 1)

```javascript
let a = 10;
let b = 3.14;
let c = -5;
```

### Special Values:

```javascript
let x = Infinity;
let y = -Infinity;
let z = NaN; // Not a Number
```

👉 `NaN` occurs when:

```javascript
let result = "abc" / 2; // NaN
```

---

## 2️⃣ String

* Used to store **text**
* Can be written using:

  * Single quotes `' '`
  * Double quotes `" "`
  * Backticks `` ` ` `` (template literals)

```javascript
let name = "Ramesh";
let msg = 'Hello';
let greet = `Hello ${name}`;
```

### Features:

* Supports **string interpolation**
* Multi-line strings using backticks

```javascript
let text = `This is
multi-line text`;
```

---

## 3️⃣ Boolean

* Represents logical values: `true` or `false`
* Mostly used in **conditions**

```javascript
let isActive = true;
let isLoggedIn = false;
```

### Example:

```javascript
if (isActive) {
  console.log("User is active");
}
```

---

## 4️⃣ Undefined

* A variable declared but **not assigned any value**

```javascript
let x;
console.log(x); // undefined
```

👉 Common cases:

* Missing function parameters
* Variables declared but not initialized

---

## 5️⃣ Null

* Represents **intentional absence of value**
* Assigned manually

```javascript
let data = null;
```

👉 Difference from `undefined`:

* `undefined` → system assigns
* `null` → developer assigns

---

## 6️⃣ BigInt

* Used for **very large numbers** beyond `Number` limit

```javascript
let bigNumber = 123456789012345678901234567890n;
```

👉 Useful in:

* Financial calculations
* Cryptography
* Large datasets

---

## 7️⃣ Symbol

* Used to create **unique identifiers**
* Always unique, even if values are same

```javascript
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false
```

👉 Used in:

* Object property keys
* Avoiding naming conflicts

---

# 🔹 2. Non-Primitive (Reference) Data Types (In Depth)

These store **collections of data** and are **mutable**.

---

## 1️⃣ Object

* Stores data in **key-value pairs**

```javascript
let person = {
  name: "Ramesh",
  age: 22
};
```

### Access:

```javascript
person.name;
person["age"];
```

### Modify:

```javascript
person.age = 23;
```

👉 Objects are stored by **reference**, not value.

---

## 2️⃣ Array

* Special type of object used to store **multiple values**

```javascript
let fruits = ["apple", "banana", "mango"];
```

### Access:

```javascript
fruits[0]; // apple
```

### Methods:

```javascript
fruits.push("orange");   // add
fruits.pop();            // remove last
```

👉 Arrays are **zero-indexed**

---

## 3️⃣ Function

* A reusable block of code

```javascript
function greet() {
  console.log("Hello");
}
```

### With parameters:

```javascript
function add(a, b) {
  return a + b;
}
```

👉 Functions are also **objects in JavaScript**

---

# 🔥 Important Concepts

## 🔹 Type Checking

```javascript
typeof 10;        // "number"
typeof "hello";   // "string"
typeof true;      // "boolean"
typeof undefined; // "undefined"
typeof null;      // "object" (this is a known bug)
```

---

## 🔹 Mutable vs Immutable

| Type      | Mutable? |
| --------- | -------- |
| Primitive | ❌ No     |
| Object    | ✅ Yes    |
| Array     | ✅ Yes    |

---

## 🔹 Pass by Value vs Reference

### Primitive (Value)

```javascript
let a = 10;
let b = a;
b = 20;

console.log(a); // 10
```

### Object (Reference)

```javascript
let obj1 = { value: 10 };
let obj2 = obj1;

obj2.value = 20;

console.log(obj1.value); // 20
```

---

# 💡 Best Practices

* Use **`const`** for objects and arrays
* Avoid unnecessary type conversions
* Always check for `null` and `undefined`
* Use meaningful variable names

---

# ✅ Conclusion

* JavaScript has **7 primitive data types**
* Non-primitive types are **objects, arrays, and functions**
* Understanding data types helps avoid **bugs and confusion**
* This is a **very important topic for interviews**

---
