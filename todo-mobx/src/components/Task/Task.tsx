import { observer } from "mobx-react-lite";
import "./Task.css";
import { TaskProps } from "./Task.types";
import { useCallback, useMemo } from "react";

const Task = observer(({ task, onComplete, onRemove }: TaskProps) => {
  const handleRemove = useCallback(() => {
    onRemove(task.id);
  }, [onRemove, task.id]);

  const handleComplete = useCallback(() => {
    onComplete(task.id);
  }, [onComplete, task.id]);

  const classes = useMemo(
    () => `task ${task.completed ? "task--completed" : ""}`,
    [task.completed]
  );

  return (
    <article className={classes}>
      {task.content}
      <div className="backdrop">
        <button className="button button--cancel" onClick={handleRemove}>
          {"\u{2715} Удалить"}
        </button>
        {!task.completed && (
          <button className="button button--confirm" onClick={handleComplete}>
            {"\u{2713} Готово"}
          </button>
        )}
      </div>
      <footer className="task__footer">
        <time dateTime={task.time}>{task.time}</time>
      </footer>
    </article>
  );
});

export default Task;
