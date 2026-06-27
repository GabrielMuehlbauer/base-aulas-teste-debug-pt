import express from "express";
import Controller from "../controllers/exercicios.js";

const router = express.Router()

router.post("/somar", Controller.Somar)
router.post("/subtrair", Controller.Subtrair)
router.post("/multiplicar", Controller.Multiplicar)
router.post("/dividir", Controller.Dividir)
router.post("/potenciar", Controller.Potencia)
router.post("/radiciar", Controller.Radiciar)

export default router;