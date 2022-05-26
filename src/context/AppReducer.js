const appReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TASK":
      return { tasks: [...state.tasks, payload] };

    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task) => task.id !== payload),
      };

    case "UPDATE_TASK":
      const updatedTask = payload;

      const updatedTasks = state.tasks.map((task) => {
        if (task.id == updatedTask.id) {
          task.title = updatedTask.title;
          task.description = updatedTask.description;
        }
        return task;
      });

      return {
        tasks: updatedTasks,
      };

    default:
      return state;
  }
};

export default appReducer;
