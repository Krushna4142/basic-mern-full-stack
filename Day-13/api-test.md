# ✅ API Testing Guide (api-test.md)

## Base URL

http://localhost:5000/api/users

---

### 🔹 GET Users

Method: GET  
URL: /

---

### 🔹 CREATE User

Method: POST  
Body (JSON):
{
"name": "John",
"role": "Tester"
}

---

### 🔹 UPDATE User

Method: PUT  
URL: /:id  
Body:
{
"name": "Updated Name",
"role": "Updated Role"
}

---

### 🔹 DELETE User

Method: DELETE  
URL: /:id
