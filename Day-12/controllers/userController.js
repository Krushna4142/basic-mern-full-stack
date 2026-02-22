let users = ["Krushna", "Ram", "Shyam"];

exports.getUsers = (req, res) => {
  res.status(200).json(users);
};

exports.createUser = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  users.push(name);

  res.status(201).json({
    message: "User added successfully",
    users
  });
};