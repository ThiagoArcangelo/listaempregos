import Router from "express";
import main  from "../services/Processamento.js";
import LerArquivo from "../services/LerArquivo.js";

const router = Router();

router.get("/", main);
router.get("/lerarquivo", LerArquivo);

export default router;
