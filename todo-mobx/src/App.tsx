import "./App.css";
import AddIcon from "./components/AddIcon";
import { List } from "./components/List";
import { Dialog } from "./components/AddDialog";
import { useCallback, useContext, useRef } from "react";
import { observer } from "mobx-react-lite";
import StoreContext from "./providers/StoreContext";

const App = observer(() => {
  const store = useContext(StoreContext);
  const { addTask } = store.tasksStore;
  const dialogRef = useRef<HTMLDialogElement>(null);

  const showDialog = useCallback(() => dialogRef.current?.showModal(), []);

  const handleConfirm = useCallback(
    (text: string) => {
      addTask(text);
    },
    [addTask]
  );

  return (
    <>
      <header>
        <span className="title">{"//"}TODO</span>
        <button className="add-btn" onClick={showDialog} tabIndex={0}>
          <AddIcon />
          Добавить
        </button>
        <Dialog ref={dialogRef} onConfirm={handleConfirm} />
      </header>
      <main>
        <List />
      </main>
    </>
  );
});

export default App;
