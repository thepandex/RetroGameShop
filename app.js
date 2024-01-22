const express = require('express');
const app = express();
const path = require('path');

// Configuración del motor de vistas y directorio de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src')));

// Rutas
app.get('/', (req, res) => {
  res.render('index');
});

// Manejo de errores 404
app.use((req, res, next) => {
  res.status(404).send('Página no encontrada');
});

// Manejo de errores 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

const PORT = 3000;
const IP = 'localhost';

app.listen(PORT, IP, () => {
  console.log(`Servidor ejecutándose en http://${IP}:${PORT}/`);
});