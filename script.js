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
        return "Nice try. You can't divide by 0.";
    }
    return num1 / num2;

};

const roundResult = num => Math.round(num * 1000) / 1000;

const operate = function (num1, num2, operator) {
    let result;

    if (operator === '+') {
        result = add(num1, num2);
    } else if (operator === '-') {
result = subtract(num1, num2);
    } else if (operator === '*') {
        result = multiply(num1, num2);
    } else if (operator === '/') {
        if (num2 === 0) {
            return "Nice try. You can't divide by 0";
        }
result = divide(num1, num2);
    } else {
     return "Invalid Operator";
    }

    return typeof result === "number" ? roundResult(result) : result;
};

const display = document.getElementById("display");
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");

let currentInput = "";
let firstNumber = null;
let secondNumber = null;
let currentOperator = null;
let shouldResetDisplay = false;

digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (shouldResetDisplay) {
            currentInput = "";
            shouldResetDisplay = false;
        }
        currentInput += button.textContent;
        display.textContent = currentInput;
});
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentInput === "") return;

        if (firstNumber!== null && currentOperator !== null) {
            secondNumber = parseFloat(currentInput);
            const result = operate(firstNumber, secondNumber, currentOperator);
            display.textContent = result;
            firstNumber = typeof result === "number" ? result : null;
            currentInput = "";
            currentOperator = button.textContent;
            shouldResetDisplay = true;
            return;
        }

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

    currentInput = typeof result === "number" ? result.toString() : "";
    firstNumber = null;
    secondNumber = null;
    currentOperator = null;
    shouldResetDisplay = true;
});

clearButton.addEventListener("click", () => {
    currentInput = "";
    firstNumber = null;
    secondNumber = null;
    currentOperator = null;
    display.textContent = "";
    shouldResetDisplay = false;
});
