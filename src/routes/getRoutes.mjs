import Router from "express";
import controller from "../controllers/mainController.mjs";

const getRouter = Router();

getRouter.get("/", controller);

export default getRouter;
