# 📘 Day 04 — React State & Event Handling

---

## 1️⃣ What is State?

State is **component-level data** that can change over time.

When state changes:
➡️ React re-renders the component automatically.

---

## 2️⃣ Why State is Important

Without state:

- UI would be static
- No user interaction

With state:

- Buttons respond
- Inputs update UI
- Real-world behavior is possible

---

## 3️⃣ useState Hook

`useState` is a hook that allows functional components to store state.

### Syntax:

```jsx
const [value, setValue] = useState(initialValue);
Example:
const [count, setCount] = useState(0);
4️⃣ Updating State
Correct way:

setCount(count + 1);
Wrong way:

count = count + 1; // ❌
5️⃣ Event Handling in React
Events are written in camelCase.

<button onClick={handleClick}>Click</button>
6️⃣ Handling Input State
<input
  value={text}
  onChange={(e) => setText(e.target.value)}
/>
This is called a controlled component.

7️⃣ Re-rendering Explained
State update → Re-render

Only affected components update

Virtual DOM improves performance

8️⃣ Common Beginner Mistakes
Modifying state directly

Forgetting to import useState

Using normal variables instead of state

Expecting immediate state updates

9️⃣ Summary
State makes React interactive

useState is foundational

Events connect UI and logic

Strong basics lead to scalable apps
```
