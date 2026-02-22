const http = require("http");
const userRoutes = require("./routes/userRoutes");
const logger = require("./utils/logger");

const server = http.createServer((req, res) => {
  logger(req.method, req.url);

  if (req.url.startsWith("/users")) {
    userRoutes(req, res);
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Node.js Basics 🚀");
  }
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));