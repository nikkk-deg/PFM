const toDo = 'To Do';
const inProgress = 'In Progress';
const done = 'Done';

const list = {

    changeStatus(key, status){
        let isStatusValid = status === toDo || status === inProgress || status === done;
        if(isStatusValid){
            if(key in this){
                return this[key] = status;
            }else console.log(key + ' - The value not in the object\n');
        }else console.log('Invalid status');
    },

    addTask(key){
        this[key] = toDo;
    },

    deleteTask(key){
        if(key in this){
            delete this[key];
        }else console.log('The value not in the object');
    },

    showList(){
        this.showTasks(toDo);
        this.showTasks(inProgress);
        this.showTasks(done);
     },

    showTasks(status){
        let isStatusValid = status === toDo || status === inProgress || status === done;
        if (isStatusValid){
            let flag = false;
            console.log(status + ':');
            for (let key in this) {
                if(this[key] === status){
                    console.log('  ' + key);
                    flag = true;
                }
            }
            if (flag === false) console.log('  -');
        }else console.log('Invalid status');
    },

    "make a bed": "Done",
}

list.addTask('have a walk');
list.addTask('make a bed');
list.addTask('gym');
list.addTask('gym2');
list.addTask('gym3');

list.deleteTask('make a bed');

list.changeStatus('rgrgreg', inProgress);
list.changeStatus('have a walk', done);
list.changeStatus('gym', inProgress);

list.showList();

console.log(list);