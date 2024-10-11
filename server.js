import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import GameDig from 'gamedig';
import cors from 'cors';

import { serverConfigs } from './config/serverConfigs.js';
import { ServerInfoFetcher } from './services/ServerInfoFetcher.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3010;

app.use(express.static(path.join(__dirname, 'frontend/dist')));

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.get('/api/servers', async (req, res) => {
  const serverInfoFetcher = new ServerInfoFetcher(GameDig);
    
  try {
    const serverInfo = await serverInfoFetcher.fetchAllServersInfo(serverConfigs);
    res.json(serverInfo);
  } catch (err) {
    console.error('Error fetching server info:', err);
    res.status(500).json({ error: 'Error fetching server info.' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
