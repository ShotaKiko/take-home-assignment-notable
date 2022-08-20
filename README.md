# take-home-assignment-notable
Use `npm start` to start the server locally on port `8080`

If you want to test the endpoints with postman or some other client here is some reference material:

# Get all doctors 
Gets a list of all doctors

route: localhost:8080/doctors

# Get Appointments for a certain doctor and day
Get a doctor's appointments for a certain day 

route: localhost:8080/doctors/{:id of doctor}                  
p.s. this doctor id is a hardcoded entry you could use for testing <b8731e39-0831-493b-b905-344d674ab660>

you need to pass in an ISO8601 string in the request body    

ex.
{
    "date":"2022-08-20"
}

# Deleting an appointment
Cancel an appointment

route: localhost:8080/doctors/appointments/{:id of appointment}           

p.s. this appointment id is a hard coded entry you could use for testing <fc8eb7cc-b343-4a36-927b-fcd42a932098>

# Creating an appointment
Create an appointment with a specified doctor at a given time

route: localhost:8080/doctors/{:id of doctor}/appointments

p.s. this doctor id is a hardcoded entry you could use for testing <b8731e39-0831-493b-b905-344d674ab660>

the body passed in as part of the request 

ex. 
{
    "patientFirstName": "Sterling",
    "patientLastName": "Archer",
    "dateTime": "2022-08-20T16:15",
    "kindOfVisit": "New Patient",
    "doctorId": "b8731e39-0831-493b-b905-344d674ab660"
}

expecting strings for all fields and an ISO8601 string for the datetime field