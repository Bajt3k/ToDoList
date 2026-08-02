function TaskForm({ task, setTask, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Type your task here..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
}
export default TaskForm;
