let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const value = input.value.trim();

  if (value === "") return;

  tasks.push({ text: value, completed: false });

  input.value = "";
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  const count = document.getElementById("taskCount");
  const empty = document.getElementById("emptyState");

  list.innerHTML = "";

  count.textContent = `Total Tasks: ${tasks.length}`;

  if (tasks.length === 0) {
    empty.style.display = "block";
    return;
  } else {
    empty.style.display = "none";
  }

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span onclick="toggleTask(${index})" style="cursor:pointer; text-decoration:${task.completed ? "line-through" : "none"}">
        ${task.text}
      </span>
      <button onclick="deleteTask(${index})">❌</button>
    `;

    list.appendChild(li);
  });
}
