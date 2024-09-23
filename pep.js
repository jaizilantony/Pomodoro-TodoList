let isRunning = false;
let timer;
let minutes = 25;
let seconds = 0;

const startStopButton = document.getElementById('start-stop');
const resetButton = document.getElementById('reset');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

startStopButton.addEventListener('click', function() {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        timer = setInterval(countdown, 1000);
        startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetButton.addEventListener('click', function() {
    clearInterval(timer);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    startStopButton.textContent = 'Start';
    updateDisplay();
});

function countdown() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timer);
            alert('Time is up!');
            return;
        } else {
            minutes--;
            seconds = 59;
        }
    } else {
        seconds--;
    }
    updateDisplay();
}

function updateDisplay() {
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
}

// To-Do List
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        return;
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}