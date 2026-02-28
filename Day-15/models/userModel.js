let users = [
  { id: 1, name: "Krushna", role: "Developer" },
  { id: 2, name: "Sam", role: "Designer" }
];

const getAllUsers = () => users;

const getUserById = (id) => users.find(user => user.id === id);

const createUser = (newUser) => {
  users.push(newUser);
  return newUser;
};

const updateUser = (id, updatedData) => {
  const user = users.find(user => user.id === id);
  if (!user) return null;

  user.name = updatedData.name || user.name;
  user.role = updatedData.role || user.role;

  return user;
};

const deleteUser = (id) => {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return null;

  const deletedUser = users.splice(index, 1);
  return deletedUser;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};