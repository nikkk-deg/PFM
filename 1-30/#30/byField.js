function byField(str){
    return (a,b) => a[str] > b[str] ? 1 : -1;
}


let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

console.log(users.sort(byField('name')));