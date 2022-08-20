import { v4 as uuid } from "uuid";

//each doctor will be represented as an object with a uuid, first name, and last name as requested. Hard coding this but it would likely exist in the same format/columns in a doctors table in a db
let doctors = [
  { id: uuid(), firstName: "Sterling", lastName: "Archer" },
  { id: uuid(), firstName: "Cyril", lastName: "Figis" },
  { id: uuid(), firstName: "Ray", lastName: "Gillete" },
];

export const getAllDoctors = (req, res) => {
  //If we were using a db we would employ a helper function here that would run some sql query to get the above hard coded list
  res.send(doctors);
};
