const todos = ['Hello', 'Good Morning', 'Nice to meet you', 'Have a good day','Bye'];
let currentIndex = 0;

const generateTodos = async () => {
  const todoList = document.getElementById("list");
  console.log(todoList);

  const todoText = await fetchTodo();
  console.log("Fetched Todo: ", todoText);

  if (todoText) {
    console.log("Appending todo item");
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${todoText}</span>
    `;

    todoList.appendChild(li);
    currentIndex++;
  } else {
    console.log("No more todos. Resetting.");
    todoList.innerHTML = '';
    currentIndex = 0;
  }
};

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

document.getElementById("btn-generate").addEventListener("click", generateTodos);