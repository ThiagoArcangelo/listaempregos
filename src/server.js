import express from "express";
import eventEmmiter from "events";
import axios from "axios";
import cron from "node-cron";
import cors from "cors";
// import router from "./routes/getRoutes.js";
import router from "./routes/index.js";
// import EventEmmiter from "events";

import conexaoDb from "./db/db.js";

const app = express();
const port = process.env.PORT;
// const emitter = new EventEmmiter();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

const evento = new eventEmmiter();

cron.schedule('* * 13 * * 1-5 ', () => {
  evento.on('open', () => {
    axios.get(`http://localhost:${port}`);
  });
});

app.use(router);
conexaoDb();

app.listen(port, () => {
  console.log(`Conectado no endereço http://localhotst:${port}`);
});
