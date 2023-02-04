export class Task {
  constructor(description, index, completed = false) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export const getData = () => JSON.parse(localStorage.getItem('taskslist'));

export const saveData = (tasksList) => {
  localStorage.setItem('taskslist', JSON.stringify(tasksList));
};