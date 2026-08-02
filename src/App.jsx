import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedTask = task.trim();

    if (trimmedTask !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: trimmedTask, done: false },
      ]);
      setTask("");
    }
  }

  function toggleTaskDone(id) {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
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
          <li key={task.id}>
            {task.text}{" "}
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTaskDone(task.id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
