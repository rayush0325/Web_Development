var key=0;
var blank=[];
function addTask(task){
    //checking blank spaces in the list
    if(blank.length!=0){
        //filling new task in blank space
        let empty_id=blank[blank.length-1];
        blank.pop();
        localStorage.setItem(empty_id,task);
    }
    else{
        key++;
        localStorage.setItem(key,task);
    }
}
function removeTask(task){
    for(let i=1;i<=key;i++){
        //searching task to find its corresponding key
        if(localStorage.getItem(i)===task){
            localStorage.removeItem(i);
            //saving index of deleted task(blank space)
            blank.push(i);           
        }
    }
}
function currentList(){
    console.log("current list of tasks");
    for(let i=1;i<=key;i++){
        let item=localStorage.getItem(i);
        if(item!=null){
            console.log(item);
        }
    }
    
}
addTask("w1");
addTask("w2");
addTask("w3");
addTask("w4");
addTask("w5");
addTask("w6");
currentList();

removeTask("w2");
removeTask("w4");
removeTask("w5");
currentList();

addTask("w7");
addTask("w8");
currentList();

addTask("w9");
addTask("w10");
addTask("w11");
currentList();