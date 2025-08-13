const app = require("./src/app");
const createSocketServer = require("./src/socket/socket.server.js");
const { createServer } = require("http");

const httpServer = createServer(app);

createSocketServer(httpServer);

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});
