import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");

  return savedTasks ? JSON.parse(savedTasks) : [];
});

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
  function handleDeleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));
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
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
