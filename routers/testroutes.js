import express from "express";
import { testpostcontroller } from "../controllers/testcontroller.js";

//object
const router = express.Router()

//router
router.post('/test-post', testpostcontroller);
//export
export default router