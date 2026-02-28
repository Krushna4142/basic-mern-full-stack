<div align="center">

# 📅 Day 15 — MVC Architecture

### Structuring Backend Applications with Model-View-Controller Pattern

<img src="https://img.shields.io/badge/Day-15-blue?style=for-the-badge" />
<img src="https://img.shields.io/badge/Topic-MVC_Architecture-green?style=for-the-badge" />
<img src="https://img.shields.io/badge/Stack-Node.js-orange?style=for-the-badge" />

</div>

---

## 🚀 What I Learned Today

Today I moved from writing simple APIs to structuring applications professionally using **MVC Architecture**.

Instead of keeping everything in one file, I learned how to separate:

- 📦 **Models** → Data structure & business logic
- 🎮 **Controllers** → Request handling logic
- 🛣️ **Routes** → API endpoint definitions
- 🖥️ **Views (Optional)** → UI layer (if needed)

This makes applications:

- Cleaner
- Scalable
- Maintainable
- Industry-ready

---

## 🧠 Why MVC is Important?

Without MVC:

- Code becomes messy
- Hard to debug
- Not scalable

With MVC:

- Clear separation of concerns
- Easy to add new features
- Team collaboration becomes easier

---

## 🏗️ Project Structure

day-15-mvc-architecture/<br>
│<br>
├── server.js<br>
│<br>
├── models/<br>
│ └── userModel.js<br>
│<br>
├── controllers/<br>
│ └── userController.js<br>
│<br>
├── routes/<br>
│ └── userRoutes.js<br>
│<br>
└── package.json<br>

---

## 🔄 How MVC Flow Works

1️⃣ Client sends request  
2️⃣ Route receives request  
3️⃣ Controller processes logic  
4️⃣ Model handles data  
5️⃣ Response sent back to client

Client → Route → Controller → Model → Response

---

## 🛠️ Features Implemented

- ✅ Get all users
- ✅ Get single user
- ✅ Create user
- ✅ Update user
- ✅ Delete user

---

## 🎯 Key Concepts Covered

- Separation of Concerns
- Folder Structuring
- Clean Code Practice
- Scalable Backend Design
- Professional API Structure

---

## 📌 Real World Relevance

Most production-level backend systems use MVC (or similar patterns).

Frameworks that follow MVC pattern:

- Express.js (structured manually)
- Django
- Spring Boot
- Laravel

Understanding MVC is a **major step toward System Design thinking**.

---

## 🔥 Learning Outcome

Today I stopped writing just APIs…

I started building **structured backend systems.**

---

<div align="center">

### ⏭️ Next Day

[➡️Day 16 — Authentication & Authorization](../Day-16/README.md)

</div>
