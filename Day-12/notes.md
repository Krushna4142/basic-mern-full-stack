# 🧠 Day 12 – Express.js Basics — Notes

---

## 📌 What is Express.js?

**Express.js** is a minimal and flexible Node.js web application framework that provides:

- Simple server setup
- Powerful routing
- Middleware support
- Easy request & response handling

It is used to build:

- REST APIs
- Backend for web apps
- Full-stack applications

---

## ⚡ Why Express Instead of Core Node.js?

### Using Node.js HTTP module:

- Manual routing
- Manual body parsing
- Repetitive code
- Hard to scale

### Using Express:

- Clean & readable
- Built-in routing
- Middleware support
- Faster development

---

## 🏗️ Basic Express Server

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
📩 Handling Requests & Responses
Request Object (req)

Contains:

URL parameters

Query parameters

Request body

Headers

Response Object (res)

Used to send:

res.send()
res.json()
res.status()

Example:

res.status(200).json({ message: "Success" });
🛣️ Routing

Routing determines how the server responds to client requests.

app.get("/users", (req, res) => {
  res.send("All users");
});
Types of Routes

GET → Fetch data

POST → Create data

PUT → Update data

DELETE → Remove data

📦 Middleware

Middleware is a function that runs:

➡ Before the request reaches the route
➡ Between request & response

Built-in Middleware
app.use(express.json());

Used for:

Parsing JSON body

Custom Middleware
app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});
📁 MVC Folder Structure
Why?

To make the project:

Scalable

Clean

Maintainable

Structure
controllers → Logic
routes → Endpoints
app.js → Server setup
🧠 Controller

Contains business logic.

exports.getUsers = (req, res) => {
  res.json(["Krushna", "Ram", "Shyam"]);
};
🛣️ Routes File
const express = require("express");
const router = express.Router();
const { getUsers } = require("../controllers/userController");

router.get("/", getUsers);

module.exports = router;
🔗 Connecting Routes to Server
const userRoutes = require("./routes/userRoutes");

app.use("/users", userRoutes);
📊 Status Codes

Common HTTP status codes:

200 → OK

201 → Created

400 → Bad request

404 → Not found

500 → Server error

Example:

res.status(201).json({ message: "User created" });
🌍 JSON Data Handling
Sending JSON
res.json({ name: "Krushna" });
Receiving JSON
app.use(express.json());

const { name } = req.body;
🚀 Key Differences — Node vs Express
Feature	Node HTTP	Express
Routing	Manual	Automatic
JSON handling	Manual	Built-in
Middleware	Not available	Available
Code size	Large	Small & clean
🔥 Best Practices

✅ Use MVC structure
✅ Keep routes & logic separate
✅ Use proper status codes
✅ Use middleware for reusable logic
✅ Always handle errors

❌ Common Beginner Mistakes

❌ Not using express.json()
❌ Putting all code in one file
❌ Not sending status codes
❌ Mixing logic inside routes

🧩 Real-World Use

Express is used for:

REST API development

Authentication systems

Database connection

Full stack MERN apps

🎯 Interview Questions
Q1. What is Express.js?

A framework for Node.js that simplifies backend development.

Q2. What is middleware?

A function that executes between request and response.

Q3. Difference between app.use() and app.get()?

app.use() → For middleware
app.get() → For specific route

Q4. Why use Express?

To write clean, scalable, and fast backend code.

🏁 Summary

Express makes backend development easy

Routing becomes clean

Middleware is powerful

MVC structure improves scalability

This is the foundation for building REST APIs and full-stack applications
```
