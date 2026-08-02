import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();

    setTasks([...tasks, task]);
    setTask("");
  }
  return (
    <>
      <h1>ToDoList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Wpisz zadanie..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
