function Multiplication (num1: number, num2: number) {
    let action: number = num1 * num2;
    console.log(action);
};

function Addition (num1: number, num2: number) {
    let action: number = num1 + num2;
    console.log(action);
};

function Subtraction (num1: number, num2: number) {
    let action: number = num1 - num2;
    console.log(action);
};

function Division (num1: number, num2: number) {
    let action: number = num1 / num2;
    console.log(action);
};

function Square(num1: number, num2: number) {
    let action: number = num1 ** num2;
    console.log(action);
}

// To perform an operation, you just have to write the name of the Function that you want to perform on the two numbers which should be separated by a comma and should be in a pair of parentheses/brackets. Some examples have been done for you.

Addition(65, 77);
Division(24,3);
Multiplication(34,3);
Subtraction(60, 30);
Square(5,2);