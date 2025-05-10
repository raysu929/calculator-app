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