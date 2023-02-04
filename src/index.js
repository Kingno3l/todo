import './style.css';
import { Task, getData, saveData } from './task.js';
import UI from './ui.js';
import display from './display.js';
import Status from './status.js';

let tasksList;
if (getData() === null) {
  tasksList = [];
} else {
  tasksList = getData();
}

const addTask = (newTask) => {
  let index;
  if (getData() === null) {
    index = 1;
  } else {
    tasksList = getData();
    index = tasksList.length + 1;
  }

  const task = new Task(newTask, false, index);

  tasksList.push(task);
  saveData(tasksList);
  display(tasksList);
};

const addNewTask = document.querySelector('#add-new-task');
addNewTask.addEventListener('keyup', (e) => {
  if (e.keyCode === 13 && addNewTask.value !== '') {
    const newTask = addNewTask.value;
    addTask(newTask);
    document.querySelector('#add-new-task').value = '';
  }
});

display(tasksList);

const btnRefresh = document.querySelector('#btn-refresh');
btnRefresh.addEventListener('click', () => {
  window.location.reload();
  UI.reloadPage();
});

const btnClearCompleted = document.querySelector('.btn-clear');
btnClearCompleted.addEventListener('click', (e) => {
  Status.clearAllCompletedTask(e, tasksList);
  tasksList = getData();
  UI.updateIndex(tasksList);
  saveData(tasksList);
  tasksList = getData();
  display(tasksList);
});
