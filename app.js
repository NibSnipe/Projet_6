const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
app.use(express.json());

const mongodb_id = process.env.id;
const mongodb_password = process.env.password;

mongoose
  .connect(
    `mongodb+srv://${mongodb_id}:${mongodb_password}@cluster0.9nhkq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    {
      serverSelectionTimeoutMS: 5000, // Timeout après 5 secondes si MongoDB n'est pas accessible
      connectTimeoutMS: 10000, // Timeout de la connexion
    }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.error("Connexion à MongoDB échouée : ", error));

app.post("/api/stuff", (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: "Objet créé !",
  });
});

app.use((req, res) => {
  res.json({ message: "Hello World!" });
});

module.exports = app;
