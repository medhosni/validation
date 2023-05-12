import express from 'express';
import protect from '../Middlewares/authorization.js';
import multer from '../Middlewares/multer-config.js';
import {signin, signup, getByuserName, getByemail, getBypassword, getBytype } from "../Controllers/UserController.js";

const router = express.Router();

router
.route("/signup")
.post(multer,signup)

router
.route("/signin")
.post(signin)


router
.route("/getByuserName/:userName")
.get(getByuserName)
router
.route("/getByemail/:email")
.get(getByemail)
router
.route("/getBypassword/:password")
.get(getBypassword)
router
.route("/getBytype/:type")
.get(getBytype)

export default router;