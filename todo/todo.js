document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskInput = document.getElementById('taskInput');
    const dateInput = document.getElementById('dateInput');
    const taskList = document.getElementById('taskList');
    
    const taskText = taskInput.value;
    const taskDate = dateInput.value;

    if (taskText === '') return;

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item task-item';

    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-text';
    taskDiv.innerText = taskText;
    listItem.appendChild(taskDiv);

    if (taskDate) {
        const dateSpan = document.createElement('span');
        dateSpan.className = 'task-date';
        dateSpan.innerText = ` (Due: ${taskDate})`;
        taskDiv.appendChild(dateSpan);
    }

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.innerHTML = '&times;';
    removeBtn.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(removeBtn);

    listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    taskList.appendChild(listItem);

    taskInput.value = '';
    dateInput.value = '';
});
