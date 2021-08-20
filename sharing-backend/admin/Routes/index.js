import express from "express";

import VerifyToken from "../../utils/verifyToken.js";
import uploadBook from "../Controller/uploadBook.js";
import uploadStationary from "../Controller/uploadStationary.js";
import getBooks from "../Controller/getBooks.js";
import getStationary from "../Controller/getStationary.js";
import approveBook from "../Controller/approveBook.js";
import updateSettings from "../Controller/updateSettings.js";
import getSettings from "../Controller/getSettings.js";
import approveStationary from "../Controller/approveStationary.js";
import denyBook from "../Controller/denyBook.js";
import denyStationary from "../Controller/denyStationary.js";

const router = express.Router();

router.post("/upload-book", VerifyToken, uploadBook);
router.post("/upload-stationary", VerifyToken, uploadStationary);
router.get("/get-uploaded-books", VerifyToken, getBooks);
router.get("/get-uploaded-stationarys", VerifyToken, getStationary);
router.get("/approve-book", VerifyToken, approveBook);
router.get("/approve-stationary", VerifyToken, approveStationary);
router.get("/deny-book-request", VerifyToken, denyBook);
router.get("/deny-stationary-request", VerifyToken, denyStationary);
router.post("/update-settings", VerifyToken, updateSettings);
router.get("/get-settings", VerifyToken, getSettings);

export default router;
