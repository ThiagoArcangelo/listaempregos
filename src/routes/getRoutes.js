import Router from "express";
import main  from "../controllers/mainController.js";

const getRouter = Router();

getRouter.get("/", main);

export default getRouter;
