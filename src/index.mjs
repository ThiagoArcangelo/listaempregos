import express from 'express';
import cors from 'cors';

import router  from './routes/routeIndex.mjs';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extends: true}));

app.use(router);

const port = 3000;

app.listen(port, () => {
  console.log(`Conectado na porta: ${port}`);
});