const express = require("express");
const bodyParser = require("body-parser");

const projects = require("./projects/projects-router");
const actions = require("./actions/actions-router");

const server = express();
require("dotenv").config();
server.use(express.json());

server.use(bodyParser.json());

server.use("/api/projects", projects);
server.use("/api/actions", actions);

server.use("/", (req, res) => {
  console.log("whats up shucks");
});

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
