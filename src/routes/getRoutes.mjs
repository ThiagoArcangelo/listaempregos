import Router from 'express';
import listCrowler from '../controllers/crowlerController.mjs';

const getRouter = Router();

getRouter.get("/", listCrowler);

export default getRouter;