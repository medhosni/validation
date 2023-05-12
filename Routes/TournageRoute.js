import express from "express";
import multer from '../Middlewares/multer-config.js';
import { add, getById, getAll, update, remove , getBynom, getBydateDeDebut, getBydateDeFin } from "../Controllers/TournageController.js";

const router = express.Router();

router
.route("/add")
.post(add)

router
.route("/getById/:id")
.get(getById)

router
.route("/getAll")
.get(getAll)

router
.route("/update/:id")
.put(update)

router
.route("/remove/:id")
.delete(remove)

router
.route("/getBynom/:nom")
.get(getBynom)
router
.route("/getBydateDeDebut/:dateDeDebut")
.get(getBydateDeDebut)
router
.route("/getBydateDeFin/:dateDeFin")
.get(getBydateDeFin)

export default router;