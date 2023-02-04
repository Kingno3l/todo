import './style.css';
const dataToDoList = [
  {
    description: 'Jumping',
    completed: true,
    index: 0,
  },
  {
    description: 'Running',
    completed: true,
    index: 1,
  },
  {
    description: 'Eating',
    completed: true,
    index: 2,
  },
  {
    description: 'Drinking',
    completed: false,
    index: 3,
  },
  {
    description: 'Sleeping',
    completed: true,
    index: 4,
  },
];
function populateList(tasks) {
  const containerList = document.querySelector('.todo');
  let listHTML = '';
  tasks.forEach((task) => {
    listHTML += `
      <li class="list-to-do">
        <input type="checkbox" class="to-do">
        ${task.description}
        <i class="fa-solid fa-trash"></i>
      </li>
      <hr class="line">
    `;
  });
  containerList.innerHTML = listHTML;
}
populateList(dataToDoList);
