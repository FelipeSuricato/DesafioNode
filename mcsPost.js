const express = require("express");
const db = require("./database");

const app = express();
app.use(express.json());
app.post("/item", async (req, res) => {
  const jsonBody = req.body;
  const { rows } = await db.query(
    "INSERT INTO desafio.mlb_json (json) VALUES ($1)",
    [jsonBody]
  );
  res.status(201).send(jsonBody);
});
app.get("/item", async (req, res) => {
  const response = await db.query("SELECT * FROM desafio.mlb_json ORDER BY id ASC");
  res.status(200).send(response.rows);
});
app.get("/item/:id", async (req, res) => {
  //buscar no bd um registro e retornar
  const { id } = req.params;
  const response = await db.query('SELECT * FROM desafio.mlb_json WHERE id = $1', [id]);
  res.status(200).send(response.rows);
});
app.get("/status", async (req, res) => {
  //buscar no bd um registro e retornar    
  res.status(200).send("{\"status\": \"Ativo\"}");
});
app.listen(4002, () => console.log("Server started!"));