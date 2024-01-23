import Router from "express";
import { main } from "../controllers/MainController.mjs";

const getRouter = Router();

getRouter.get("/", main);

export default getRouter;
