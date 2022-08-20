import express from "express";

import {
  getAllDoctors,
  createAppointment,
  deleteAppointment,
  getDoctorsAppointments,
} from "../controllers/doctors.js";

import { Validator } from "express-json-validator-middleware";

import {
  newAppointmentSchema,
  appointmentDateSchema,
} from "../schema/validations.js";

const router = express.Router();

const { validate } = new Validator();

router.get("/", getAllDoctors);

router.post(
  "/:id/appointments",
  validate({ body: newAppointmentSchema }),
  createAppointment
);

router.delete("/appointments/:id", deleteAppointment);

router.get(
  "/:id",
  validate({ body: appointmentDateSchema }),
  getDoctorsAppointments
);

export default router;
