# 📘 Day 07 — useEffect Hook Notes

---

## 1️⃣ What is useEffect?

useEffect is a React Hook used to handle side effects in functional components.

Side effects include:

- API calls
- Timers
- Updating document title
- Logging
- Subscriptions

Syntax:

useEffect(() => {
// side effect code
}, []);

---

## 2️⃣ Dependency Array Behavior

🔹 No Dependency Array
jsx
Copy code
useEffect(() => {
console.log("Runs on every render");
});
Runs after every render.

🔹 Empty Dependency Array []
jsx
Copy code
useEffect(() => {
console.log("Runs only once");
}, []);
Runs only once (on mount).

🔹 With Dependencies
jsx
Copy code
useEffect(() => {
console.log("Runs when count changes");
}, [count]);
Runs when dependency value changes.

## 3️⃣ Cleanup Function

Cleanup runs:

Before next effect

When component unmounts

Example:

jsx
Copy code
useEffect(() => {
const timer = setInterval(() => {
console.log("Running...");
}, 1000);

return () => {
clearInterval(timer);
};
}, []);

---

## 4️⃣ Important Observations

useEffect runs after render

Dependency array controls execution

Missing dependencies may cause bugs

Cleanup prevents memory leaks

## 🔎 Common Mistakes

Forgetting dependency array

Causing infinite loops

Not cleaning timers or subscriptions

Updating state incorrectly inside effect

## 🧠 Summary

useEffect replaces lifecycle methods in functional components.
Understanding dependency behavior is critical for writing stable React applications.
