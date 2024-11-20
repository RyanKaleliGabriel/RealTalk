# Broadcast Server

> A command-line broadcast server for efficiently distributing messages to multiple connected clients in real time.

## Table of Contents

- [Take Aways](#take-aways)
- [Requirements](#requirements)
- [Additionals](#additionals)
- [Stack](#stack)
- [Usage](#usage)
  - [Installation](#installation)
  - [Expected Output](#expected-output)
- [Project URL](#project-url)

## Take Aways

- Understanding how to work with websockets.

- Implementing real-time communication between clients and servers.

- Understand how the real-time features of applications like chat applications, live scoreboards, etc., work.

## Requirements

Build a CLI based application that can be used to either start the server or connect to the server as a client. Here are the sample commands that you can use:

- broadcast-server start - This command will start the server.

- broadcast-server connect - This command will connect the client to the server.

## Additionals

The server should be able to handle multiple clients connecting and disconnecting gracefully.

## Stack

- Node Js
- Docker
- WebSockets

## Usage

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/RyanKaleliGabriel/RealTalk.git
   cd RealTalk.git
   ```

2. Set Environment Variables: The github API requires authentication for certain request. To avoid rate limits, you can use a personal Github access token. Create a .env file and add the your access token.

   ```bash

   PORT=<your_server_port_number>
   HOST=<your_websocket_host>
   SERVER_URL=<websocket_server_url>
   ```

3. Running the CLI: Compile the typecript files then call it with the required arguements.

   ```bash
   #Start the main broadcast server
   tsc

   node dist/broadcast-server.js start


   #On different terminals start different connect the client to the main broadcast server

   node dist/broadcast-server.js connect

   ```

   - [start] (required): This command will start the server..
   - [origin] (required): This command will connect the client to the server.

### Expected Output

```bash
1. Main broadcast server conncetion
   node dist/broadcast-server.js start
   Broadcast server started on ws://localhost:3000
   New client connected.
   Received: Hello
   New client connected.
   Received: Hello from client 2

2. Fist client conncetion
   node dist/broadcast-server.js connect
   Connected to the server
   Type a message and press enter to send
   Hello
   Broadcast from server: Hello
   Broadcast from server: Hello from client 2

3. Second client connection
   node dist/broadcast-server.js connect
   Connected to the server
   Type a message and press enter to send
   Hello from client 2
   Broadcast from server: Hello from client 2
```


## Project URL

https://roadmap.sh/projects/broadcast-server
