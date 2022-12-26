console.log("Objects");

let person = {
  name: "Sajjad Ali",
  age: "24",
  roll_number: "BSF1701767",
  class: "BSIT",
};

// Write a javascript function which return keys of object
console.log(Object.keys(person));

// Write a javascript function which return entries of object
console.log(Object.entries(person));

// Write a javascript function which compare two objects

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, c: 4, c: 3 };

const CompObj = (a, b) => Object.keys(a).every((key) => b[key]);

// console.log(CompObj(obj1, obj2));
