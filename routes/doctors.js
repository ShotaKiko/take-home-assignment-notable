import express from "express";

import {
  getAllDoctors,
  createAppointment,
  deleteAppointment,
} from "../controllers/doctors.js";

const router = express.Router();

router.get("/", getAllDoctors);

router.post("/:id/appointments", createAppointment);

router.delete("/appointments/:id", deleteAppointment);

export default router;
