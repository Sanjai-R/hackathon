import express from "express";

import getBooks from "../Controller/getBooks.js";
import getStationary from "../Controller/getStationaries.js";
import getBookByID from "../Controller/getBookById.js";
import getStationaryByID from "../Controller/getStationaryById.js";
import VerifyToken from "../../utils/verifyToken.js";
import requestBook from "../Controller/requestBook.js";
import requestStationary from "../Controller/requestStationary.js";

const router = express.Router();

router.get("/get-books", getBooks);
router.get("/get-stationaries", getStationary);
router.get("/get-book-by-id", VerifyToken, getBookByID);
router.get("/get-stationary-by-id", VerifyToken, getStationaryByID);
router.get("/request-books", VerifyToken, requestBook);
router.get("/request-stationary", VerifyToken, requestStationary);

export default router;
