// Javascript String and its methods

// 01- Js String length property

const strLength = (str) => str.length;
// console.log(strLength("Sajjad Ali"));

// 02- Extracting String Parts
// 3 Methods which we used to extract string into parts
// 01: Slice()

const strSlice = (str) => str.slice(3, 6);
// console.log(strSlice("zxcvbnm"));

// console.log("Sajjadali".slice(-4));
// console.log("Sajjadali".slice(-4, -2));
// 02: subString()
// substring is same as like slice() but it not take negative values
// it consider less than 0 values equal to 0
// 03: substr()
// it also same as like slice but when we put second argument it take as a final length of the string
// and if we not pass the second argument it extract rest of the string
// console.log("Hey, let's have a cup of tea".substr(3, 9));
// console.log("Hey, Let's have a cup of tea".substr(3));

// 03 Replacing String content
// Key point of replace()
// 01: replace() method replaces only the first match
// ::for all replaces you have to use regular expression /g flag set

let plan =
  "For me 2024 would be a FAANG year, I will be there inshaAllah,For me it will be happens soon! InshaAllah!";
// console.log(plan.replaceAll(/inshaAllah/g, "Agr allah ny chaha to"));
let offer = "Hey lets have a cup of tea";
// console.log(offer.replace("Hey", "Sajjad"));
// 02: replace() is case sensitive
// ::to make it case insensitive use regular expression /i flag (insensitive)
// console.log(offer.replace(/hey/i, "Sajjad"));
// 04 to make UpperCase or LowerCase

// console.log(offer.toUpperCase());
// console.log(offer.toLocaleLowerCase());

// 05 to concatenate 2 strings

// console.log(offer.concat(" ").concat(plan));

// 06 Trim the string

let text = "i       Sajjad Ali     ";

// 01: trim removes all whiteSpaces from start and end
// console.log(text.trim());

// 02: trimStart(), it removes whiteSpaces from start
// console.log(text.trimStart());
// 03: trimEnd(), it removes whiteSpaces from end
// console.log(text.trimEnd());

// String Padding
// str.padStart() and str.padEnd() add padding to the string
let a = "ps";
// console.log(a.padStart(10, "o"));
// console.log(a.padEnd(4, "x"));

//Extracting character form string with specific positions
// 01: chartAt(position)

let extractCharacter = "May Javascript will long last!";

// console.log(extractCharacter.charAt(9));

// 02: charCodeAt(position)
// console.log(extractCharacter.charCodeAt(1));
// 03: Property Access []
// console.log(extractCharacter[9]);

// 09 Converting a String to an Array

// console.log(extractCharacter.split(""));
