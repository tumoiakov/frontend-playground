import { createContext } from "react";
import { defaultStore } from "./StoreContext.const";
import { ITaskStore } from "../store/types";

const StoreContext = createContext<{ tasksStore: ITaskStore }>(defaultStore);

export default StoreContext;
