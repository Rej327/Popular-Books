const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test-items",
});

// GET ALL BOOKS
app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

//ADD BOOK
app.post("/books", (req, res) => {
  const q =
    "INSERT INTO books(`title`, `author`, `description`, `cover`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.author,
    req.body.description,
    req.body.cover,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

//DELETE BOOK
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM books WHERE id = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

//UPDATE BOOK
app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE books SET `title`= ?, `author`= ?, `description`= ?, `cover`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.author,
    req.body.description,
    req.body.cover,
  ];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(4000, () => {
  console.log("Connected to backend!");
});
