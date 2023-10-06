//                      OPERATION FUNCTIONS
/* ************************************************************************** */
function add(a, b) {
    return (a + b);
}

function subtract(minuend, subtrahend) {
    return (minuend - subtrahend);
}

function multiply(a, b) {
    return (a * b);
}

function divide(dividend, divisor) {
    if(divisor == 0) return 'Cannot divide by 0!';
    
    return (dividend / divisor);
}

function modulo(dividend, divisor) {
    return (dividend % divisor);
}

function clear() {
    clearTopDisplay();
    clearBottomDisplay();
    clearDetectedValues();
}
/* ************************************************************************** */



//                    VARIABLES FOR DISPLAY
/* ************************************************************************** */
let detectedNum1 = null;
let detectedNum2 = null;
let detectedOperator = null;
let upperResultText = '';
let lowerInputText = '';
let currentTextPortion = '';

// references to the html elements that control the top and bottom displays
const upperScreen = document.getElementById('upper-screen');
const lowerScreen = document.getElementById('lower-screen');

// array to hold the symbols for operations
const operationsArray = ['-', '%', '÷', 'x', '+'];

/* ************************************************************************** */



//                  HELPER FUNCTIONS TO DISPLAY VALUES
/* ************************************************************************** */
function updateResultDisplay(result) {
    upperScreen.innerText = result;
    clearBottomDisplay();
}

function updateBottomScreen(input) {
    lowerScreen.innerText = input;
}

function clearBottomDisplay() {
    currentTextPortion = '';
    lowerInputText = '';
    lowerScreen.innerText = '';
}

function clearTopDisplay() {
    upperResultText = '';
    upperScreen.innerText = '';
}

function clearDetectedValues() {
    detectedNum1, detectedNum2, detectedOperator = null;
}

function doBackspace() {
    // exit if inputText string is empty
    if(!lowerInputText) return;
    
    // if last character is a space char, delete last 3 characters (operation)
    if(lowerInputText.at(-1) === ' ') {
        lowerInputText = lowerInputText.slice(0, -3);
        updateBottomScreen(lowerInputText);
        return;
    }

    // otherwise, delete only last character
    lowerInputText = lowerInputText.slice(0, -1);
    updateBottomScreen(lowerInputText);
}

function addInputText(character) {
    lowerInputText += character;
    currentTextPortion += character;
    updateBottomScreen(lowerInputText);
}







function addOperationText(symbol) {

    // if no operators have yet been detected, save the previous input as
    // num1
    if (!detectedOperator) {
        detectedNum1 = Number(currentTextPortion);
        detectedOperator = symbol;
        addInputText(' ' + symbol + ' ');
        // reset current text portion after adding the input text to screen
        currentTextPortion = '';
        return;
    }

    // Otherwise, an operator is already present. Perform the previous operation
    // before proceeding
    detectedNum2 = Number(currentTextPortion);
    currentTextPortion = '';
    let result = operate(detectedNum1, detectedOperator, detectedNum2);

    // update the new detected values
    detectedNum1 = result;
    detectedNum2 = null;
    detectedOperator = symbol;
    
    // update the display
    result = result.toString();
    lowerInputText = result + ' ' + symbol + ' ';
    updateBottomScreen(lowerInputText);
}





function operate(num1, operator, num2) {
    let result;

    switch(operator) {
        case '-':
            result = subtract(num1, num2);
            break;
        case '%':
            result = modulo(num1, num2);
            break;
        case '÷':
            if (num2 == 0) {
                alert("Cannot divide by 0!");
                break;
            }
            result = divide(num1, num2);
            break;
        case 'x':
            result = multiply(num1, num2);
            break;
        case '+':
            result = add(num1, num2);
            break;
        default:
            console.log('Error: Operation not found1')
    }

    // return the result as a number
    return result;
}

function enterOperation() {
    // exit if no input is registered
    if (!lowerInputText) return;

    let num1, operator, num2 = '';

    // iterate through input string to determine each part of the operation
    for (let char of lowerInputText) {
        // skip empty spaces
        if (char === ' ') continue;
        
        // operator detected
        else if (operationsArray.includes(char)) {
            operator = char;
        }
        
        // if operator has not yet been detected, add to first number
        else if (!operator) {
            if (num1) num1 += char;
            if (!num1) num1 = char;
        }

        // otherwise, add to the second number 
        else {
            if (num2) num2 += char;
            if (!num2) num2 = char;
        }
    }
    
    // conver to 2 num strings to numbers
    num1 = Number(num1);
    num2 = Number(num2);
    operate(num1, operator, num2);
}




/* ************************************************************************** */



//                  ADDING EVENT LISTENERS TO BUTTONS
/* ************************************************************************** */

function enableDigits() {
    const digits = document.querySelectorAll('btn.digit');
    
    for (let i = 0; i < digits.length; i++) {
        digits[i].addEventListener("click", function() {
            digits[i].disabled = false;
            const value = digits[i].id;
            addInputText(value);
          });
    }
}

function enableClearButton() {
    document.querySelector('#clear').addEventListener('click', clear);
}

function enableDelButton() {
    document.querySelector('#backspace').addEventListener('click', doBackspace);
}

function enableOperationButtons() {
    const operationButtons = document.querySelectorAll('btn.operation');
    for (let i = 0; i < operationButtons.length; i++) {
        operationButtons[i].addEventListener('click', function() {
            const operationSymbol = operationButtons[i].id;
            addOperationText(operationSymbol);
        });
    }
}

function enableEqualsButton() {
    document.getElementById('equals-symbol').addEventListener('click', enterOperation);
}

function initializeCalculator() {
    enableDigits();
    enableClearButton();
    enableDelButton();
    enableOperationButtons();
    enableEqualsButton();
}




//                  INITIALIZE THE CALCULATOR
/* ************************************************************************** */
initializeCalculator();