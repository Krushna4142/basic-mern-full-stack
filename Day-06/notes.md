# 📘 Day 06 — Forms & Multiple Inputs Notes

---

## 1️⃣ Controlled Components

A controlled component is an input element whose value is controlled by React state.

Example:

const [name, setName] = useState("");

<input
type="text"

value={name}

onChange={(e) => setName(e.target.value)}

/>

React becomes the single source of truth.

---

## 2️⃣ Handling Multiple Inputs

Instead of creating separate states for each field, we can store all form values inside one object.

Example:

const [formData, setFormData] = useState({

name: "",

email: "",

password: ""

});

---

## 3️⃣ Dynamic Input Handling

Using the name attribute:

function handleChange(e) {

setFormData({

    ...formData,

    [e.target.name]: e.target.value

});

}

This allows updating the correct field dynamically.

---

## 4️⃣ Form Submission

function handleSubmit(e) {

e.preventDefault();

console.log(formData);
}

preventDefault() prevents page reload.

---

## 5️⃣ Important Observations

Controlled components give predictable behavior

State updates happen on every keystroke

Always use value with inputs

Keep form logic clean and readable

---

## 🔎 Common Mistakes

Forgetting preventDefault()

Not spreading previous state

Forgetting name attribute

Mixing controlled and uncontrolled inputs

---

## 🧠 Summary

Forms in React are powerful when handled correctly.
Managing multiple inputs becomes simple when using a single state object.
