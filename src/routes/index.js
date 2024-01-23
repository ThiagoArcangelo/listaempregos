import Router from "express";
const router = Router();

import getRouter from "./getRoutes.js";

router.use("/", getRouter);

export default router;
