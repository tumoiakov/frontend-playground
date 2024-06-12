export interface ITaskItem {
  id: string;
  content: string;
  time: string;
  completed: boolean;
}

export interface ITaskStore {
  tasks: Array<ITaskItem>;
  addTask: (content: string) => void;
  removeTask: (id: string) => void;
  setCompleted: (id: string) => void;
}
