/*

In JavaScript we have the following conditional statements:
--  Use if to specify a block of code to be executed, if a specified condition is true
--  Use else to specify a block of code to be executed, if the same condition is false
--  Use else if to specify a new condition to test, if the first condition is false
--  Use switch to specify many alternative blocks of code to be executed
*/

// if Statement 

// Example:
if (hour < 18) {
    greeting = "Good day";
}


// else Statement

// Example-1:
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// Example-2:WAP to check a leap year.
let year = prompt("Enetr A Year : ");
let y = parseInt(year);
if (y % 4 == 0) {
    console.log(y, "is a leap year.");
}
else {
    console.log(y, "is not a leap year.");
}







// else if Statement

// Example-1:
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// Example-2: WAP to check positive and negative numbers.
let num = prompt("Enetr A Number : ");
n = parseInt(num)
if (n < 0) {
    console.log(n, "is a Negative Number.");
}
else if (n > 0) {
    console.log(n, "is a Positive Number.");
}
else {
    console.log(n, "is not a Number");
}


// Example-2: WAP to check the text is a Alphabet,Number or special character.
let a = prompt("Enter Something : ");
if (a >= "a" && a <= "z") {
    console.log(a, "is a Alphabet.");
}
else if (a >= "0" && a <= "9") {
    console.log(a, "is a Number.");
}
else {
    console.log(a, "is a special character.");
}


// Example-3: WAP to check the largest number between three number.
let a = parseFloat(prompt("Enter a value for a : "));
let b = parseFloat(prompt("Enter a value for b : "));
let c = parseFloat(prompt("Enter a value for c : "));
if (a >= b && a >= c) {
    console.log(a, "is a greatest number among another two number.");
}
else if (b >= a && b >= c) {
    console.log(b, "is a greatest number among another two number.");
}
else {
    console.log(c, "is a greatest number among another two number.");
}

// A major project on the else if statement.
/*
## Algoritm for this code
step 1 - start
step 2 - print the choices for the user as 1 for circle ,2 for square and 3 for rectangle
step 3 - if user choice is 1 - Then ask again the circumference of circle or area of circle
step 4 - for circumference - 2xpixr and for area of circle - pixr^2, then print the corresponding values
step 5 - if user choice is 2 - Then ask again the area of square or perimeter of square 
step 6 - for area of square - s*s and foe perimeter of square - 4*s, then print the corresponding values
step 7 - if user choice is 3 - Then ask again the area of rectangle or perimeter of rectangle 
step 8 - for area of rectangle - l*b and foe perimeter of rectangle - 2*(l + b), then print the corresponding values
step 9 - if user chooses the wrong choice throw a message "something went wrong"
step 10 - stop
*/

let choose = parseInt(prompt("Choose a option \n1. Circle\n2. Square \n3. Rectangle\n Enter your value : "));
if (choose == 1) {
    let c_choose = parseInt(prompt("Your choice is CIRCLE.\nChoose a option \n1. Area\n2. Circumference\n3. Arc length\n Enter your value : "));
    let pi = 3.14;
    let r = parseInt(prompt("Enter A Value For Radius : "));
    if (c_choose == 1) {
        let a = pi * (r ** 2);
        console.log("Area of Circle is ", a);
    }
    else if (c_choose == 2) {
        let c = 2 * pi * r;
        console.log("Circumference of Circle is ", c);
    }
    else if (c_choose == 3) {
        let d = parseInt(prompt("Enter the angle of the sector : "));
        let a = 2 * pi * r * (d / 360);
        console.log("Arc length is ", a);
    }
    else {
        console.log("Something Went Wrong.");
    }
}
else if (choose == 2) {
    let c_choose = parseInt(prompt("Your choice is SQUARE.\nChoose a option \n1. Area\n2. Perimeter\n Enter your value : "));
    let s = parseInt(prompt("Enter the side : "));
    if (c_choose == 1) {
        let a = s * s;
        console.log("Area of square is ", a);
    }
    else if (c_choose == 2) {
        let p = 4 * s;
        console.log("Perimeter of square is ", p);
    }
    else {
        console.log("Something Went Wrong.");
    }
}
else if (choose == 3) {
    let c_choose = parseInt(prompt("Your choice is RECTANGLE.\nChoose a option \n1. Area\n2. Perimeter\n Enter your value : "));
    let l = parseInt(prompt("Enter the length : "));
    let b = parseInt(prompt("Enter the breadth : "));

    if (c_choose == 1) {
        a = l * b
        console.log("Area of rectangle is ", a);
    }
    else if (c_choose == 2) {
        let p = 2 * (l + b);
        console.log("Perimeter of rectangle is ", p);
    }
    else {
        console.log("Something Went Wrong.");
    }
}
else {
    console.log("Something Went Wrong.");
}