const express = require("express");
const mongoose = require("mongoose");
const animeRoutes = require("./routes/animes");

// Configuración de la conexión a la base de datos MongoDB
mongoose
  .connect("mongodb://alex:12345@localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexión exitosa a la base de datos");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });

// Configuración de Express
const app = express();
app.use(express.json());

// Configuración de las rutas
app.use("/api", animeRoutes);

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
