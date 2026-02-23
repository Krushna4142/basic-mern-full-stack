<div align="center">

# 📅 Day 13 — REST API Fundamentals

### Designing Scalable Backend APIs with Proper Architecture

<img src="https://img.shields.io/badge/Day-13-blue?style=for-the-badge" />
<img src="https://img.shields.io/badge/Difficulty-Medium-success?style=for-the-badge" />
<img src="https://img.shields.io/badge/Focus-REST%20API-orange?style=for-the-badge" />
<img src="https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge" />

</div>

---

## 🎯 Goal of the Day

The goal of **Day 13** was to **understand REST architecture and build proper RESTful APIs**.

This day focuses on:

- REST principles
- CRUD operations
- Route structuring
- Controller separation
- Testing APIs using Postman

---

## 🧠 Concepts Used

### REST Architecture

- What is REST
- Resource-based URLs
- Stateless communication
- Standard HTTP methods

### HTTP Methods

- GET → Fetch data
- POST → Create data
- PUT → Update data
- DELETE → Remove data

### Backend Structure

- Routes
- Controllers
- Request & response handling
- Status codes

---

## 🛠️ What I Built

I built a **structured REST API** that demonstrates:

- Proper route separation
- Controller-based logic
- CRUD operations
- JSON request & response handling
- API testing workflow

This is the **real foundation of full-stack development**.

---

## 📁 Folder Structure

Day-13/<br>
├─ README.md <br>
├─ notes.md <br>
└─ backend/<br>
&nbsp;&nbsp;&nbsp;&nbsp;├─ server.js<br>
&nbsp;&nbsp;&nbsp;&nbsp;├─ routes/<br>
&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;└─ userRoutes.js<br>
&nbsp;&nbsp;&nbsp;&nbsp;├─ controllers/<br>
&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;└─ userController.js<br>
&nbsp;&nbsp;&nbsp;&nbsp;├─ models/<br>
&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;└─ userModel.js<br>
&nbsp;&nbsp;&nbsp;&nbsp;└─ package.json

---

## 🧩 How REST API Works

- Client sends HTTP request
- Route receives the request
- Controller processes logic
- Response is sent in JSON format
- Status code indicates result

This creates a **clean and scalable backend architecture**.

---

<h2>📝 Notes & Observations</h2>

REST makes backend predictable and structured

Controller separation improves scalability

HTTP methods define clear operations

Proper status codes improve API quality

<h3>💡 Key Takeaways</h3>

REST APIs are resource-based

Clean architecture is important for large projects

CRUD operations are the backbone of backend systems

Testing APIs is a mandatory developer skill

<h3>>🎯 Interview Preparation (Day 13 Level)</h3>

Q1. What is REST?

REST is an architectural style for designing networked applications using HTTP.

Q2. What is the difference between PUT and PATCH?

PUT updates the entire resource, PATCH updates partially.

Q3. Why are status codes important?

They indicate the result of an API request.

Q4. What is the role of a controller?

It contains the business logic for handling requests.

🔗 Helpful References

🔗 https://restfulapi.net/

🔗 https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

🔗 https://expressjs.com/en/guide/routing.html

## ⏭️ What’s Next?

<div align="center">

### 👉 **Day 14 – MongoDB & Mongoose Integration**

Learn how:

- Connect MongoDB with Node.js
- Use Mongoose schemas
- Perform database CRUD operations
- Store persistent data

<br/>

[➡️ Go to Day 14](../Day-14/README.md)

</div>

---
