import { ITaskItem } from "../../store/types";

export type TaskProps = {
  task: ITaskItem;
  onComplete: (id: string) => void;
  onRemove: (id: string) => void;
};
