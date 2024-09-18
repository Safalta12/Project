let currentIndex = 0;
const todos = ['Hello', 'Good Morning', 'Have a good day'];
document.getElementById('btn-generate').addEventListener('click', generateTodos);
function generateTodos() {
    const todoList = document.getElementById('list');
    if (currentIndex < todos.length) {
        const todoItem = document.createElement('div');
        todoItem.className = 'todoItem';
        todoItem.textContent = todos[currentIndex];
        todoList.appendChild(todoItem);
        currentIndex++;
    } else {
        todoList.innerHTML = '';
        currentIndex = 0;
    }
}
