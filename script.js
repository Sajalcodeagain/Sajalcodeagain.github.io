document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-todo');
    const clearButton = document.getElementById('clear-todos');
    const inputField = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', function() {
        addTodo();
    });

    clearButton.addEventListener('click', function() {
        todoList.innerHTML = ''; // Clears the todo list
    });

    function addTodo() {
        const todoText = inputField.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            li.className = 'todo-item';
            li.innerHTML = `
                <input type="checkbox">
                <span contenteditable="false">${todoText}</span>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            `;
            todoList.appendChild(li);

            // Edit and Delete functionality
            const deleteBtn = li.querySelector('.delete-btn');
            const editBtn = li.querySelector('.edit-btn');
            const todoSpan = li.querySelector('span');

            deleteBtn.addEventListener('click', function() {
                li.remove();
            });

            editBtn.addEventListener('click', function() {
                const isEditable = todoSpan.contentEditable === "true";
                todoSpan.contentEditable = !isEditable;
                editBtn.textContent = isEditable ? "Edit" : "Save";
            });

            inputField.value = ''; // Clear input field after adding
        }
    }
});
