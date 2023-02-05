import UI from './UI.js';
const display = (tasksList)=>{
  const todoList = document.querySelector('.todo-list');
  let tasks = '';

  tasksList.forEach((task) => {
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
}

export default display;