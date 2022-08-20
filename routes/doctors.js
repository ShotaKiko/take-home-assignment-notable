import express from "express";

import {
  getAllDoctors,
  createAppointment,
  deleteAppointment,
  getDoctorsAppointments,
} from "../controllers/doctors.js";

const router = express.Router();

router.get("/", getAllDoctors);

router.post("/:id/appointments", createAppointment);

router.delete("/appointments/:id", deleteAppointment);

router.get("/:id", getDoctorsAppointments);

export default router;
