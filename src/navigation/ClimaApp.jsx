// ClimaApp.jsx

import React, { useState, useEffect } from 'react';

function ClimaApp() {
  const [clima, setClima] = useState(null);

  useEffect(() => {
    fetch('/weather')
      .then(response => response.json())
      .then(data => setClima(data))
      .catch(error => console.error('Erro ao obter dados de clima:', error));
  }, []);

  return (
    <div>
      <h1>Aplicativo de Clima</h1>
      {clima && (
        <div>
          <h2>Clima em {clima.name}</h2>
          <p>Temperatura: {clima.main.temp}°C</p>
          <p>Condição: {clima.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default ClimaApp;
