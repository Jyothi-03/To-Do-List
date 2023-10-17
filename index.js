const inputBox=document.getElementById("input-box");
const lisContainer=document.getElementById("list-container");

function addTask(){
    if (inputBox.value===''){
        alert("You should write something");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        lisContainer.appendChild(li);
    }
    inputBox.value=''
}