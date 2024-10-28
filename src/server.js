import express from "express";
import cors from "cors";
import router from "./routes/index.js";

import conexaoDb from "./db/db.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({
  origin: ['https://listaempregos.vercel.app/']
}));
app.use(express.urlencoded({extended: true}));

app.use(router);
conexaoDb();

app.listen(port, () => {
  console.log(`Conectado no endereço http://localhotst:${port}`);
});
