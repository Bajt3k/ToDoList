import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

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

  function handleEditTask(taskItem) {
    setEditingId(taskItem.id);
    setEditText(taskItem.text);
  }

  function saveEditTask(id) {
    const trimmedEditText = editText.trim();

    if (trimmedEditText === "") {
      return;
    }

    setTasks((prevTasks) =>
      prevTasks.map((taskItem) =>
        taskItem.id === id ? { ...taskItem, text: trimmedEditText } : taskItem,
      ),
    );

    setEditingId(null);
    setEditText("");
  }

  function cancelEditTask() {
    setEditingId(null);
    setEditText("");
  }

  return (
    <>
      <div className="App">
        <h1>ToDoList</h1>
        <form onSubmit={handleSubmit} className="task-form">
          <input
            type="text"
            placeholder="Type your task here..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">ADD</button>
        </form>
        <ul className="task-list">
          {tasks.map((taskItem) => (
            <li key={taskItem.id} className={taskItem.done ? "done" : ""}>
              {editingId === taskItem.id ? (
                <>
                  <input
                    className="edit-input"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button type="button" onClick={() => saveEditTask(taskItem.id)}>
                    Save
                  </button>
                  <button type="button" onClick={cancelEditTask}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span>{taskItem.text}</span>
                  <input
                    type="checkbox"
                    checked={taskItem.done}
                    onChange={() => toggleTaskDone(taskItem.id)}
                  />
                  <button type="button" onClick={() => handleDeleteTask(taskItem.id)}>
                    Delete
                  </button>
                  <button type="button" onClick={() => handleEditTask(taskItem)}>
                    Edit
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
