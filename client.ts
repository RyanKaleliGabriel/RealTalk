import WebSocket from "ws";
import readline from "readline";
import dotenv from "dotenv";

dotenv.config();

const connectClient = () => {
  const serverUrl = process.env.SERVER_URL as string;
  const ws = new WebSocket(serverUrl);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Emitted when the connection is established.
  ws.on("open", () => {
    console.log("Connected to the server");
    console.log("Type a message and press enter to send");

    rl.on("line", (message) => {
      ws.send(message);
    });
  });

  // Emitted when a message is received. data is the message content. isBinary specifies whether the message is binary or not.
  ws.on("message", (data) => {
    console.log(`Broadcast from server: ${data}`);
  });

  // Emitted when the connection is closed.
  ws.on("close", (code, reason) => {
    console.log(`Disconnected from server with code ${code}/ ${reason}`);
    rl.close();
  });

  ws.on("error", (error) => {
    console.error(`Connection error: ${error.message}`);
    rl.close();
  });
};

export default connectClient;
