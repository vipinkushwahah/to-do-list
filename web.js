function addTask() {
    // Get the task input value
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value;

    if (taskText.trim() !== '') {
        // Create a new list item
        let taskList = document.getElementById('taskList');
        let li = document.createElement('li');
        li.textContent = taskText;

        // Add a delete button
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            li.remove();
        };

        // Toggle task completion on click
        // li.onclick = function() {
        //     li.classList.toggle('completed');
        // };

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }
}
