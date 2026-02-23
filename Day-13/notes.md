# 🧠 Day 13 – REST API Fundamentals Notes

---

## 🔹 What is REST?

REST (Representational State Transfer) is an architectural style used to design scalable web APIs.

### Key Features:

- Stateless
- Client–Server architecture
- Cacheable
- Uniform interface
- Resource-based

---

## 🔹 REST vs Traditional Routing

Traditional:

/getUsers  
/addUser

REST:

GET /users  
POST /users

---

## 🔹 HTTP Methods & Their Purpose

### GET

- Fetch data
- No body required
- Safe operation

### POST

- Create new resource
- Sends data in request body

### PUT

- Update entire resource

### PATCH

- Update partial resource

### DELETE

- Remove resource

---

## 🔹 Status Codes

200 → Success  
201 → Created  
400 → Bad request  
404 → Not found  
500 → Server error

---

## 🔹 REST API Folder Structure

server.js → Entry point

routes → Define endpoints

controllers → Business logic

models → Data structure

This separation makes code:

- Clean
- Scalable
- Maintainable

---

## 🔹 Request–Response Lifecycle

1. Client sends request
2. Route matches endpoint
3. Controller executes logic
4. Response returned in JSON

---

## 🔹 JSON in REST APIs

Why JSON?

- Lightweight
- Language independent
- Easy to parse

Example:

```json
{
  "name": "Krushna",
  "role": "Developer"
}
🔹 Testing REST APIs

Tools used:

Postman

Thunder Client

Used for:

Sending requests

Checking responses

Debugging APIs

🔹 Best Practices

Use proper HTTP methods

Use meaningful route names

Send correct status codes

Keep controllers clean

Validate incoming data

🔹 Common Beginner Mistakes

Putting all logic in server.js

Not using status codes

Mixing routes and controllers

Not handling errors

🔹 Interview Quick Revision

What is REST?
What is stateless communication?
Difference between PUT & PATCH?
Why use MVC structure in backend?

🔹 One-Line Summary

REST APIs provide a structured and scalable way for frontend and backend to communicate.
```
