function TaskStats({ tasks }) {
  return (
    <div className="stats">
      <span>
        Active: <strong>{tasks.filter((task) => !task.done).length}</strong>
      </span>

      <span>
        Completed: <strong>{tasks.filter((task) => task.done).length}</strong>
      </span>
    </div>
  );
}
export default TaskStats;
