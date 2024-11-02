import express from 'express';
import path from 'path';
const app = express();

const PORT = process.env.PORT || 3000;

// Sirve los archivos estáticos del build de Vite
app.use(express.static(path.join(__dirname, 'dist')));

// Redirige todas las rutas al index.html para manejar una SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
