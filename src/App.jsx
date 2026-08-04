import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";
import DarkModeToggle from "./components/DarkModeToggle";
import "./App.css";
import logo from "./assets/logo.png";


function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState("all");
  const FilteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.done;
    } else if (filter === "completed") {
      return task.done;
    }
    return true;
  });
  const [darkMode, setDarkMode] = useState(false);

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
      
      <div className={darkMode ? "App dark" : "App"}>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <img src={logo} className="logo" alt="logo" />
        <TaskForm task={task} setTask={setTask} handleSubmit={handleSubmit} />
        <TaskList
          tasks={FilteredTasks}
          toggleTaskDone={toggleTaskDone}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
          editingId={editingId}
          editText={editText}
          setEditText={setEditText}
          saveEditTask={saveEditTask}
          cancelEditTask={cancelEditTask}
          setFilter={setFilter}
        />
        <TaskStats tasks={tasks} /> 
    </div>
      
    </>
  );
}

export default App;
