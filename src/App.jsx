import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <h1>ToDoList</h1>
      <input
        type="text"
        placeholder="Wpisz zadanie..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={() => {
 setTasks([...tasks, task])}}>ADD</button>

      <ul>
        {tasks.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
