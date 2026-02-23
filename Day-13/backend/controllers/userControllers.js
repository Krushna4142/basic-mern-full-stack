let users = [
  { id: 1, name: "Krushna", role: "Developer" }
];

export const getUsers = (req, res) => {
  res.status(200).json(users);
};

export const createUser = (req, res) => {
  const newUser = {
    id: Date.now(),
    name: req.body.name,
    role: req.body.role
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, role } = req.body;

  users = users.map(user =>
    user.id == id ? { ...user, name, role } : user
  );

  res.status(200).json({ message: "User updated" });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter(user => user.id != id);

  res.status(200).json({ message: "User deleted" });
};