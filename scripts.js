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
let topResultDisplayedText = '';
let bottomInputDisplayedText = '';
/* ************************************************************************** */



//                  HELPER FUNCTIONS TO DISPLAY VALUES
/* ************************************************************************** */
function updateResultDisplay(result) {
    topResultDisplayedText = result;
    clearBottomDisplay();
}

function addDisplayInput(character) {
    bottomInputDisplayedText += character;
}

function operate(num1, operator, num2) {
    let result = '';
    updateResultDisplay(result);
}

function clearTopDisplay() {
    topResultDisplayedText = '';
}

function clearBottomDisplay() {
    bottomInputDisplayedText = '';
}
/* ************************************************************************** */



//                  ADDING EVENT LISTENERS TO BUTTONS
/* ************************************************************************** */




