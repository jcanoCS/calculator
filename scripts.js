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

const upperScreen = document.getElementById('upper-screen');
const lowerScreen = document.getElementById('lower-screen');
/* ************************************************************************** */



//                  HELPER FUNCTIONS TO DISPLAY VALUES
/* ************************************************************************** */
function updateResultDisplay(result) {
    topResultDisplayedText = result;
    clearBottomDisplay();
}

function updateBottomScreen(input) {
    lowerScreen.innerText = input;
}

function clearBottomDisplay() {
    bottomInputDisplayedText = '';
    lowerScreen.innerText = '';
}

function clearTopDisplay() {
    topResultDisplayedText = '';
    upperScreen.innerText = '';
}

function addInputText(character) {
    bottomInputDisplayedText += character;
    updateBottomScreen(bottomInputDisplayedText);
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

function enableDisplay() {
    const upper = document.querySelector('h2.upper');
    const lower = document.querySelector('h2.lower');

    let upperText = document.createTextNode(topResultDisplayedText);
    let lowerText = document.createTextNode(bottomInputDisplayedText);

    upper.appendChild(upperText);
    lower.appendChild(lowerText);
}


enableDigits();


