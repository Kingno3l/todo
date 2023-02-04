// eslint-disable-next-line import/no-cycle
import UI from './ui.js';

import Status from './status.js';

const display = (tasksList) => {
  const todoList = document.querySelector('.todo-list');
  let tasks = '';

  tasksList.forEach((task) => {
    let strike;
    let checked;
    if (task.completed === true) {
      strike = 'strike';
      checked = 'checked';
    } else {
      // eslint-disable-next-line no-unused-vars
      strike = '';
      // eslint-disable-next-line no-unused-vars
      checked = '';
    }
    tasks += `<li class="todo-item">
    <input type="checkbox" name="check" id="check">
    <input type="text" name="task" id="task" value="${task.description}"" reuired>
    <i class="fa-solid fa-trash-can btn-delete"></i>
    </li>`;
  });

  todoList.innerHTML = tasks;

  const deleteBtn = document.querySelectorAll('.btn-delete');
  deleteBtn.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      UI.removeTask(e.target, btn, index);
    });
  });
  const taskInput = document.querySelectorAll('#task');
  taskInput.forEach((task, index) => {
    task.addEventListener('keyup', (e) => {
      if (e.keyCode === 13 && task.value !== '') {
        UI.editTask(task.value, index, tasksList);
      }
    });
  });

  const checkBoxes = document.querySelectorAll('#check');
  checkBoxes.forEach((checkBox, index) => {
    checkBox.addEventListener('change', (e) => {
      Status.statusChanged(checkBox, index, e.target, tasksList);
    });
  });
};

export default display;