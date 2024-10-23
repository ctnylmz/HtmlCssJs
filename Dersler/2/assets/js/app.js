const textInputDom = document.getElementById("todo");
const btnAddTodoDom = document.querySelector(".create-btn");
const TodosDom = document.getElementById("todos");

let textInputValue = "";
let todos = [];

textInputDom.addEventListener("change", function (event) {
    textInputValue = event.target.value;
});

btnAddTodoDom.addEventListener("click", function (e) {
    e.preventDefault();

    if (textInputValue.trim() !== "") {
        todos.unshift({ id: todos.length + 1, todoTitle: textInputValue });
        textInputDom.value = "";
        textInputValue = "";
        displayTodos();
    }
});

function displayTodos() {
    let result = "";

    todos.forEach((item) => {
        result += `
          <li>
            <span>${item.todoTitle}</span>
            <button class="delete-btn" onclick="deleteTodo(${item.id})">Delete</button>
          </li>
        `;
    });
    TodosDom.innerHTML = result;
}

function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    displayTodos();
}

function clearTodos() {
    todos = [];
    displayTodos();
}
