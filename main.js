//get all elements
let inputElement = document.querySelector("input[name='tasksInput']");
let sumbitElement = document.querySelector("input[name='enterInput']");
let outputElement = document.querySelector(".userTasks");
var removeElement;
//import localStorage

if (Object.keys(window.localStorage).length > 0) {
    for (let i = window.localStorage.length - 1; i >= 0; i--) {
        let oldElement = document.createElement("div");
        oldElement.innerHTML =`<span>${Object.keys(window.localStorage)[i]}</span><button>remove task</button>`;
        outputElement.appendChild(oldElement);
        removingTasks();
    }
}
//adding and removing functions

function removingTasks() {
    removeElement = document.querySelectorAll(".userTasks > div button");
    removeElement.forEach(item => item.addEventListener("click",function () {
        window.localStorage.removeItem(item.parentElement.firstChild.textContent);
        item.parentElement.remove();
    }))
}

function addingRemovingTasks() {
    window.localStorage.setItem(inputElement.value,`task`);
    let newElement = document.createElement("div");
    newElement.innerHTML = `<span>${inputElement.value}</span><button>remove task</button>`;
    outputElement.appendChild(newElement);
    removingTasks();
}

//warning function

function warning() {
    //*parent element
    let warningElement = document.createElement("div");
    warningElement.classList.add("myAlert");
    //image element
    let picContainer = document.createElement("img");
    picContainer.setAttribute("src","warning.png");
    picContainer.setAttribute("alt","picture of alert");
    picContainer.classList.add("warning-image");
    //title element
    let title = document.createElement("h2");
    title.innerText = "warning";
    title.style.cssText = "text-transform: upperCase";
    //paragraph element
    let paragraph = document.createElement("p");
    paragraph.innerHTML = "pleas put your task first<br/>before clicking on the 'add task' button";
    paragraph.style.cssText = "text-align: center";
    //button elemnent
    let confirmBtn = document.createElement("button");
    confirmBtn.classList.add("confirmBtn");
    confirmBtn.innerText = "OK";
    //appending elements
    warningElement.appendChild(picContainer);
    warningElement.appendChild(title);
    warningElement.appendChild(paragraph);
    warningElement.appendChild(confirmBtn);
    document.body.appendChild(warningElement);
    confirmBtn.addEventListener("click",function () {
        warningElement.remove();
    })
}



document.forms[0].onsubmit = function (e) {
    e.preventDefault();
    if (inputElement.value != "" && document.querySelector(".myAlert") === null) {
        addingRemovingTasks();
    } else if (document.querySelector(".myAlert") === null) {
        window.setTimeout(warning,100);
    }
    inputElement.value = ""
}




