const { Server } = require("socket.io");

function createSocketServer(httpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log("New client connected", socket.id);
    socket.emit("userID", socket.id);

    socket.on("message", (msg) => {
      let userMSG = [];
      // console.log("Received message:", msg);
      let message = {
        id: socket.id,
        msg: msg,
      };
      userMSG.push(message);
      io.emit("message-response", userMSG);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected", socket.id);
    });
  });
}
``;

module.exports = createSocketServer;
