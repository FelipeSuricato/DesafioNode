const express = require("express");
const { randomUUID } = require("crypto");
const fs = require("fs");

const app = express();

app.use(express.json());

let itens = [];

fs.readFile("itens.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    itens = JSON.parse(data);
  }
})

app.post("/item", (req, res) => {
  const { id, name } = req.body;
  const item = {
    id,
    name,
    uuid: randomUUID()
  };
  itens.push(item);
  editItensFile();
  return res.json(item);
});

app.get("/item", (req, res) => {
  return res.json(itens);
});

app.get("/item/:id", (req, res) => {
  const { id } = req.params;
  const item = itens.find((item) => item.id === id);
  return res.json(item);
});

app.put("/item/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const itemIndex = itens.findIndex(item => item.id === id);
  itens[itemIndex] = {
    ...itens[itemIndex],
    name
  }
  editItensFile();
  return res.json({ message: "item changed" });
});

app.delete("/item/:id", (req, res) => {
  const { id } = req.params;
  const itemIndex = itens.findIndex(item => item.id === id);
  itens.splice(itemIndex, 1);
  editItensFile();
  return res.json({ message: "item deleted" });
});

function editItensFile() {
  fs.writeFile("itens.json", JSON.stringify(itens), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("item added");
    }
  });
}

app.listen(4002, () => console.log("Server started!"));