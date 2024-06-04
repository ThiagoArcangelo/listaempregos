import express from "express";
import cors from "cors";
// import router from "./routes/getRoutes.js";
import router from "./routes/index.js";

import conexaoDb from "./db/db.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use(router);
conexaoDb();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Conectado no endereço http://localhotst:${port}`);
});
