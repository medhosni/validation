import express from "express";
import multer from '../Middlewares/multer-config.js';
import { add, getById, getAll, update, remove , getBytypeDeTournage, getBytitre } from "../Controllers/FilmController.js";

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
.route("/getBytypeDeTournage/:typeDeTournage")
.get(getBytypeDeTournage)
router
.route("/getBytitre/:titre")
.get(getBytitre)

export default router;