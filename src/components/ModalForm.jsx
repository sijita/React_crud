import React, { useContext } from "react";
import { Modal } from "react-daisyui";
import GlobalContext from "../context/GlobalContext";

export default function ModalForm() {
  const { addTask, visible, toggleVisible, task, setTask, updateTask } =
    useContext(GlobalContext);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleVisible();
    if (!task.id) {
      addTask(task);
    } else {
      updateTask(task);
    }
  };

  return (
    <Modal
      className="flex flex-col justify-center items-center m-10"
      open={visible}
      onClickBackdrop={toggleVisible}
    >
      <Modal.Header className="mb-5 flex items-center">
        <span className="grow text-center font-bold">
          {task.id ? "Editar tarea" : "Agregar tarea"}
        </span>
        <button className="btn btn-circle grow-0" onClick={toggleVisible}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </Modal.Header>
      <Modal.Body>
        <form
          className="gap-5 my-5 flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={task.title}
            className="input input-bordered sm:w-96 input-lg"
            onChange={handleChange}
          />
          <textarea
            name="description"
            className="textarea textarea-bordered sm:w-96 h-32 text-lg"
            placeholder="Description"
            value={task.description}
            onChange={handleChange}
          ></textarea>
          <button className="btn btn-primary w-full my-5" color="primary">
            {task.id ? "Editar" : "Agregar"}
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
