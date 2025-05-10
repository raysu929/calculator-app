const add = function (num1, num2) {
    return num1 + num2;
};

const subtract = function (num1, num2) {
    return num1 - num2;
};

const multiply = function (num1, num2) {
    return num1 * num2;
};

const divide = function (num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero"
    }
    return num1 / num2;

};

const operate = function (num1, num2, operator) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        if (num2 === 0) {
            return "Error: Division by 0";
        }
return divide(num1, num2);
    } else {
        return "Invalid Operator";
    }
};

const display = document.getElementById("display");
let currentInput = "";
let firstNumber = null;
let secondNumber = null;
let currentOperator = null;

const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");

digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        display.textContent = currentInput;
});
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentInput === "") return;
        firstNumber = parseFloat(currentInput);
        currentOperator = button.textContent;
        currentInput = "";
    });
});

equalsButton.addEventListener("click", () => {
    if (currentInput === "" || firstNumber === null || currentOperator === null) return;
    secondNumber = parseFloat(currentInput);
    const result = operate(firstNumber, secondNumber, currentOperator);
    display.textContent = result;

    currentInput = result.toString();
    firstNumber = null;
    secondNumber = null;
    currentOperator = null;
});

clearButton.addEventListener("click", () => {
    currentInput = "";
    firstNumber = null;
    secondNumber = null;
    currentOperator = null;
    display.textContent = "";
});
