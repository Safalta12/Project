let currentIndex = 0;
const todos = ['Hello', 'Konnichiwa', 'Hola','Bonjour'];
document.getElementById('btn-generate').addEventListener('click', generateTodos);

async function fetchTodo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (currentIndex < todos.length) {
                resolve(todos[currentIndex]);
            } else {
                resolve(null);
            }
        }, 500);
    });
}

async function generateTodos() {
    const todoList = document.getElementById('list');
    const todoText = await fetchTodo();
    
    if (todoText) {
        const todoItem = document.createElement('div');
        todoItem.className = 'todoItem';
        todoItem.textContent = todoText;
        todoList.appendChild(todoItem);
        currentIndex++;
    } else {
        todoList.innerHTML = '';
        currentIndex = 0;
    }
}