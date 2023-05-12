import express from "express";
import multer from '../Middlewares/multer-config.js';
import { add, getById, getAll, update, remove  } from "../Controllers/User_watch_FilmController.js";

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


export default router;