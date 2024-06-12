import { ITaskItem } from "../types";
import { makeAutoObservable, observable } from "mobx";
import * as uuid from "uuid";

class TaskItem implements ITaskItem {
  id: string;
  content: string;
  time: string;
  completed: boolean;

  constructor(content_: string = "") {
    makeAutoObservable(this, {
      id: observable,
      content: observable,
      time: observable,
      completed: observable,
    });
    this.id = uuid.v4();
    this.completed = false;
    this.content = content_;
    this.time = new Date().toLocaleDateString("ru-Ru", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }
}

export default TaskItem;
