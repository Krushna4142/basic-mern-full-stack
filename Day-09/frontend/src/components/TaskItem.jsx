const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className="task">
      <span
        onClick={() => toggleTask(task.id)}
       className={task.completed ? "completed" : ""}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(task.id)}>❌</button>
    </div>
  );
};

export default TaskItem;
