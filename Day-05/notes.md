# 🧠 Day 05 – Detailed Notes

## 📌 Conditional Rendering

Conditional rendering means displaying UI based on certain conditions.

React allows this using:

1. if/else (outside JSX)
2. Ternary operator
3. Logical AND (&&)

---

### 1️⃣ if / else

Used before return statement.

Example:

if (isLoggedIn) {
return <h2>Welcome</h2>;
} else {
return <h2>Please Login</h2>;
}

---

### 2️⃣ Ternary Operator

Used inside JSX.

{isLoggedIn ? <h2>Welcome</h2> : <h2>Please Login</h2>}

Best for short conditions.

---

### 3️⃣ Logical AND (&&)

Used when you only want to show something if condition is true.

{isLoggedIn && <h2>Welcome Back</h2>}

---

## 📌 Rendering Lists

React uses JavaScript `map()` to render arrays.

Example:

const fruits = ["Apple", "Banana", "Mango"];

<ul> {fruits.map((fruit) => ( <li key={fruit}>{fruit}</li> ))} </ul>

## 📌 Keys in React

Keys help React:

Track changes

Identify elements

Improve performance

Rules:

Must be unique

Should not change

Avoid index if list can reorder
