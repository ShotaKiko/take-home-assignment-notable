import express from "express";

import { getAllDoctors, createAppointment } from "../controllers/doctors.js";

const router = express.Router();

router.get("/", getAllDoctors);

router.post("/:id", createAppointment);

export default router;
