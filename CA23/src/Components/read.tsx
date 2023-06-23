import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import axios from 'axios';
import '../App.css'
import { Link } from "react-router-dom";

const ReadRecords: React.FC = () => {
  const [patients, setPatients] = useState([]);
  const [clinicRecords, setClinicRecords] = useState([]);

  useEffect(() => {
    fetchPatients();
    fetchClinicRecords();
  }, []);

  const fetchPatients = () => {
    axios.get('http://localhost:3003/bio-data')
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error(error);
        // Handle error or display an error message to the user
      });
  };

  const fetchClinicRecords = () => {
    axios.get('http://localhost:3003/clinical-record')
      .then(response => {
        setClinicRecords(response.data);
      })
      .catch(error => {
        console.error(error);
        // Handle error or display an error message to the user
      });
  };

  const deletePatient = (id: number) => {
    axios.delete(`http://localhost:3003/bio-data/${id}`)
      .then(() => {
        console.log("Patient deleted successfully");
        // Refresh the patient list
        fetchPatients();
      })
      .catch(error => {
        console.error(error);
        // Handle error or display an error message to the user
      });
  };

  const deleteClinicalRecord = (id: number) => {
    axios.delete(`http://localhost:3003/clinical-record/${id}`)
      .then(() => {
        console.log("Clinical record deleted successfully");
        // Refresh the clinical record list
        fetchClinicRecords();
      })
      .catch(error => {
        console.error(error);
        // Handle error or display an error message to the user
      });
  };

  return (
    <div className="container2">
      <h2 className="header1">Read Patient Records</h2>
      <h3 className="header1">Patient Biodata</h3>
      <table className="record-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Middle Name</th>
            <th>Home Address</th>
            <th>Matriculation Number</th>
            <th>Date of Birth</th>
            <th>Date of Registration</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient: any) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.firstName}</td>
              <td>{patient.surName}</td>
              <td>{patient.middleName}</td>
              <td>{patient.homeAddress}</td>
              <td>{patient.matriculationNumber}</td>
              <td>{patient.dateOfBirth}</td>
              <td>{patient.dateOfRegistration}</td>
              <td>
                <Link to={"/update"}>
                  {<Button color="green">Update</Button>}
                </Link>
              </td>
              <td>
                <Button color="red" onClick={() => deletePatient(patient.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="header1">Clinic Records</h3>
      <table className="record-table">
        <thead>
          <tr>
            <th>Clinic Date</th>
            <th>Nature of Ailment</th>
            <th>Medicine Prescribed</th>
            <th>Procedure Undertaken</th>
            <th>Date of Next Appointment</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {clinicRecords.map((record: any) => (
            <tr key={record.id}>
              <td>{record.clinicDate}</td>
              <td>{record.natureOfAilment}</td>
              <td>{record.medicinePrescribed}</td>
              <td>{record.procedureUndertaken}</td>
              <td>{record.dateOfNextAppointment}</td>
              <td>
                <Link to={"/update"}>
                  {<Button color="green">Update</Button>}
                </Link>
              </td>
              <td>
                <Button color="red" onClick={() => deleteClinicalRecord(record.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default ReadRecords;
