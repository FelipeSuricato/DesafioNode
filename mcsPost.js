const express = require("express");
const db = require("../WeesuDesafio/database");

const app = express();
app.use(express.json());
app.post("/item", async (req, res) => {
  const jsonBody = req.body;
  const { rows } = await db.query(
    "INSERT INTO mlb_json (jsonBody) VALUES ($1)",
    [jsonBody]
  );
  res.status(201).send(jsonBody);
});
app.get("/item", async (req, res) => {
  const response = await db.query("SELECT * FROM mlb_json ORDER BY jsonId ASC");
  res.status(200).send(response.rows);
});
app.get("/item/:id", async (req, res) => {
  //buscar no bd um registro e retornar
  const { id } = req.params;
  const response = await db.query('SELECT * FROM mlb_json WHERE jsonId = $1', [id]);
  res.status(200).send(response.rows);
});
app.listen(4002, () => console.log("Server started!"));