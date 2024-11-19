import dotenv from "dotenv";
import WebSocket from "ws";

dotenv.config();

const port = Number(process.env.PORT);

const serverOptions = {
  port,
  clientTracking: true,
  host: process.env.HOST,
};

const startServer = () => {
  const server = new WebSocket.Server(serverOptions);
  // A JavaScript Set is a collection of unique values.
  // Each value can only occur once in a Set.
  // The values can be of any type, primitive values or objects.
  const clients: Set<WebSocket> = new Set();

  console.log(`Broadcast server started on ws://localhost:${port}`);

  server.on("connection", (ws) => {
    console.log("New client connected.");
    clients.add(ws);

    ws.on("message", (message) => {
      console.log(`Received: ${message}`);
      clients.forEach((client) => {
        // checks if The connection is open and ready to communicate.
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    });

    ws.on("close", () => {
      console.log("Client disconnected");
      clients.delete(ws);
    });

    ws.on("error", (error) => {
      console.error(`Client error ${error.message}`);
      clients.delete(ws);
    });
  });
};

export default startServer;
