const express = require('express');
const rateLimit = require('express-rate-limit');
const serverless = require('serverless-http');

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // limita cada IP a 100 solicitudes por ventana de 15 minutos
  message: "Demasiadas solicitudes desde esta IP, por favor inténtelo de nuevo después de 15 minutos"
});

app.use(limiter);

app.get('/', (req, res) => {
  res.send('Esta ruta está protegida por rate limiting');
});

module.exports = app;
module.exports.handler = serverless(app);