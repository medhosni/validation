import express from "express";
import multer from '../Middlewares/multer-config.js';
import { add, getById, getAll, update, remove , getBylocalisationDeLaScene, getBycodePostal, getBylongitude, getBylatitude } from "../Controllers/ProduitController.js";

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
.route("/getBylocalisationDeLaScene/:localisationDeLaScene")
.get(getBylocalisationDeLaScene)
router
.route("/getBycodePostal/:codePostal")
.get(getBycodePostal)
router
.route("/getBylongitude/:longitude")
.get(getBylongitude)
router
.route("/getBylatitude/:latitude")
.get(getBylatitude)

export default router;