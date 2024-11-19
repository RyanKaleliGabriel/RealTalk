#!/usr/bin/env node

import { Command } from "commander";
import startServer from "./server";
import connectClient from "./client";
const program = new Command();

program
  .command("start")
  .description("Starts the broadcast server")
  .action(() => {
    startServer();
  });

program
  .command("connect")
  .description("Connect to the broadcast server as a client")
  .action(() => {
    connectClient();
  });

program.parse(process.argv);
