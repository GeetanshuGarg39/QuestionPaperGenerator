import express from "express";
import {  generatePaper } from "../controllers/questions-controller.js";


const router = express.Router();

// router.post("/addQuestions",addQuestions)
router.post("/generate-paper",generatePaper)

export default router;