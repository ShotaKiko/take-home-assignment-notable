import express from "express";
import bodyParser from "body-parser";

import doctorsRoutes from "./routes/doctors.js";

import { ValidationError } from "express-json-validator-middleware";

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use("/doctors", doctorsRoutes);

app.get("/", (req, res) =>
  res.send("Welcome to Notable's doctor calender api!")
);

app.all("*", (req, res) =>
  res.send("You have tried to reach a route that does not exist.")
);

app.use((error, request, response, next) => {
  // Checks if the error is a validation error
  if (error instanceof ValidationError) {
    // Respond with bad request code and apporpriate info
    response.status(400).send(error.validationErrors);
    next();
  } else {
    // Pass error on if not a validation error
    next(error);
  }
});

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);

