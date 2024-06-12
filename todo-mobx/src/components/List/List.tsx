import "./List.css";
import { Task } from "../Task";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import StoreContext from "../../providers/StoreContext";

const List = observer(() => {
  const store = useContext(StoreContext);
  const { tasks, setCompleted, removeTask } = store.tasksStore;

  return (
    <div className="list">
      {tasks.map((item) => (
        <Task
          key={item.id}
          task={item}
          onComplete={setCompleted}
          onRemove={removeTask}
        />
      ))}
    </div>
  );
});

export default List;
