import { getData, saveData } from './task.js';
// eslint-disable-next-line import/no-cycle
import display from './display.js';

export default class UI {
  static updateIndex(tasksList) {
    for (let i = 0; i < tasksList.length; i += 1) {
      tasksList[i].index = i + 1;
    }
    return tasksList;
  }

  static removeTask(target, btn, index) {
    const currentLi = target.parentElement;
    currentLi.parentElement.removeChild(currentLi);

    let tasksList = getData();
    tasksList = tasksList.filter((task, idx) => idx !== index);
    tasksList = this.updateIndex(tasksList);
    saveData(tasksList);
    display(tasksList);
  }

  static editTask(value, index, tasksList) {
    tasksList[index].description = value;
    saveData(tasksList);
    display(tasksList);
  }

  static reloadPage() {
    const tasksList = getData();
    tasksList.forEach((task) => {
      task.completed = false;
    });
    saveData(tasksList);
  }
}