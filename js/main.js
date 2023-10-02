let ul = document.querySelector("ul")
let input = document.querySelector("input")

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

document.querySelector(".add").addEventListener("click", addTask)

function addTask() {
    if (input.value !== "") {
        let li = document.createElement("li") //creates bullet point
        ul.appendChild(li) //adds bullet point to list
        li.innerText = input.value //adds task to bullet point
        input.value = "" //clears input
    }
    saveData()
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

//li gains class "completed" upon click; CSS makes elements w. class "completed" have black heart and crossed out text
ul.addEventListener("click", completed)
function completed(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed")
    }
    saveData()
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

document.querySelector(".clearCompleted").addEventListener("click", clearCompleted)

function clearCompleted() {
    let completed = document.querySelectorAll(".completed")
    for (let i = 0; i < completed.length; i++) {
        completed[i].remove()
    }
    saveData()
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

document.querySelector(".clearAll").addEventListener("click", clearAll)

function clearAll() {
    let li = document.querySelectorAll("li")
    for (let i = 0; i < li.length; i++) {
        li[i].remove()
    }
    saveData()
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

//to-do list avail even after refreshing or closing browser

//saves to-do list under name "data" in browser's local storage
function saveData() {
    localStorage.setItem("data", ul.innerHTML)
}

//loads saved data
function showData() {
    ul.innerHTML = localStorage.getItem("data")
}
showData()