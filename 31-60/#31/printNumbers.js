// function printNumbers(from, to){
//     let timer = setInterval(function (){
//         console.log(from);
//         if (from === to) clearInterval(timer);
//         from++;
//     }, 1000);
// }

function printNumbers(from, to){
    setTimeout(function tick(){
        console.log(from);
        if (from < to){
            setTimeout(tick,1000);
        }
        from++;
    },1000);
}

printNumbers(1,5);

console.log('14' == true);

