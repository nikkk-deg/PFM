const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "ToDo",
}

function changeStatus(key, status){
    if (key in list)  list[key] = status;
}

function addTask(key){
    list[key] = 'ToDo';
}

function deleteTask(key){
    delete list[key];
}

function showTasks(obj, value){
    let count=0;
    console.log(value + ':');
    for (let objKey in obj) {
        if (obj[objKey] === value){
            console.log('  ' + objKey);
            count++;
        }
    }
    if (count === 0) console.log('  -');
}

function showList(obj){
    showTasks(obj, 'ToDo');
    showTasks(obj, 'In Progress');
    showTasks(obj, 'Done');
}

changeStatus('write a post', 'ToDo');
addTask('have a walk');
deleteTask('make a bed');
addTask('read a book');
addTask('gym');
addTask('buy a paper');
changeStatus('gym', 'In Progress');
changeStatus('gym', 'Done');
changeStatus('read a book', 'In Progress');
deleteTask('buy a paper');
addTask('clean bathroom');
deleteTask('gym');

showList(list);
