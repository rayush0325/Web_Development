let count = 0;//how the value of count is being retained?
//when does the javaScript code re-run?
function counter(){
    let element = document.querySelector('h1');//fetching h1
    //increasing the value of count and modifying the content of h1 with the new value
    element.innerHTML = ++count;
    if(count%10 === 0){
        //alert(count+' is the multiple of 10');
        alert(`${count} is multiple of 10`);//template literal
    }
}
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('button').onclick = counter;
});