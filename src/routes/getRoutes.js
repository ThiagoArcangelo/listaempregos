import Router from "express";
import main  from "../services/Processamento.js";

const getRouter = Router();

getRouter.get("/", main);

export default getRouter;
