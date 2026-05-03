# JavaScript: Difference Between `var`, `let`, and `const`

## 📌 Overview

In JavaScript, `var`, `let`, and `const` are used to declare variables. They differ in scope, re-declaration, and mutability.

---

## 🔹 `var`

* Introduced in early JavaScript (pre-ES6)
* **Function scoped**
* Can be **re-declared**
* Can be **updated**

### Example:

```javascript
var x = 10;
var x = 20; // ✅ allowed
x = 30;     // ✅ allowed
```

### Scope Example:

```javascript
if (true) {
  var a = 5;
}
console.log(a); // ✅ 5 (accessible outside block)
```

---

## 🔹 `let`

* Introduced in **ES6 (2015)**
* **Block scoped**
* Cannot be **re-declared**
* Can be **updated**

### Example:

```javascript
let x = 10;
// let x = 20; ❌ error
x = 30;        // ✅ allowed
```

### Scope Example:

```javascript
if (true) {
  let a = 5;
}
console.log(a); // ❌ ReferenceError
```

---

## 🔹 `const`

* Introduced in **ES6 (2015)**
* **Block scoped**
* Cannot be **re-declared**
* Cannot be **updated**

### Example:

```javascript
const x = 10;
// x = 20; ❌ error
```

### Important Note:

For objects and arrays, the reference cannot change, but internal values can:

```javascript
const obj = { name: "Ramesh" };
obj.name = "Kumar"; // ✅ allowed
```

---

## 🔥 Key Differences

| Feature    | var      | let   | const |
| ---------- | -------- | ----- | ----- |
| Scope      | Function | Block | Block |
| Re-declare | ✅ Yes    | ❌ No  | ❌ No  |
| Update     | ✅ Yes    | ✅ Yes | ❌ No  |

---

## 💡 Best Practices

* Use **`const`** by default
* Use **`let`** when variable value needs to change
* Avoid using **`var`** in modern JavaScript

---

## ✅ Conclusion

Understanding `var`, `let`, and `const` is essential for writing clean and bug-free JavaScript code. Prefer modern declarations (`let` and `const`) to avoid scope-related issues.

---
