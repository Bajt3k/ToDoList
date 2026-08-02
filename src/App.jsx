import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();

    const trimmedTask = task.trim();

    if (trimmedTask !== "") {
      setTasks((prevTasks) => [...prevTasks, trimmedTask]);
      setTask("");
    }
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
        {tasks.map((task, index) => (
          <li key={`${task}-${index}`}>{task}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
