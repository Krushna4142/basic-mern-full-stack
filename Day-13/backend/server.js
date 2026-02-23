import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Day 13 REST API Running 🚀" });
});

app.use("/api/users", userRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});