const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
}

const DEFAULT = STATUS.TO_DO;

const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "ToDo",
}

function changeStatus(name, status){
    if (name in list){
        list[status] = status;
    }
}

function addTask(name){//checking that the task already in list
    if (!(name in list)){
        list[name] = DEFAULT;
    }
}

function deleteTask(name){
    if (name in list){
        delete list[name];
    }
}

function showList(){
    const tasks = {
        [STATUS.TO_DO]: '',
        [STATUS.IN_PROGRESS]: '',
        [STATUS.DONE]: '',
    }

    for (let key in list) {
        tasks[list[key]] += "  " + key + "\n";
    }

    if (tasks[STATUS.TO_DO] === ""){
        tasks[STATUS.TO_DO] = ' -';
    }
    if (tasks[STATUS.IN_PROGRESS] === ""){
        tasks[STATUS.IN_PROGRESS] = ' -';
    }
    if (tasks[STATUS.IN_PROGRESS] === ""){
        tasks[STATUS.DONE] = ' -';
    }

    console.log(`${STATUS.TO_DO}:\n${tasks[STATUS.TO_DO]}\n${STATUS.IN_PROGRESS}:\n${tasks[STATUS.IN_PROGRESS]}\n${STATUS.DONE}:\n${tasks[STATUS.DONE]}`);
}

showList();