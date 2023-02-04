export default class LocalStorageFile {
    static getData() {
      return JSON.parse(localStorageFile.getItem('taskslist'));
    }
  
    static saveData(tasksList) {
      localStorageFile.setItem('taskslist', JSON.stringify(tasksList));
    }
  }