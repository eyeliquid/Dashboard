import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import GameDig from "gamedig";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";

import { serverConfigs } from "./config/serverConfigs.js";
import { ServerInfoFetcher } from "./services/ServerInfoFetcher.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3010;
const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(express.static(path.join(__dirname, "frontend/dist")));

app.use(
  cors({
    origin: frontendUrl,
  }),
);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: frontendUrl,
    methods: ["GET", "POST"],
  },
});

app.get("/api/servers", async (req, res) => {
  const serverInfoFetcher = new ServerInfoFetcher(GameDig);

  try {
    const serverInfo =
      await serverInfoFetcher.fetchAllServersInfo(serverConfigs);
    res.json(serverInfo);
  } catch (err) {
    console.error("Error fetching server info:", err);
    res.status(500).json({ error: "Error fetching server info." });
  }
});

// Add a new function to fetch and broadcast server info
async function fetchAndBroadcastServerInfo() {
  const serverInfoFetcher = new ServerInfoFetcher(GameDig);

  try {
    const serverInfo =
      await serverInfoFetcher.fetchAllServersInfo(serverConfigs);
    io.emit("serverUpdate", serverInfo);
  } catch (err) {
    console.error("Error fetching server info:", err);
  }
}

// Set up WebSocket connection
io.on("connection", (socket) => {
  console.log("A client connected");

  socket.on("requestInitialData", () => {
    fetchAndBroadcastServerInfo();
  });

  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});

// Fetch and broadcast server info every 30 seconds
setInterval(fetchAndBroadcastServerInfo, 30000);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
