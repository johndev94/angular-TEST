const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Mock data for football players
const players = [
    { id: 1, name: 'Lionel Messi', full_name: 'Lionel Andres Messi', dob: 'June 24, 1987', position: 'Forward'},
    { id: 2, name: 'Cristiano Ronaldo', full_name: 'Cristiano Ronaldo dos Santos Aveiro', dob: 'February 5, 1985', position: 'Forward'},
    { id: 3, name: 'Neymar Jr', full_name: 'Neymar da Silva Santos Junior', dob: 'February 5, 1992', position: 'Forward'},
    // Add more players as needed
];

// Middleware to allow cross-origin requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});
const corsOptions = {
    origin: 'http://localhost:4200', // Allow only this origin to connect
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
  };
app.use(express.json());
app.use(cors(corsOptions));

// GET endpoint to retrieve players
app.get('/players', (req, res) => {
    res.json(players);
});

// GET endpoint to retrieve a player by id
app.get('/players/:id', (req, res) => {
    const playerId = parseInt(req.params.id);
    const player = players.find(player => player.id === playerId);
    if (player) {
        res.json(player);
    } else {
        res.status(404).json({ message: 'Player not found' });
    }
});

// POST endpoint to add a new player
app.post('/players', (req, res) => {
    const newPlayer = req.body; // This will work after adding express.json() middleware
    players.push(newPlayer);
    res.status(201).json(newPlayer);
});

// PUT endpoint to update a player
app.put('/players/:id', (req, res) => {
    const player = players.find(p => p.id === parseInt(req.params.id));
    if (player) {
        Object.assign(player, req.body);
        res.json(player);
    } else {
        res.status(404).send({ message: 'Player not found' });
    }
});

// DELETE endpoint to remove a player
app.delete('/players/:id', (req, res) => {
    const initialLength = players.length;
    players = players.filter(player => player.id !== parseInt(req.params.id));
    if (players.length < initialLength) {
        res.status(204).send();
    } else {
        res.status(404).send({ message: 'Player not found' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
