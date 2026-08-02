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
}) {
  return (
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
          cancelEditTask={cancelEditTask}
        />
      ))}
    </ul>
  );
}
export default TaskList;
