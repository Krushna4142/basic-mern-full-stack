# 🧠 Day 11 – Node.js Notes

## 🔹 What is Node.js?

Node.js allows JavaScript to run outside the browser.

Built on:
V8 Engine

---

## 🔹 Why Node.js?

- Fast execution
- Non-blocking
- Scalable
- Backend development using JS

---

## 🔹 Running a File

node filename.js

---

## 🔹 Global Objects

**dirname → current folder path  
**filename → current file path

---

## 🔹 Modules

Export:

module.exports = data

Import:

const data = require('./file')

---

## 🔹 Built-in Modules

### 1️⃣ File System

const fs = require('fs')

### 2️⃣ HTTP

const http = require('http')

---

## 🔹 Creating Server

http.createServer((req, res) => {
res.write("Hello Node")
res.end()
})
