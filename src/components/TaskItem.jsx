import { FaTrash, FaEdit, FaSave } from "react-icons/fa";
import {IoClose} from "react-icons/io5";

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
              <button type="button" className="save-btn" onClick={() => saveEditTask(taskItem.id)}>
                <FaSave />
              </button>
              <button type="button" className="cancel-btn" onClick={cancelEditTask}>
                <IoClose />
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
                  className="delete-btn"
                  onClick={() => handleDeleteTask(taskItem.id)}
                >
                  <FaTrash />
                </button>
                <button type="button" className="edit-btn" onClick={() => handleEditTask(taskItem)}>
                    <FaEdit />
                </button>
              </div>
            </>
          )}
        </li>
    )}
    export default TaskItem;