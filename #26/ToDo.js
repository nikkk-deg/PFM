const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
}

const PRIORITY = {
    HIGH: 'high',
    LOW: 'low',
}

const DEFAULT_STATUS = STATUS.TO_DO;
const DEFAULT_PRIORITY = PRIORITY.HIGH;

const list = [
    {name: 'create post', status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH},
    {name: 'test', status: STATUS.DONE, priority: PRIORITY.HIGH},
    {name: 'have a walk', status: STATUS.TO_DO, priority: PRIORITY.LOW},
];

function changeStatus(name,statusToReplace){
   list.forEach((item) => {
       if (item.name === name){
          item.status = statusToReplace;
       }
   })
}

function changePriority(name, priorityToReplace){
    list.forEach((item) => {
        if (item.name === name){
            item.priority = priorityToReplace;
        }
    })
}

function addTask(name){
    if(!(list.includes(name))){
        list[list.length] = {
            name: name,
            status: DEFAULT_STATUS,
            priority: DEFAULT_PRIORITY,
        }
    }
}

function deleteTask(name){
    if (list.findIndex(item => item.name === name)){
        list.splice(list.findIndex(item => item.name === name),1);
    }
}

function showBy(statusOrPriority){
    if (statusOrPriority === 'status'){
        const tasks = {
            [STATUS.TO_DO]: "",
            [STATUS.IN_PROGRESS]: "",
            [STATUS.DONE]: "",
        }

        list.forEach((item) => {
            tasks[item.status] += `  ${item.name}\n`;
        });

        if (tasks[STATUS.TO_DO] === ""){
            tasks[STATUS.TO_DO] = ' -';
        }
        if (tasks[STATUS.IN_PROGRESS] === ""){
            tasks[STATUS.IN_PROGRESS] = ' -';
        }
        if (tasks[STATUS.DONE] === ""){
            tasks[STATUS.DONE] = ' -';
        }

        console.log(`${STATUS.TO_DO}:\n${tasks[STATUS.TO_DO]}\n${STATUS.IN_PROGRESS}:\n${tasks[STATUS.IN_PROGRESS]}\n${STATUS.DONE}:\n${tasks[STATUS.DONE]}`);

    }else if (statusOrPriority === 'priority'){
        const tasks = {
            [PRIORITY.HIGH]: '',
            [PRIORITY.LOW]: '',
        }

        list.forEach((item) => {
            tasks[item.priority] += `  ${item.name}\n`;
        });

        if (tasks[PRIORITY.HIGH] === ""){
            tasks[PRIORITY.HIGH] = "  -"
        }
        if (tasks[PRIORITY.LOW] === ""){
            tasks[PRIORITY.LOW] = "  -"
        }

        console.log(`${PRIORITY.HIGH}:\n${tasks[PRIORITY.HIGH]}\n${PRIORITY.LOW}:\n${tasks[PRIORITY.LOW]}`)

    }

}

changePriority('test', PRIORITY.LOW);
addTask('fo22[g2');
addTask('f2');
changeStatus('f2', STATUS.IN_PROGRESS);
changePriority('fo22[g2', PRIORITY.LOW);
deleteTask('test');

showBy('status');
showBy('priority');
