import Router from 'express';
const router = Router();

import getRouter from './getRoutes.mjs';

router.use('/scrap' , getRouter);

export default router

