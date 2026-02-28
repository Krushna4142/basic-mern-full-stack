const userModel = require("../models/userModel");

const getUsers = (req, res) => {
  const users = userModel.getAllUsers();
  res.json(users);
};

const getUser = (req, res) => {
  const id = parseInt(req.params.id);
  const user = userModel.getUserById(id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

const createUser = (req, res) => {
  const { name, role } = req.body;

  if (!name || !role) {
    return res.status(400).json({ message: "Name and Role are required" });
  }

  const newUser = {
    id: Date.now(),
    name,
    role
  };

  const createdUser = userModel.createUser(newUser);
  res.status(201).json(createdUser);
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedUser = userModel.updateUser(id, req.body);

  if (!updatedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(updatedUser);
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const deletedUser = userModel.deleteUser(id);

  if (!deletedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({ message: "User deleted successfully" });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};