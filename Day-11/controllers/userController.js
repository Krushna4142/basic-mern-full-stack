let users = [
  { id: 1, name: "Krushna" },
  { id: 2, name: "Node Learner" }
];

const getUsers = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(users));
};

const createUser = (req, res) => {
  let body = "";

  req.on("data", chunk => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push({ id: users.length + 1, ...newUser });

    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "User added", users }));
  });
};

module.exports = { getUsers, createUser };