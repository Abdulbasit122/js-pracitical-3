let str1 = " Hello World ";
let trimmedStr1 = str1.trim();
console.log(trimmedStr1);
// Output: "Hello World"

let str2 = "Hello World";
let substring2 = str2.substring(5, 11);
console.log(substring2);
// Output: " World"

let str3 = "Hello World";
let firstFiveChars = str3.substring(0, 5);
console.log(firstFiveChars);
// Output: "Hello"

let str4 = "hello-world";
let splitArray = str4.split("-");
console.log(splitArray);
// Output: ["hello", "world"]

let array5 = ["hello", "world"];
let joinedString = array5.join(" ");
console.log(joinedString);
// Output: "hello world"

let str6 = "Hello World";
let indexO = str6.indexOf("o");
console.log(indexO);
// Output: 4

let str7 = "Hello World World";
let lastIndexWorld = str7.lastIndexOf("World");
console.log(lastIndexWorld);
// Output: 12

let str8 = "World";
let startsWithWor = str8.startsWith("Wor");
console.log(startsWithWor);
// Output: true

let str9 = "Hello World";
let endsWithWorld = str9.endsWith("World");
console.log(endsWithWorld);
// Output: true

let str10 = "Hello";
let includesO = str10.includes("o");
console.log(includesO);
// Output: true
