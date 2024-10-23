const textInputDom = document.getElementById("todo");

const btnAddTodoDom = document.querySelector(".create-btn");

const TodosDom = document.getElementById("todos");





let textInputValue = "";
let todos = [];

textInputDom.addEventListener("change", function (event) {
    textInputValue = event.target.value;
})

btnAddTodoDom.addEventListener("click", function (e) {
    e.preventDefault();

    todos.unshift({ id: todos.length + 1, todoTitle: textInputValue });

    textInputDom.value = "";

    displayTodos();
})

function displayTodos() {
    let result = "";

    todos.forEach((item) => {
        result += `
          <li>
            <span>${item.todoTitle}</span>
            <button class="delete-btn" onclick="deleteTodo(${item.id})">Delete${item.id}</button>
        </li>
        `
    });
    TodosDom.innerHTML = result;
}


function deleteTodo(id) {
    let deletedId;

    for (let i in todos) {
        if (todos[i].id == id) {
            deletedId = i
        }
    }

    todos.splice(deletedId, 1)

    displayTodos();

}

function clearTodos() {

    todos.splice(0, todos.length)
    displayTodos();

}







