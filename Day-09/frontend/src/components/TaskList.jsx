import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  if (tasks.length === 0) {
    return <p className="empty">No tasks yet 🚀</p>;
  }

  return (
    <div className="list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
