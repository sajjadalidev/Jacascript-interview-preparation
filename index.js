"use strict";
// Write a JavaScript Program which take 2 number and check if any number is equal to 100 or sum of both numbers is 100 then return true

// const checkNum = (a, b) => {
//   if (a == 100) {
//     return true;
//   } else if (b == 100) {
//     return true;
//   } else if (a + b == 100) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(checkNum(100, 200));

// Second Approach:
// function isEqualTo100(a, b) {
//   if (a == 100 || b == 100 || a + b == 100) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEqualTo100(10, 90));

// Third Approach
// function isEqualTo100(a, b) {
//   return a == 100 || b == 100 || a + b == 100 ? true : false;
// }
// console.log(isEqualTo100(100, 20));

// Fourth Approach
// function isEqualTo100(a, b) {
//   return a == 100 || b == 100 || a + b == 100;
// }
// console.log(isEqualTo100(100, 0));

// 5th Approach
// const isEqualTo100 = (a, b) => a == 100 || b == 100 || a + b == 100;
// console.log(isEqualTo100(90, 0));

// Write a function which return file type.
// const getFileExtension = (str) => str.slice(str.lastIndexOf("."));
// console.log(getFileExtension("index.js"));

// Learning with Slice() method

// const arr = [
//   1,
//   2,
//   (3, 4, 5, 6),
//   (8, 9),
//   (2, 01, 9, 9, 8, 1),
//   9,
//   3,
//   3,
//   10,
//   12,
//   12,
// ];
// console.log(arr.slice(1, 19));

// Check existence of an element within an array
// There are two ways to check wether an element is exist in an array or not
// 01# By using indexOf()
// 02# By Using includes()
// Recommended: indexOf() , it is more faster than includes
// const checkElement = (arr) => arr.indexOf(3) >= 0;
// const checkElement = (arr) => arr.includes(0);
// console.log(checkElement([2, 3, 4, 5, 9, 6]));

// Mostly Occurred element of an array

// function mostOcc(arr) {
//   // STEP 1: make an empty object
//   const obj = {};
//   // STEP 2: Set number of times and value of the element in an object
//   for (const value of arr) {
//     obj[value] = (obj[value] || 0) + 1;
//   }
//   // STEP 3: set Mostly Occur value and highest Number of value in a variable
//   let mostlyOcc = null;
//   let highestNum = 0;
//   //   STEP 4:
//   for (const [value, count] of Object.entries(obj)) {
//     if (count > highestNum) {
//       mostOcc = value;
//       highestNum = count;
//     }
//   }
//   return mostOcc;
// }

// console.log(mostOcc([1, 2, 3, 3]));

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };
// for (let a in person) {
//   console.log(a);
// }
// delete person["age"];

// console.log(person);

// const obj = {
//   cars: [
//     { name: "corola", model: ["x", "y", "Z"] },
//     { name: "honda", model: ["2", "3", "4"] },
//     { name: "suzuki", model: ["s", "d", "f"] },
//     { name: "corola", model: ["4", "5", "6"] },
//   ],
// };

// for (let i in obj.cars) {
//   console.log(obj.cars[i].name);
//   for (let j in obj.cars[i].model) {
//     console.log(obj.cars[i].model[j]);
//   }
// }

// Write a javascript function which display current date and time

// function currDateTime() {
//   const date = new Date();
//   const month = date.getMonth() + 1;
//   //   to check the day of the week we can use getDay method
//   //   const day = date.getDay() +
//   const days = date.getDate();
//   const year = date.getFullYear();
//   return `${month}-${days}-${year}`;
// }
// console.log(currDateTime());

//  write a js function which create a new string adding "New!" in the front of a given string but if string already begins with "New!" it return original one
// const checkNew = (str) => (str.includes("new") ? str : `New! ${str}`);
// But if we have to check either a string start from new keyword or not
// const addNew = (str) => (str.indexOf("New!") === 0 ? str : `New! ${str}`);

// console.log(addNew("Sajjad Ali new"));

// Write a javaScript function which create a new string with first and last 3 character of the string , string length must be 3 or more if not return original one
// const checkStr = (str) => {
//   const last3Char = str.slice(-3);
//   const first3Char = str.slice(0, 3);
//   return str.length >= 3 ? `${first3Char}${last3Char}` : str;
// };
// console.log(checkStr("asasdfssaf"));

// Write a function which takes first half of the string with even length

// const checkFirstHalf = (str) => {
//   const verifyStringEvenOrOdd = (str.length / 2) % 2 === 0;
//   return verifyStringEvenOrOdd
//     ? str.slice(0, str.length / 2)
//     : str.slice(0, str.length / 2 - 1);
// };
// console.log(checkFirstHalf("sajjad alis"));

// const concatStr = (str1, str2) => str1.slice(1) + str2.slice(1);

// console.log(concatStr("sajjad", "Ali"));

// check which is nearest to 100

// const checkNearestTo100 = (a, b) => (100 - a < 100 - b ? a : b);

// console.log(checkNearestTo100(50, 99));

// Write a function to check given string contains 2-4 occurrences of a specified character

// const countChar = (str, char) => str.split("").filter((ch) => ch === char);

// const contains2To4 = (str, char) =>
//   countChar(str, char) > 2 && countChar(str, char) <= 4;

// console.log(contains2To4("oooha", "Sa"));

// Write a javascript function to find an even number from an array of integer

// const EvenNum = (arr) => arr.filter((num) => num % 2 === 0).length;
// console.log(EvenNum([1, 3, 4, 5, 6]));

// Write a javascript function which prints number of even values upto the given number from any array

// const printEvenNum = (arr, a) => {
//   const EvenNum = arr
//     .filter((num) => num % 2 === 0)
//     .filter((num) => num <= a).length;
//   return EvenNum;
// };

// console.log(printEvenNum([1, 2, 2, 3, 4, 5, 5], 3));

// Write a javascript function which check wether a given array is sorted ascending.

const checkOrder = (arr) => {
  for (let i of arr) {
    return arr[i + 1] > arr[i];
  }
};

// console.log(checkOrder([1, 2, 3]));

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// const myArray = Object.keys(person);
// // Check properties in object
// const isGenderExist = "gender" in person;
// console.log("🚀 ~ file: index.js:218 ~ isGenderExist", isGenderExist);
// console.log("🚀 ~ file: index.js:216 ~ myArray", myArray);

// write a js function which return highest value from an array

// const highestValue = (arr) => Math.max(...arr);
// const lowestValue = (arr) => Math.min(...arr);
// console.log(highestValue([1, 2, 3, 4, 5]));
// console.log(lowestValue([0, 2, 2, 1, 1, 1, 1]));

// Write a javascript Program which return number of even number from given array of integers
// const evenNum = (arr) => arr.filter((num) => num % 2 == 0).length;
// console.log(evenNum([1, 3, 4, 56, 6, 7, 7, 2, 3, 1, 3]));

// Write a javascript function which return a number of even values upto given number

// const countEvenNum = (arr, a) =>
//   arr.filter((num) => num % 2 == 0).filter((num) => num < a).length;

// console.log(countEvenNum([1, 2, 3, 4, 4, 5, 6, 6, 6, 6], 2));

// Write a function in javascript which return largest even number from a given array

// const largestEvenNum = (arr) => Math.max(...arr.filter((num) => num % 2 == 0));
// console.log(largestEvenNum([1, 2, 3, 4, 5, 6, 6]));

// Write a javascript program which convert a first digit of the string(should contain digit) with $

// const digitConverter = (str) => "$" + str.slice(1);
// console.log(digitConverter("sajjadali"));

// const replaceFirstDigit = (str) => str.replace(/[0-9]/, "$");
const replaceFirstDigit = (str) => str.replace(/\d/, "$");
// console.log(replaceFirstDigit("1234565"));

// Write a function which return true if given year is a leap year
const checkLeapYear = (year) =>
  year % 4 === 0 ? "Leap Year" : "Not Leap year";
// console.log(checkLeapYear(2001));

// Write a javascript function which return a string in an alphabetical order

const alphabeticalOrder = (str) => str.split("").sort().join("");

// console.log(alphabeticalOrder("sajjjada"));

// Write a function in javascript which takes a string and count number of vowels in a string

const countVowels = (str) => {
  let vowels = [];
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      vowels.push(str[i]);
    } else null;
  }
  return vowels.length;
};

// console.log(countVowels("asdfghjklqwertyuiopzxcvbnm"));

// Write a javascript function which return a unique characters of the string

const uniqueChar = (str) => {
  return str
    .split("")
    .filter((char, index, arr) => arr.indexOf(char) === index)
    .join();
};
// console.log(uniqueChar("Allah"));
