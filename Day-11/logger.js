const logger = (method, url) => {
  const time = new Date().toLocaleTimeString();
  console.log(`[${time}] ${method} ${url}`);
};

module.exports = logger;