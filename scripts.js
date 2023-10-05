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
}
/* ************************************************************************** */



//                    VARIABLES FOR DISPLAY
/* ************************************************************************** */
let displayedNum1 = null;
let displayedNum2 = null;
let displayedOperator = null;
let upperResultText = '';
let lowerInputText = '';

// references to the html elements that control the top and bottom displays
const upperScreen = document.getElementById('upper-screen');
const lowerScreen = document.getElementById('lower-screen');


/* ************************************************************************** */



//                  HELPER FUNCTIONS TO DISPLAY VALUES
/* ************************************************************************** */
function updateResultDisplay(result) {
    upperResultText = result;
    clearBottomDisplay();
}

function updateBottomScreen(input) {
    lowerScreen.innerText = input;
}

function clearBottomDisplay() {
    lowerInputText = '';
    lowerScreen.innerText = '';
}

function clearTopDisplay() {
    upperResultText = '';
    upperScreen.innerText = '';
}

function doBackspace() {
    // exit if inputText string is empty
    if(!lowerInputText) return;
    
    // if last character is a space char, delete last 3 characters
    if(lowerInputText.at(-1) == ' ') {
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
    updateBottomScreen(lowerInputText);
}

function addOperationText(symbol) {
    addInputText(' ' + symbol + ' ');
}


function operate(num1, operator, num2) {
    let result = '';
    updateResultDisplay(result);
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


enableDigits();
enableClearButton();
enableDelButton();
enableOperationButtons();


