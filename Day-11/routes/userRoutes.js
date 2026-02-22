const { getUsers, createUser } = require("../controllers/userController");

const userRoutes = (req, res) => {
  if (req.method === "GET" && req.url === "/users") {
    getUsers(req, res);
  } 
  else if (req.method === "POST" && req.url === "/users") {
    createUser(req, res);
  } 
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route Not Found" }));
  }
};

module.exports = userRoutes;