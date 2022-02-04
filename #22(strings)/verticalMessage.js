function showVerticalMessage(str){
    let m = "м"
    let result = str.startsWith(m) ? m.toUpperCase() : str[0];
    for (let strElement of str.slice(1,10)) {
        result += `\n${strElement}`;
    }
    return result;
}

console.log(showVerticalMessage('марафон'));