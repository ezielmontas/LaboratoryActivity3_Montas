// Laboratory Activity 3

let baseNumber = 1; // Last digit of student ID

// Problem 1: Grade Calculator 
console.log("=== Problem 1: Grade Calculator ===");

let score = baseNumber * 10 + 5;
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Base Number: " + baseNumber);
console.log("Score: " + score);
console.log("Grade: " + grade);
console.log("\n");

// Problem 2: Star Pattern 
console.log("=== Problem 2: Star Pattern ===");

let rows = baseNumber + 2;
for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
console.log("\n");

// Problem 3: Prime Number Checker 
console.log("=== Problem 3: Prime Number Checker ===");

let numToCheck = baseNumber + 10;
let isPrime = true;

if (numToCheck <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(numToCheck); i++) {
        if (numToCheck % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log("Number to check: " + numToCheck);
console.log(isPrime ? "Prime Number" : "Not a Prime Number");
console.log("\n");

// Problem 4: Multiplication Table 
console.log("=== Problem 4: Multiplication Table ===");

console.log("Multiplication Table of " + baseNumber);
for (let i = 1; i <= 10; i++) {
    console.log(baseNumber + " x " + i + " = " + (baseNumber * i));
}