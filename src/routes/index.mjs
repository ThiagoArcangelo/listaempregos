import Router from "express";
const router = Router();

import getRouter from "./getRoutes.mjs";

router.use("/", getRouter);

export default router;
