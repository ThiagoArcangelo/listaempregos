import express from "express";
import cors from "cors";
import router from "./routes/index.js";

import db from "./db/db.js";

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extends: true }));

app.use(router);
app.use(db);

const port = 3000;

app.listen(port, () => {
  console.log(`Conectado no endereço http://localhotst:${port}`);
});
