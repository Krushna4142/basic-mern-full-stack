function TaskList() {
  const tasks = [
    { id: 1, name: "Learn React" },
    { id: 2, name: "Build Projects" },
    { id: 3, name: "Practice Daily" }
  ];

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
