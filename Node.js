// server.js

const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3001;

const apiKey = 'ClimaApp';

// Rota para obter o clima atual
app.get('/weather', async (req, res) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=YOUR_CITY&appid=${apiKey}&units=metric`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erro ao obter dados de clima:', error);
    res.status(500).json({ error: 'Erro ao obter dados de clima' });
  }
});

app.listen(port, () => {
  console.log(`Servidor de clima em tempo real rodando em http://localhost:${port}`);
});
