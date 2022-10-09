import express from "express";
import { getAllEnviados } from "../controllers/EnviadoController.js";
const router = express.Router();

router.get('/', getAllEnviados)

export default router