/**
Loops
Loops are used to execute a piece of code again & again.
Infinite Loop : A Loop that never ends.
 */


//--------------------------------------------------------------------------------------------//

// for loop

// Example-1:
for (let i = 1; i <= 5; i++) {
    console.log("HELLO! ");
}


// Example-2: WAP to calculate the table for the given number.
let num = 2;
for (let i = 1; i <= 10; i++) {
    console.log(num * i);

}

// Example-3: WAP to print the sum of zero to the given number.
let num1 = 0;
let j = 5;
let i = 1;
for (i; i <= j; i++) {
    num1 += i;
}
console.log(`The sum ${i} : ${num1}`);


//--------------------------------------------------------------------------------------------//

/*
for in loop
The JavaScript for in statement loops through the properties of an Object.
syntax:
        for (key in object) {
            code block to be executed
        }
*/
// Example-1:
const person = {
    fname:"John", 
    lname:"Doe", 
    age:25
};

let text = "";
for (let x in person) {
  text += person[x]; // John Doe 25 
} 


//--------------------------------------------------------------------------------------------//

/*
for of loop
The JavaScript for of statement loops through the values of an iterable object.
synatx:
        for (variable of iterable) {
            code block to be executed
        }
*/
// Example-1:
const cars = ["BMW", "Volvo", "Mini"];

let text1 = "";
for (let x of cars) {
  text1 += x + "<br>";  // output: BMW \nVolvo \nMini
}


//--------------------------------------------------------------------------------------------//

// while Loop

// Example-1: Print a number from 1 to 10.
let a = 1;
while (a <= 10) {
    console.log(a);
    a++;
}

//--------------------------------------------------------------------------------------------//

// do-while Loop

// Example-1: Print a number from 1 to 10.
let b = 1;
do {
    console.log(b);
    b++;
}
while (b <= 10);