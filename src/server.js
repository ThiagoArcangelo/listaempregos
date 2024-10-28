import express from "express";
import eventEmmiter from "events";
import axios from "axios";
import cors from "cors";
import router from "./routes/index.js";

import conexaoDb from "./db/db.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.urlencoded({extended: true}));

const evento = new eventEmmiter();

app.use(router);
conexaoDb();

app.listen(port, () => {
  console.log(`Conectado no endereço http://localhotst:${port}`);
});
