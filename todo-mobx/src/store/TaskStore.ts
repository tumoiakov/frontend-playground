import { action, makeAutoObservable, observable } from "mobx";
import { ITaskItem, ITaskStore } from "./types";
import TaskItem from "./models/TaskModel";

class TaskStore implements ITaskStore {
  tasks: Array<ITaskItem>;

  constructor() {
    makeAutoObservable(this, {
      tasks: observable,
      addTask: action,
      setCompleted: action,
      removeTask: action,
    });
    this.tasks = [];
    this.getFromLocal();
  }

  addTask = (content: string) => {
    this.tasks = [new TaskItem(content), ...this.tasks];
    this.saveToLocal();
  };

  private saveToLocal = () => {
    const tasksJSON = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", tasksJSON);
  };

  private getFromLocal = () => {
    const tasksJSON = localStorage.getItem("tasks");
    if (tasksJSON) {
      this.tasks = JSON.parse(tasksJSON);
    }
  };

  setCompleted = (id: string) => {
    const task = this.tasks.find((item) => item.id === id);
    if (task) {
      task.completed = true;
      this.saveToLocal();
    }
  };

  removeTask = (id: string) => {
    this.tasks = this.tasks.filter((item) => item.id !== id);
    this.saveToLocal();
  };
}

export default TaskStore;
