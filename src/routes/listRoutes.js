import Router from "express";
import  {RetornaDados, BuscaTitulo}  from "../controllers/BuscaDadosController.js";

const router = Router();

router.get("/lista", RetornaDados);
router.get("/lista/busca", BuscaTitulo)

export default router;