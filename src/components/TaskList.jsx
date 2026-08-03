import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  toggleTaskDone,
  handleDeleteTask,
  handleEditTask,
  editingId,
  editText,
  setEditText,
  saveEditTask,
  cancelEditTask,
  setFilter,
}) {
  return (
    <><div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <ul className="task-list">
              {tasks.map((taskItem) => (
                  <TaskItem
                      key={taskItem.id}
                      taskItem={taskItem}
                      editingId={editingId}
                      editText={editText}
                      setEditText={setEditText}
                      toggleTaskDone={toggleTaskDone}
                      handleDeleteTask={handleDeleteTask}
                      handleEditTask={handleEditTask}
                      saveEditTask={saveEditTask}
                      cancelEditTask={cancelEditTask} />
              ))}
          </ul></>
  );
}
export default TaskList;
