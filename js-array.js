console.log("Arrays");
let arr = [1, 2, 3, 4, 53, 5, 6, 7, 7, 8, 82, 81, 90, 9];
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// 01: Arrays to String
// We can can convert array into string
// console.log(arr.toString());
// console.log(fruits.toString());

// 02: Join Arrays
// join() methods behave as like toString(), but in addition it we can add separator between strings
// console.log(fruits.join(" * "));

// 03: Js Array pop()
// we can remove last element from an array
// console.log(fruits.pop());
// console.log(fruits);

// 04: Js Array push()
// Push() method add a new element to an array(at the end) and return the new array length
// console.log(fruits.push("Kiwi"));
// console.log(fruits);

// 05: Js Array shift()
// shift() shift the array , it removes first element and return removed one
// console.log(fruits.shift());
// console.log(fruits);

// 06: Js Array unshift()
// unshift() add new element into the array and return new array
// console.log(fruits.unshift("Kiwi"));
// console.log(fruits);

// 07: Merging (Concatenating) Arrays
// console.log(arr.concat(fruits));

// 08: Js Array Slice() & splice()

// console.log(fruits);
// console.log(fruits.slice(3));

// Write a Javascript function which create 2D array by taking comma separated string

let str = `abc, cde, efg,
ghi, ijk,klm,
mno, opq,qrs`;
const parsCSV = (str) => str.split("\n").map((row) => row.split(","));

// console.log(parsCSV(str));
