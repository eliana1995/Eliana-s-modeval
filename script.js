const addBtn = document.getElementById('add-btn');
const newTodoInput = document.getElementById('new-todo');
const todoList = document.getElementById('todo-list');
const searchInput = document.getElementById('search-todo');

// Ladda todos från localStorage
document.addEventListener('DOMContentLoaded', loadTodos);

// Funktion för att lägga till ny todo
function addTodo() {
  const todoText = newTodoInput.value.trim();
  if (todoText === '') return;

  const todoItem = document.createElement('li');
  todoItem.textContent = todoText;
  
  // Lägger till ta bort-knapp
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Ta bort';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.onclick = () => removeTodo(todoItem);
  
  todoItem.appendChild(deleteBtn);
  todoList.appendChild(todoItem);
  
  saveToLocalStorage(todoText);
  newTodoInput.value = '';
}

// Funktion för att spara todo till localStorage
function saveToLocalStorage(todo) {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Funktion för att ladda todos från localStorage
function loadTodos() {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.forEach(todoText => {
    const todoItem = document.createElement('li');
    todoItem.textContent = todoText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Ta bort';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => removeTodo(todoItem);
    
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);
  });
}

// Funktion för att ta bort todo
function removeTodo(item) {
  const todoText = item.textContent.replace('Ta bort', '').trim();
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos = todos.filter(todo => todo !== todoText);
  localStorage.setItem('todos', JSON.stringify(todos));
  
  item.remove();
}

addBtn.addEventListener('click', addTodo);


searchInput.addEventListener('input', function() {
  const searchText = searchInput.value.toLowerCase();
  const todos = todoList.querySelectorAll('li');

  todos.forEach(todo => {
    const text = todo.textContent.toLowerCase();
    if (text.includes(searchText)) {
      todo.style.display = 'flex';
    } else {
      todo.style.display = 'none';
    }
  });
});


        // JavaScript to handle form submission and store in Local Storage
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); 
         
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
         
            const contactData = {
                name: name,
                email: email,
                message: message,
            };
       
            localStorage.setItem('contactFormData', JSON.stringify(contactData));
            
           
            alert('Your message has been saved locally!');
-
            document.getElementById('contactForm').reset()});
