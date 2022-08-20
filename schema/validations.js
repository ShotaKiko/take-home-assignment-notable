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

//**
//would need further clarifcation on whether doctor id would be pulled from ui pages params
//if so we dont need the doctors id as part of the request
//if not we would need some ui piece once selected to embody or be keyed by doctorId and pass that as part of request
//for a more durable design I chose to include doctor's id in params and request body
