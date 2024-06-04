import Router from "express";
const router = Router();

import getRouter from "./getRoutes.js";
import listRouter from "./listRoutes.js";

router.use("/", getRouter);
router.use("/", listRouter);

export default router;
