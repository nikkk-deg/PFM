let buttons = document.querySelectorAll('.button');
let numberBar = document.getElementById('numbers');

const ACTION = {
    SUM: '+',
    DIFFERENCE: '-',
    MULTIPLICATION: '×',
    DIVISION: '÷',
    EQUAL: '=',
    DELETE_LAST_SYMBOL: 'delete',
}


function checkActionInNumberBur(str){
   return str.includes(ACTION.SUM) || str.includes(ACTION.MULTIPLICATION) || str.includes(ACTION.DIFFERENCE) || str.includes(ACTION.DIVISION);
}

function whatTheActionInNumberBar(str){
    if (checkActionInNumberBur(str)){
        for (let strElement of str) {
            if (isNaN(Number(strElement))){
                for (let objElement in ACTION) {
                    if (ACTION[objElement] === strElement){
                        return ACTION[objElement];
                    }
                }
            }
        }
    }
}

function showResultOfCalculation(str, a, b){
    let action = whatTheActionInNumberBar(str);
    switch (action){
        case ACTION.SUM:
            numberBar.innerHTML = String(a + b);
            break;
        case ACTION.DIVISION:
            alert('Rounded to the nearest integer');
            numberBar.innerHTML = String(Math.round(b / a));
            break;
        case ACTION.DIFFERENCE:
            numberBar.innerHTML = String(b - a);
            break;
        case ACTION.MULTIPLICATION:
            numberBar.innerHTML = String(a * b);
            break;
        default:
            break;
    }
}

function getNums(arr){
    arr = arr.split('');
    let firstNum = '';
    let secondNum = '';
    for (let element of arr){
        if (!(isNaN(Number(element)))){
            firstNum += element
        }
        else if (isNaN(Number(element))){
            secondNum = firstNum;
            firstNum = '';
        }
    }
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    return {firstNum: firstNum, secondNum: secondNum};
}

function checkRepeatAction(){
    switch (numberBar.textContent.charAt(numberBar.textContent.length - 1)){
        case ACTION.SUM:
            return true;
        case ACTION.MULTIPLICATION:
            return true;
        case ACTION.DIFFERENCE:
            return true;
        case ACTION.DIVISION:
            return true;
        default:
            break;
    }
}

function deleteRepeatAction(){
    if(checkRepeatAction()){
        numberBar.innerHTML = numberBar.innerHTML.slice(0,-1);
    }
}

function makeCalculation(){
    deleteRepeatAction();
    let firstNumber = getNums(numberBar.textContent).firstNum;
    let secondNumber = getNums(numberBar.textContent).secondNum;
    showResultOfCalculation(numberBar.textContent, firstNumber,secondNumber);
}

function printSymbolInNumberBur(button){
    if (numberBar.textContent.length > 6){
        alert('Number is too long!');
    }
    else{
        if (!(numberBar.textContent.length === 0 && isNaN(Number(button.textContent)))){
            numberBar.innerHTML += button.textContent;
        }
    }
}

function deleteLastSymbol(){
    numberBar.innerHTML = numberBar.textContent.slice(0,this.length - 1);
}



for (let button of buttons) {
    button.addEventListener('click',() => {
        switch (button.textContent){
            case 'C':
                numberBar.innerHTML = null;
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                printSymbolInNumberBur(button);
                break;
            case ACTION.DIVISION:
                makeCalculation();
                printSymbolInNumberBur(button);
                break;
            case ACTION.MULTIPLICATION:
                makeCalculation();
                printSymbolInNumberBur(button);
                break;
            case ACTION.DIFFERENCE:
                makeCalculation();
                printSymbolInNumberBur(button);
                break;
            case ACTION.SUM:
                makeCalculation();
                printSymbolInNumberBur(button);
                break;
            case ACTION.EQUAL:
               showResultOfCalculation(numberBar.textContent, getNums(numberBar.textContent).firstNum, getNums(numberBar.textContent).secondNum);
                break;
            case ACTION.DELETE_LAST_SYMBOL:
                deleteLastSymbol();
                break;

            default:
                break;
        }
    });
}

