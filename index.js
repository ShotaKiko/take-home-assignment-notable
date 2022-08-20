import express from "express";
import bodyParser from "body-parser";

import doctorsRoutes from "./routes/doctors.js";

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

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);
