let inputs = document.getElementById('taskInput');
let text = document.querySelector('.text ol');

function Add() {
    if (inputs.value === "") {
        alert("Please enter a task");
    } else {
        let newEle = document.createElement("li");
        newEle.innerHTML = `${inputs.value}<i class="fas fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click", removeTask);
    }
}

function removeTask(event) {
    event.target.parentElement.remove();
}

// The rest of your code remains unchanged

function AddTask() {
    var taskInput = document.getElementById('taskInput');
    var daySelect = document.getElementById('daySelect');
    var taskList = document.getElementById(daySelect.value + 'TaskList');

    var taskText = taskInput.value;

    if (!taskText) {
        alert("Please enter a task.");
        return;
    }

    var listItem = document.createElement("li");
    listItem.innerHTML = taskText + " <i class='fas fa-trash'></i>";
    taskList.appendChild(listItem);

    // Save task to localStorage with day as key
    var tasks = JSON.parse(localStorage.getItem(daySelect.value)) || [];
    tasks.push(taskText);
    localStorage.setItem(daySelect.value, JSON.stringify(tasks));

    taskInput.value = "";

    var deleteIcon = listItem.querySelector("i");
    deleteIcon.addEventListener("click", function() {
        listItem.remove();
        // Remove task from localStorage
        var updatedTasks = tasks.filter(task => task !== taskText);
        localStorage.setItem(daySelect.value, JSON.stringify(updatedTasks));
    });
}

// Load tasks from localStorage on page load
window.onload = function() {
    var daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    daysOfWeek.forEach(function(day) {
        var tasks = JSON.parse(localStorage.getItem(day)) || [];
        var taskList = document.getElementById(day + 'TaskList');

        tasks.forEach(function(taskText) {
            var listItem = document.createElement("li");
            listItem.innerHTML = taskText + " <i class='fas fa-trash'></i>";
            taskList.appendChild(listItem);

            var deleteIcon = listItem.querySelector("i");
            deleteIcon.addEventListener("click", function() {
                listItem.remove();
                // Remove task from localStorage
                var updatedTasks = tasks.filter(task => task !== taskText);
                localStorage.setItem(day, JSON.stringify(updatedTasks));
            });
        });
    });
}
