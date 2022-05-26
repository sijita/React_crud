import { createContext, useReducer, useState } from "react";
import appReducer from "./AppReducer";
import { v4 } from "uuid";

const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const initialState = {
    tasks: [
      {
        id: 1,
        title: "Tarea 1",
        description: "Hacer el desayuno",
      },
      {
        id: 2,
        title: "Tarea 2",
        description: "Hacer el almuerzo",
      },
    ],
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTask = (task) => dispatch({ type: "ADD_TASK", payload: { ...task, id: v4(), done: false } });

  const deleteTask = (id) => dispatch({ type: "DELETE_TASK", payload: id });

  const updateTask = (task) => dispatch({ type: "UPDATE_TASK", payload: task });

  const data = {
    state,
    addTask,
    deleteTask,
    updateTask,
    visible,
    toggleVisible,
    task,
    setTask,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export { ContextProvider };
export default GlobalContext;
