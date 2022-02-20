const cssSelectorOfButtons = '.button';
const cssSelectorOfNumbers = 'numbers';

const buttons = document.querySelectorAll(cssSelectorOfButtons);
const numberBar = document.getElementById(cssSelectorOfNumbers);

const BUTTONS = {
    SUM: '+',
    DIFFERENCE: '-',
    MULTIPLICATION: '×',
    DIVISION: '÷',
    EQUAL: '=',
    DELETE_LAST_SYMBOL: 'delete',
    NUMBERS: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    C_BUTTON: 'C',
}

const ACTION = {
    GET_NUMBERS(){
        this.FIRST_NUMBER = getNums(numberBar.textContent).firstNum;
        this.SECOND_NUMBER = getNums(numberBar.textContent).secondNum;
    },
    SUM(){
        numberBar.innerHTML = String(this.FIRST_NUMBER + this.SECOND_NUMBER);
    },
    DIFFERENCE(){
    numberBar.innerHTML = String(this.FIRST_NUMBER - this.SECOND_NUMBER);
    },
    MULTIPLICATION(){
        numberBar.innerHTML = String(this.FIRST_NUMBER * this.SECOND_NUMBER)
    },
    DIVISION(){
        alert(`Result = ${this.FIRST_NUMBER / this.SECOND_NUMBER}!\nBut it has rounded in number bar.`)
        numberBar.innerHTML = String(Math.round(this.FIRST_NUMBER / this.SECOND_NUMBER))
    },
}

const FONT_SIZE = {
    SMALL: 'font-size: 35px',
    MEDIUM: 'font-size: 50px',
    NORMAL: 'font-size: 96px',
}

function checkActionInNumberBar(str){
    for (let operationKey in BUTTONS) {
        if (str.includes(BUTTONS[operationKey])) {
            return operationKey;
        }
    }
}

function showResultOfCalculation(str) {
    ACTION.GET_NUMBERS();
    ACTION[checkActionInNumberBar(str)]();
}

function getNums(arr){
    arr = arr.split('');
    let firstNum = '';
    let secondNum = '';
    for (let element of arr){
        if (!(isNaN(Number(element)))){
            secondNum += element
        }
        else if (isNaN(Number(element))){
            firstNum = secondNum;
            secondNum = '';
        }
    }
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    return {firstNum: firstNum, secondNum: secondNum};
}

function printSymbolInNumberBur(button){
    let lengthOfNumberBar = numberBar.textContent.length;
    let validInput = (!(lengthOfNumberBar === 0 && isNaN(Number(button.textContent))) && lengthOfNumberBar < 13);

    if (validInput){
        numberBar.textContent += button.textContent;
        if (lengthOfNumberBar > 8){
            numberBar.style = FONT_SIZE.SMALL;
        }
        else if (lengthOfNumberBar > 4){
            numberBar.style = FONT_SIZE.MEDIUM;
        }
        else{
            numberBar.style = FONT_SIZE.NORMAL;
        }
    }else{
        alert("It's too long!");
    }
}

function deleteLastSymbol(){
    numberBar.textContent = numberBar.textContent.slice(0,this.length - 1);
}

function checkSymbolInBUTTONS(symbol){
    return symbol === BUTTONS.SUM || symbol === BUTTONS.DIVISION || symbol === BUTTONS.DIFFERENCE || symbol === BUTTONS.MULTIPLICATION;
}

function checkRepeatLastAction(){
    let lastSymbol = numberBar.textContent.charAt(numberBar.textContent.length - 1)
    if (checkSymbolInBUTTONS(lastSymbol)){
        return true;
    }
}

function checkIfActionAlreadyWasInNumberBar(){
    for (let buttonsKey in BUTTONS) {
        if (numberBar.textContent.includes(BUTTONS[buttonsKey])){
            showResultOfCalculation(numberBar.textContent);
        }
    }
}

function deleteRepeatAction(){
    if(checkRepeatLastAction()){
        numberBar.innerHTML = numberBar.innerHTML.slice(0,-1);
    }
}

for (let button of buttons) {
    button.addEventListener('click',() => {

        let symbol = button.textContent;
        let itsCButton = symbol === BUTTONS.C_BUTTON;
        let itsNumber = symbol in BUTTONS.NUMBERS;
        let itsAction = checkSymbolInBUTTONS(symbol);
        let itsDeleteButton = symbol === BUTTONS.DELETE_LAST_SYMBOL;
        let itsEqual = symbol === BUTTONS.EQUAL;

        if (itsNumber){
            printSymbolInNumberBur(button);
        }
        else if(itsAction){
            deleteRepeatAction();
            checkIfActionAlreadyWasInNumberBar();
            printSymbolInNumberBur(button);
        }
        else if (itsDeleteButton){
            deleteLastSymbol();
        }
        else if (itsEqual){
            showResultOfCalculation(numberBar.textContent);
        }
        else if (itsCButton){
            numberBar.textContent = null;
        }
    });
}