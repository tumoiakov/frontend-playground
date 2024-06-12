import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import "./AddDialog.css";
import { AddDialogProps } from "./AddDialog.types";

const AddDialog = memo(
  forwardRef<HTMLDialogElement, AddDialogProps>(
    ({ onClose, onConfirm }, ref) => {
      const dialogRef = useRef<HTMLDialogElement>(null);
      const [taskContent, setTaskContent] = useState<string>("");

      useImperativeHandle(ref, () => dialogRef.current!, []);

      const handleClose = useCallback(() => {
        onClose?.();
        setTaskContent("");
        dialogRef.current?.close();
      }, [onClose]);

      const handleConfirm = useCallback(() => {
        if (taskContent) {
          onConfirm(taskContent);
          setTaskContent("");
          dialogRef.current?.close();
        }
      }, [onConfirm, taskContent]);

      useEffect(() => {
        function handleBackdropClick({ target }: MouseEvent) {
          if (target === dialogRef.current) {
            handleClose();
          }
        }

        const dialog = dialogRef.current;
        dialog?.addEventListener("click", handleBackdropClick);
        return () => {
          dialog?.removeEventListener("click", handleBackdropClick);
        };
      }, [handleClose]);

      return (
        <dialog
          ref={dialogRef}
          onReset={handleClose}
          onSubmit={handleConfirm}
          aria-modal="true"
          aria-labelledby="dialog__title"
        >
          <header>
            <h1 id="dialog__title">Добавление задачи</h1>
          </header>
          <form className="dialog__form" method="dialog">
            <textarea
              name="task"
              className="dialog__textarea"
              placeholder="Введите текст задачи..."
              value={taskContent}
              onChange={(e) => setTaskContent(e.target.value)}
              required
              tabIndex={0}
            />
            <footer>
              <button type="submit" className="button--confirm">
                Добавить
              </button>
              <button type="reset" className="button--cancel">
                Закрыть
              </button>
            </footer>
          </form>
        </dialog>
      );
    }
  )
);

export default AddDialog;
