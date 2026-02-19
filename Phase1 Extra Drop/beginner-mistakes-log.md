# 🧠 Beginner Mistakes Log – React

## ❌ Mistake 1: Not using key in list

Bad:

```jsx
items.map(item => <li>{item.name}</li>)
Good:

jsx
Copy code
items.map(item => <li key={item.id}>{item.name}</li>)
❌ Mistake 2: Mutating state directly
jsx
Copy code
count++
✅

jsx
Copy code
setCount(count + 1)
❌ Mistake 3: Too big components
🔧 Fix → Break into smaller components

❌ Mistake 4: Wrong folder structure
✔ Use:

components

pages

hooks

assets

❌ Mistake 5: Props drilling everywhere
🚀 Future fix → Context API

```

🎯 Learning from Mistakes = Real Growth
