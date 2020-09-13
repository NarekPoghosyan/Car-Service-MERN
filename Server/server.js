const { MongoClient, ObjectID } = require("mongodb");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
mongoose.Promise = require("bluebird");

const server = express();
server.use(bodyParser.json());
server.use(cors());

mongoose.connect("mongodb://localhost:27017/service");

const db = mongoose.connection;

const PORT = process.env.PORT || 3030;

server.get("/", (req, res) => {
  db.collection("cars")
    .find({})
    .toArray(function (error, docs) {
      if (error) {
        throw error;
      }
      res.json(docs);
    });
});

server.post("/add", (req, res) => {
  const data = req.body;
  db.collection("cars").insertOne(data, function (err, res) {
    if (err) throw err;
  });
  res.end();
});

server.put("/update/:id", (req, res) => {
  db.collection("cars").updateOne(
    { _id: ObjectID(req.params.id) },
    { $set: req.body }
  );
  res.end();
});

server.delete("/cars/:id", (req, res) => {
  db.collection("cars").deleteOne({ _id: ObjectID(req.params.id) });
  res.end();
});

server.listen(PORT, (data) => {
  console.log("Server start");
});
