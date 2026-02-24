# 📝 Day 14 – Postman Testing Notes

## 📌 Why API Testing is Important

- It verifies that backend endpoints are working correctly
- Helps detect bugs before frontend integration
- Ensures correct request & response structure
- Validates HTTP status codes
- Simulates real client-server communication

---

## 📌 What is Postman?

Postman is an API client that allows us to:

- Send HTTP requests
- View server responses
- Test REST APIs
- Save API collections
- Automate testing (later)

It acts as a **frontend for backend testing**.

---

## 📌 HTTP Methods Used

### 🔹 GET

Used to fetch data from the server

Example:
GET → `/api/users`

---

### 🔹 POST

Used to create new data

Body → JSON

{
"name": "Krushna",
"role": "Developer"
}

---

### 🔹 PUT

Used to update existing data

PUT → `/api/users/:id`

---

### 🔹 DELETE

Used to remove data

DELETE → `/api/users/:id`

---

## 📌 Important Status Codes

| Code | Meaning            |
| ---- | ------------------ |
| 200  | Request successful |
| 201  | Resource created   |
| 400  | Bad request        |
| 404  | Not found          |
| 500  | Server error       |

---

## 📌 How API Testing Works

1. Start backend server
2. Open Postman
3. Select HTTP method
4. Enter API URL
5. Send request
6. Verify response

---

## 📌 Request Body

We send data in **JSON format**

Postman → Body → raw → JSON

---

## 📌 Route Params

Used for dynamic values

Example:

PUT /api/users/123

Here:

123 → id

---

## 📌 Common Beginner Mistakes

❌ Forgetting to start the server  
❌ Using wrong HTTP method  
❌ Not selecting JSON in body  
❌ Sending empty request body  
❌ Testing wrong route

---

## 📌 Key Learning

- API should be tested before frontend connection
- Postman improves debugging speed
- Status codes are very important
- Proper API structure matters

---

## 🚀 Next Step

MongoDB integration to store real data instead of in-memory arrays.
