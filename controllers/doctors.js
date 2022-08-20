import { v4 as uuid } from "uuid";
import { DateTime } from "luxon";

//Each doctor will be represented as an object with a uuid, first name, and last name as requested.
//Hard coding this but it would likely exist in the same format/columns in a doctors table in a db
let doctors = [
  {
    id: "b8731e39-0831-493b-b905-344d674ab660",
    firstName: "Julius",
    lastName: "Hibbert",
  },
  {
    id: "fd39f83f-9284-41b5-b773-4ad334738c2d",
    firstName: "Algernop",
    lastName: "Krieger",
  },
  {
    id: "0062e22d-6c32-42cc-80e4-14d458ce693b",
    firstName: "Nick",
    lastName: "Riviera",
  },
];

let appointments = [
  {
    id: "fc8eb7cc-b343-4a36-927b-fcd42a932098",
    patientFirstName: "Sterling",
    patientLastName: "Archer",
    dateTime: "2022-08-20T16:00",
    kindOfVisit: "New Patient",
    doctorId: "b8731e39-0831-493b-b905-344d674ab660",
  },
];

export const getAllDoctors = (req, res) => {
  //If we were using a db we would employ a helper function here that would run some sql query to get the above hard coded list
  res.send(doctors);
};

export const createAppointment = (req, res) => {
  const doctorsId = req.params.id;
  const newAppointment = req.body;
  const newAppointmentId = uuid();

  //TODO: Add validation for json schema
  //If json valid then

  //Check if req contains a 15 min interval time
  const appointmentDateTime = DateTime.fromISO(newAppointment.dateTime);

  if (
    !appointmentDateTime.minute === 0 ||
    appointmentDateTime.minute % 15 !== 0
  ) {
    return res.status(400).send({
      message: "The time provided is not at an appropriate 15 minute interval.",
    });
  }

  //Check if this doctor already has 3 appointments at this given time
  //In the case of a db we would query for all the appointments associated to this doctor's id and have a counter incrementing for every instance of an appointment at the request's datetime
  //returning a message stating "{Doctor} is unavailable at this date and time" if the counter determines there are already 3 other appointments at this datetime for this doctor
  let counter = 0;

  for (let i = 0; i < appointments.length; i++) {
    if (doctorsId === appointments[i].doctorId) {
      if (appointmentDateTime.toISO() === appointments[i].dateTime) {
        counter += 1;
      }
    }
  }

  //In the case of a db we would generate a uuid and insert into an appointments table that likely referenced doctor id and patient id via fk
  if (counter >= 3) {
    return res.status(409).send({
      message:
        "The selected doctor is unavaiable at for an appointment at this date and time.",
    });
  } else {
    appointments.push({
      ...newAppointment,
      id: newAppointmentId,
      doctorId: doctorsId,
    });
  }

  //Additionally if we had persistent data we could do a db check here to see if this patient has a previous appointment with this doctor to determine new patient or follow up.
  //TODO: mock the above

  console.log(`Appointment [${newAppointmentId}] added to the database.`);

  res.send(newAppointmentId);
};
