import Router from "express";
import  {dados, BuscaTitulo}  from "../controllers/BuscaDadosController.js";


const router = Router();

router.get("/lista", dados);
router.get("/lista/busca", BuscaTitulo)

export default router;