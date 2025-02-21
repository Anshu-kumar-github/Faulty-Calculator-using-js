function sum(a, b) {
    let result = a + b;
    console.log("Sum:", result);
}

function sub(a, b) {
    let result = a - b;
    console.log("Subtraction:", result);
}

function div(a, b) {
    if (b === 0) {
        console.log("Division by zero is not allowed");
        return;
    }
    let result = a / b;
    console.log("Division:", result);
}

function mul(a, b) {
    let result = a * b;
    console.log("Multiplication:", result);
}

function expo(a, b) {
    let result = a ** b;
    console.log("Exponentiation:", result);
}

console.log(Math.random()); 

let a = parseFloat(prompt("Enter the number a:"));
let b = parseFloat(prompt("Enter the number b:"));

if (Math.random() < 0.1) {
    console.log("Addition of two numbers is:");
    sum(a, b);

    console.log("Multiplication of two numbers is:");
    mul(a, b);

    console.log("Subtraction of two numbers is:");
    sub(a, b);

    console.log("Division of two numbers is:");
    div(a, b);
} else {
    console.log("Addition of two numbers is:");
    sum(a, b);

    console.log("Multiplication of two numbers is:");
    mul(a, b);

    console.log("Subtraction of two numbers is:");
    sub(a, b);

    console.log("Division of two numbers is:");
    div(a, b);
}
