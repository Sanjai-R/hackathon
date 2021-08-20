import express from "express";

import createUser from "../Controller/createUser.js";
import getUser from "../Controller/getUser.js";
import loginUser from "../Controller/loginUser.js";
import VerifyToken from "../../utils/verifyToken.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/get-user-by-token", VerifyToken, getUser);

export default router;
