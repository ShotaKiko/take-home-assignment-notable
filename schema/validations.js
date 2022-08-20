//Used for validation the request body to create a new appointment
export const newAppointmentSchema = {
  type: "object",
  required: [
    "patientFirstName",
    "patientLastName",
    "dateTime",
    "kindOfVisit",
    "doctorId",
  ], //see footnote about doctorId **
  properties: {
    patientFirstName: {
      type: "string",
    },
    patientLastName: {
      type: "string",
    },
    dateTime: {
      type: "string",
    },
    kindOfVisit: {
      type: "string",
      enum: ["New Patient", "Follow-up"], //ability to validate on string enumerations(valid possibilites) seems really handy, didnt know that was possible till today
    },
    doctorId: {
      type: "string",
    },
  },
};

//Used to validate request to pull all appointments for the provided date for specified doctor
export const appointmentDateSchema = {
  type: "object",
  required: ["date"],
  properties: {
    date: {
      type: "string",
    },
  },
};

//You could also add format validators for uuids and datetimes
