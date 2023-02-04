import { getData, saveData } from './task.js';

export default class Status {
  static statusChanged(checkBox, index, target, tasksList) {
    const currentLi = target.parentElement;
    const taskDescription = currentLi.querySelector('#task');

    if (checkBox.checked) {
      taskDescription.classList.add('strike');
      tasksList[index].completed = true;
    } else {
      taskDescription.classList.remove('strike');
      tasksList[index].completed = false;
    }

    saveData(tasksList);
  }

  static clearAllCompletedTask(e, tasksList) {
    tasksList = getData();
    tasksList = tasksList.filter((task) => task.completed === false);
    saveData(tasksList);
  }
}