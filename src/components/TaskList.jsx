import React, { useContext, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import { Link, useParams } from "react-router-dom";

export default function TaskList() {
  const { state, deleteTask, toggleVisible, setTask } =
    useContext(GlobalContext);

  let { id } = useParams();

  const handleOpenModal = () => {
    toggleVisible();
  };

  useEffect(() => {
    const taskFound = state.tasks.find((task) => task.id == id);

    if (taskFound) {
      setTask(taskFound);
    }
  }, [id]);

  return (
    <div className="p-10">
      <p className="text-6xl font-bold text-center mb-10">Lista de tareas</p>
      <div className="flex justify-center items-center flex-col">
        {state?.tasks.map((task) => (
          <div
            className="card w-full lg:w-6/12 shadow-lg bg-base-200 m-5 p-6"
            key={task.id}
          >
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">{task.title}</h1>
              <div className="flex gap-3">
                <Link to={`/${task.id}`}>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={handleOpenModal}
                  >
                    Editar
                  </button>
                </Link>

                <button
                  className="btn btn-error btn-sm"
                  onClick={() => deleteTask(task.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
            <p className="mt-4 text-lg">{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
