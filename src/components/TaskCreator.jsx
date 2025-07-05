import { useState } from "react";

const TaskCreator = ({ createNewTask }) => {
  const [newTasName, setNewTaskName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    createNewTask(newTasName);
    setNewTaskName("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="my-2 row">
        <div className="col-9">
          <input
          className="form-control"
          type="text"
          placeholder="Ingresa una nueva tarea"
          value={newTasName}
          onChange={(event) => setNewTaskName(event.target.value)}
        />
        </div>
        <div className="col-3">
        <button className="btn btn-primary btn-sm">Guardar Tarea</button>

        </div>
      </form>
    </>
  );
};

export default TaskCreator;
