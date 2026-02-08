# 📘 Day 03 — React Components & Props

---

## 1️⃣ React Components

A component is a **JavaScript function** that returns JSX.

Example:

```jsx
function Header() {
  return <h1>Hello React</h1>;
}
Rules:

Component name must start with a capital letter

Must return JSX

Can be reused multiple times

2️⃣ Why Components?
Without components:

Large messy files

Hard to maintain UI

With components:

Clean code

Reusable UI

Easy scalability

3️⃣ Props in React
Props allow data flow from parent to child.

Passing props:

<Card title="React Basics" />
Receiving props:

function Card(props) {
  return <h2>{props.title}</h2>;
}
4️⃣ Props Rules
Props are read-only

Child components cannot modify props

Props make components dynamic

5️⃣ Reusable Component Example
<Card title="HTML" />
<Card title="CSS" />
<Card title="JavaScript" />
Same component, different content.

6️⃣ Best Practices
One component = one responsibility

Keep components small

Store reusable components in components/ folder

7️⃣ Common Beginner Mistakes
❌ Modifying props
❌ Writing everything in App.jsx
❌ Not reusing components

8️⃣ Summary
Components = UI blocks

Props = data communication

Parent → Child flow

Foundation for state & hooks

🔜 Next Day
Day 04 — State & Event Handling
```
