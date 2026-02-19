# ⚛️ React Cheat Sheet

## 🔹 Core Concepts

Component → Reusable UI block  
JSX → HTML inside JavaScript  
Props → Data passed to components  
State → Mutable component data

---

## 🔹 Functional Component

```jsx
function App() {
  return <h1>Hello</h1>
}
🔹 useState
jsx
Copy code
const [count, setCount] = useState(0)
🔹 useEffect
jsx
Copy code
useEffect(() => {
  console.log("Mounted")
}, [])
🔹 Event Handling
jsx
Copy code
<button onClick={handleClick}>Click</button>
🔹 Conditional Rendering
jsx
Copy code
{isLoggedIn ? <Home /> : <Login />}
🔹 List Rendering
jsx
Copy code
items.map(item => <li key={item.id}>{item.name}</li>)
🔹 Forms
jsx
Copy code
<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
🔹 Folder Structure (Basic)
css
Copy code
src/
 ├── components/
 ├── pages/
 ├── App.jsx
 └── main.jsx
🔹 Golden Rules
✔ Keep components small
✔ Use meaningful names
✔ Never mutate state directly
✔ Always use keys in lists
✔ Destructure props

🚀 Next to Learn
useRef

useReducer

Custom Hooks

Context API

Performance Optimization

yaml
Copy code

---

```
