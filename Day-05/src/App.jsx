

```jsx
import { useState } from "react";
import Toggle from "./components/Toggle";
import TaskList from "./components/TaskList";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Day 05 – Conditional Rendering & Lists</h1>

      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Message
      </button>

      {isVisible && <Toggle />}

      <hr />

      <TaskList />
    </div>
  );
}

export default App;
