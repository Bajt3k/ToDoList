function TaskItem({ taskItem, editingId, editText, setEditText, toggleTaskDone, handleDeleteTask, handleEditTask, saveEditTask, cancelEditTask }) {
    return (
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
              <input
                type="checkbox"
                checked={taskItem.done}
                onChange={() => toggleTaskDone(taskItem.id)}
              />
              <span>{taskItem.text}</span>
              <div className="actions">
                <button
                  type="button"
                  onClick={() => handleDeleteTask(taskItem.id)}
                >
                  Delete
                </button>
                <button type="button" onClick={() => handleEditTask(taskItem)}>
                  Edit
                </button>
              </div>
            </>
          )}
        </li>
    )}
    export default TaskItem;