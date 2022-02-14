//validation of first and second numbers
function isValueValid(firstNumber, secondNumber){
    return Number(firstNumber) && Number(secondNumber);
}
//calculator
function Calc(action, firstNum, secondNum){
    //converting strings to numbers
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    if (isValueValid(firstNum, secondNum)){
        switch (action){
            case "sum":
                return firstNum+secondNum;            
            case "diff":
                return firstNum-secondNum;
            case "mult":
                return firstNum*secondNum;
            case "div":
                return firstNum/secondNum;
            case "mod":
                return firstNum%secondNum;
            case "pow":
                return firstNum**secondNum;
            default:
                return "Неизвестная операция";
        }
    }else{return "Error"}
}
//function check
console.log(Calc("sum",2,3));
console.log(Calc("sum","2",3));
console.log(Calc("sum",2,"fg"));
console.log(Calc("mod",2,3));
console.log(Calc("mod",2,0));
console.log(Calc("div",2,0));
console.log(Calc("sumfff",2,3));
console.log(Calc("sum",2));
console.log(Calc("2",3));




