/* 
Variables in Js

Variables are container for data.

Rules:
-> Variable names are case sensitive,“a” & “A” is different.
-> Only letters, digits, underscore( _ ) and $ is allowed. (not even space).
-> Only a letter, underscore( _ ) or $ should be 1st character.
-> Reserved words cannot be variable names.

### JavaScript has 8 Datatypes

- String
- Number
- Bigint
- Boolean
- Undefined
- Null
- Symbol
- Object

### The Object Datatype

The object data type can contain both **built-in objects**, and **user defined objects**:

#### Built-in object types can be:
objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.

*/

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25"); 

let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String 


/*
JavaScript BigInt
- All JavaScript numbers are stored in a 64-bit floating-point format.
- JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.
*/

let x = BigInt("123456789012345678901234567890");