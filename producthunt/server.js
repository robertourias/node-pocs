const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/producthuntapi', { useNewUrlParser: true });

// Primeira rota
app.get('/', (req, res) => {
    res.send('Hello node');
});

app.listen(3001);