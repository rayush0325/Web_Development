localStorage.setItem('taskList',JSON.stringify([]));
let taskId=0;
function addTask(description){
    let task=createTask(description);
    saveTask(task);
}

function createTask(description){
    let task={
        taskId:++taskId,
        description:description,
        status:'To Do',
        createdAt:getFormattedDate()
    }
    return task;
}
function getFormattedDate(){
    let date=new Date();
    return date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
}
function saveTask(task){
    let list=JSON.parse(localStorage.getItem('taskList'));
    list.push(task);
    localStorage.setItem('taskList',JSON.stringify(list));
    console.log('%cTask Added Successfully','color:green');
}
function viewList(){
    let list=JSON.parse(localStorage.getItem('taskList'));
    if(list===null || list.length==0){
        console.log('To Do List is Empty')
    }
    else{
        for(task of list){
            if(task.taskId !== -1){
                console.log(`%c${task.status} | %c${task.description} | %c${task.createdAt}`,'color:red','color:yellow','color:green');
            }    
        }   
    }
}

function getTaskByStatus(status){
    let list=JSON.parse(localStorage.getItem('taskList'));
    for(task of list){
        if(task.status === status){
            let style;
            if(status === 'To Do'){
                style = 'color:red;'
            }
            else if(status === 'Done'){
                style = 'color:Green;'
            }
            console.log(`%c${task.description}`,style);
        }
    }
}
function deleteTask(taskId){
    let list = JSON.parse(localStorage.getItem('taskList'));
    for(task of list){
        if(task.taskId === taskId){
            task.taskId = -1;
        }
    } 
    localStorage.setItem('taskList', JSON.stringify(list));
}

function markComplete(taskId){
    const list = JSON.parse(localStorage.getItem('taskList'));
    for(task of list){
        if(task.taskId === taskId){
            task.status = 'Done';
        }
    }
    localStorage.setItem('taskList',JSON.stringify(list));
}
function updateTask(taskId, description){
    const list = JSON.parse(localStorage.getItem('taskList'));
    for(task of list){
        if(task.taskId === taskId){
            task.description = description;
        }
    }
    localStorage.setItem('taskList',JSON.stringify(list));
}

viewList();
addTask('Pay bill');
addTask('Go walking');
addTask('Study');
viewList();

console.log();
console.log('Task by Status - To Do');
getTaskByStatus('To Do');

markComplete(1);
markComplete(2);

console.log();
console.log('Task by Status - To Do');
getTaskByStatus('To Do');
console.log();
console.log('Task by Status - Done');
getTaskByStatus('Done');

viewList();

console.log();
console.log('updated task 1');
updateTask(1,'Pay Electricity bill');

viewList();

