const intputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(intputBox.value===''){
        alert("You must write something!");
    }
     else {
        let li = document.createElement("li");
        li.innerHTML = intputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    intputBox.value = "";
}