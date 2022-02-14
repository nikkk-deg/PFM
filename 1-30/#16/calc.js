function isValueValid(firstNumber, secondNumber){
    return Number(firstNumber) && Number(secondNumber);
}

function Calc(operation, firstNumber, secondNumber){
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    const operations = {
        'sub': firstNumber - secondNumber,
        'sum': firstNumber + secondNumber,
        'mult': firstNumber * secondNumber,
        'div': firstNumber / secondNumber,
    };
    if(isValueValid(firstNumber, secondNumber)) {
        if (operation in operations) return operations[operation];
        else return "Unknown operation";
    }else return "Error";
}



console.log(Calc("sum",2,3));
console.log(Calc("sum","2",3));
console.log(Calc("sum",2,"fg"));
console.log(Calc("mod",2,3));
console.log(Calc("mod",2,0));
console.log(Calc("div",2,0));
console.log(Calc("sumfff",2,3));
console.log(Calc("sum",2));
console.log(Calc("2",3));
