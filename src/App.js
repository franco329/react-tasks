import { useEffect, useState } from "react";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";
import Container from "./components/Container";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(taskName) {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }

  function toggleTask(task) {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  }

  useEffect(() => {
    const data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  const cleanTasks = () => {
    setTaskItems(taskItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);
  return (
    <main className='bg-dark vh-100 text-white'>
     <Container>
              <TaskCreator createNewTask={createNewTask} />
        <TaskTable taskItems={taskItems} toggleTask={toggleTask} />
        <VisibilityControl
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks} 
          isCkecked={showCompleted}
        />

      {
        showCompleted && (
          <TaskTable taskItems={taskItems} toggleTask={toggleTask} showCompleted={showCompleted} />
        )
      }
     </Container>
    </main>
  );
}

export default App;
