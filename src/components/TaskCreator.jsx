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
          placeholder="Enter a new task"
          value={newTasName}
          onChange={(event) => setNewTaskName(event.target.value)}
        />
        </div>
        <div className="col-3">
        <button className="btn btn-primary btn-sm">Save Task</button>

        </div>
      </form>
    </>
  );
};

export default TaskCreator;
