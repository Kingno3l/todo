export class Task {
    constructor(description, completed = false, index) {
      this.description = description;
      this.completed = completed;
      this.index = index;
    }
}

export const getData=()=>{
  return JSON.parse(localStorage.getItem('taskslist'));
}

export const saveData=(tasksList)=> {
    localStorage.setItem('taskslist', JSON.stringify(tasksList));
}