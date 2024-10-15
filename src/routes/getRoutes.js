import Router from "express";
import main  from "../services/Processamento.js";
import { ListaEmpregos } from "../controllers/ListaEmpregosController.js";

const router = Router();

router.get("/atualizar", main);
router.get("/", ListaEmpregos);

export default router;
