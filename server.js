const express = require('express');
const ejs = require('ejs');
const GameDig = require('gamedig');

const app = express();
const port = 3010;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

// Define the server configurations (replace with your own)
const serverConfigs = [
    { type: 'ut', host: '192.168.50.165', port: '7777' }, //ut99
    { type: 'ut2004', host: '192.168.50.165', port: '7782' }, //ut2004
    { type: 'minecraft', host: '192.168.50.165', port: '25565' }, //ut99
    { type: 'protocol-valve', host: '192.168.50.165', port: '26901' },//hldm
    { type: 'quake3', host: '192.168.50.165', port: '27960' }, //quak3
    { type: 'protocol-valve', host: '192.168.50.165', port: '26900' }, //ges
    { type: 'protocol-valve', host: '192.168.50.165', port: '27015' },//sven
    { type: 'protocol-valve', host: '192.168.50.165', port: '26902' }, //hldsm2
    { type: 'protocol-valve', host: '192.168.50.165', port: '26903' }, //hldms
    { type: 'protocol-valve', host: '192.168.50.165', port: '27018' }, //alienswarm
    { type: 'protocol-valve', host: '192.168.50.165', port: '27019' }, //alienswarm
    { type: 'cod4', host: '192.168.50.71', port: '28960' }, //cod4
    { type: 'swjk', host: '192.168.50.71', port: '29070' }, //jedi academi
    { type: 'protocol-valve', host: '192.168.50.71', port: '27018' }, //cs16
    { type: 'bf2', host: '192.168.50.71', port: '16567' } //bf2

    
];

app.get('/', async (req, res) => {
    const serverInfoPromises = [];

    for (const serverConfig of serverConfigs) {
        serverInfoPromises.push(fetchServerInfo(serverConfig));
    }

    try {
        const serverInfo = await Promise.all(serverInfoPromises);
        res.render('index', { servers: serverInfo });
    } catch (err) {
        console.error('Error fetching server info:', err);
        res.status(500).send('Error fetching server info.');
    }
});

async function fetchServerInfo(serverConfig) {
    try {
        const info = await GameDig.query(serverConfig);
        return info;
    } catch (error) {
        console.error(`Error fetching server info for ${serverConfig.type} at ${serverConfig.host}:${serverConfig.port}`, error);
        // You can return a placeholder or empty object here if you want to skip failed servers
        return {}; // An empty object
    }
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
