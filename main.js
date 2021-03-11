let todoItems = []

function addTodo(text) {
    const todo = {
        text, 
        chacked: false,
        id: Date.now(),
    }

    todoItems.push(todo)
    console.log(todoItems)
}

const form = document.querySelector('js-form');

//Add a submit event listener

form.addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('js-todo-input');

    const text = input.value.trim();
    if (text !== '') {
        addTodo(text);
        input.value = '';
        input.focus();
    }
})