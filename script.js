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
const decimalButtons = document.querySelectorAll(".decimal");
const deleteButton = document.querySelector(".backspace");

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

decimalButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (shouldResetDisplay) {
            currentInput = "";
            shouldResetDisplay = false;
        }

if (!currentInput.includes(".")) {
    currentInput += button.textContent;
    display.textContent = currentInput;
}
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

deleteButton.addEventListener("click", () => {
    if (shouldResetDisplay) return;
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput;
});

function appendDigit(digit) {
    if(shouldResetDisplay) {
        currentInput = "";
        shouldResetDisplay = false;
    }
    currentInput += digit;
    display.textContent = currentInput;
}

function appendDecimal() {
    if (shouldResetDisplay) {
        currentInput = "";
        shouldResetDisplay = false;
    }
    if (!currentInput.includes(".")) {
        currentInput += ".";
        display.textContent = currentInput;
    }
}

function setOperator(operator) {
    if (currentInput === "") return;

    if (firstNumber !== null && currentOperator !== null) {
        secondNumber = parseFloat(currentInput);
        const result = operate(firstNumber, secondNumber, currentOperator);
        display.textContent = result;
        firstNumber = typeof result === "number" ? result : null;
        currentInput = "";
        currentOperator = operator;
        shouldResetDisplay = true;
        return;
    }

    firstNumber = parseFloat(currentInput);
    currentOperator = operator;
    currentInput = "";
}

function evaluate() {
    if (currentInput === "" || firstNumber === null || currentOperator === null) return;
    secondNumber = parseFloat(currentInput);
    const result = operate(firstNumber, secondNumber, currentOperator);
    display.textContent = result;

    currentInput = typeof result === "number" ? result.toString() : "";
    firstNumber = null;
    secondNumber = null;
    currentOperator = null;
    shouldResetDisplay = true;
}

function clear() {
    currentInput = "";
    firstNumber = null;
    secondNumber = null;
    currentOperator = null;
    display.textContent = "";
    shouldResetDisplay = false;
}

function deleteLast() {
    if (shouldResetDisplay) return;
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput;
}

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9 ) {
        appendDigit(e.key);
    }
    if (e.key === ".") {
        appendDecimal();
    }
    if (e.key === "=" || e.key === "Enter") {
        evaluate();
    }
    if (e.key === "Backspace") {
        deleteLast();
    }
    if (e.key === "Escape") {
        clear();
    }
    if (["+", "-", "*", "/"].includes(e.key)) {
        setOperator(e.key);
    }
}
document.addEventListener("keydown", handleKeyboardInput);

