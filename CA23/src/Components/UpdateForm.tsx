import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

interface BioDataProps {
  firstName: string;
  surName: string;
  middleName: string;
  dateOfBirth: string;
  homeAddress: string;
  dateOfRegistration: string;
}

interface ClinicalRecord {
  clinicDate: string;
  natureOfAilment: string;
  medicinePrescribed: string;
  procedureUndertaken: string;
  dateOfNextAppointment: string;
}

interface UpdateFormProps {
  id: number;
  onClose: () => void;
}

const UpdateForm: React.FC<UpdateFormProps> = ({ id, onClose }) => {
  const [patientBiodatum, setPatientBiodatum] = useState<BioDataProps>({} as BioDataProps);
  const [clinicalRecord, setClinicalRecord] = useState<ClinicalRecord>({} as ClinicalRecord);

  useEffect(() => {
    fetchPatientBiodatum();
    fetchClinicalRecord();
  }, []);

  const fetchPatientBiodatum = () => {
    axios.get(`http://localhost:3003/bio-data/${id}`)
      .then(response => {
        setPatientBiodatum(response.data);
      })
      .catch(error => {
        alert('error1');
      });
  };

  const fetchClinicalRecord = () => {
    axios.get(`http://localhost:3003/clinical-record/${id}`)
      .then(response => {
        setClinicalRecord(response.data);
      })
      .catch(error => {
        alert('error2');
      });
  };

  const updatePatientBiodatum = () => {
    axios.put(`http://localhost:3003/bio-data/${id}`, patientBiodatum)
      .then(() => {
        console.log("Patient biodatum updated successfully");
        // Redirect to ReadRecords component or perform any desired action
        
      })
      .catch(error => {
        alert('error3');
      });
  };

  const updateClinicalRecord = () => {
    axios.put(`http://localhost:3003/clinical-record/${id}`, clinicalRecord)
      .then(() => {
        console.log("Clinical record updated successfully");
        // Redirect to ReadRecords component or perform any desired action
      })
      .catch(error => {
        alert('error2');
      });
  };

  const handlePatientBiodatumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPatientBiodatum(prevData => ({ ...prevData, [name]: value }));
  };

  const handleClinicalRecordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setClinicalRecord(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <h2>Update Patient Biodatum</h2>
      <form>
        <label>First Name:</label>
        <input type="text" name="firstName" value={patientBiodatum.firstName} onChange={handlePatientBiodatumChange} />

        <label>Surname:</label>
        <input type="text" name="surName" value={patientBiodatum.surName} onChange={handlePatientBiodatumChange} />

        <label>Middle Name:</label>
        <input type="text" name="middleName" value={patientBiodatum.middleName} onChange={handlePatientBiodatumChange} />

        <label>Date of Birth:</label>
        <input type="date" name="dateOfBirth" value={patientBiodatum.dateOfBirth} onChange={handlePatientBiodatumChange} />

        <label>Home Address:</label>
        <input type="text" name="homeAddress" value={patientBiodatum.homeAddress} onChange={handlePatientBiodatumChange} />

        <label>Date of Registration:</label>
        <input type="date" name="dateOfRegistration" value={patientBiodatum.dateOfRegistration} onChange={handlePatientBiodatumChange} />

        <button type="button" onClick={updatePatientBiodatum}>Update Patient Biodatum</button>
      </form>

      <h2>Update Clinical Record</h2>
      <form>
        <label>Clinic Date:</label>
        <input type="date" name="clinicDate" value={clinicalRecord.clinicDate} onChange={handleClinicalRecordChange} />

        <label>Nature of Ailment:</label>
        <input type="text" name="natureOfAilment" value={clinicalRecord.natureOfAilment} onChange={handleClinicalRecordChange} />

        <label>Medicine Prescribed:</label>
        <input type="text" name="medicinePrescribed" value={clinicalRecord.medicinePrescribed} onChange={handleClinicalRecordChange} />

        <label>Procedure Undertaken:</label>
        <input type="text" name="procedureUndertaken" value={clinicalRecord.procedureUndertaken} onChange={handleClinicalRecordChange} />

        <label>Date of Next Appointment:</label>
        <input type="date" name="dateOfNextAppointment" value={clinicalRecord.dateOfNextAppointment} onChange={handleClinicalRecordChange} />

        <button type="button" onClick={updateClinicalRecord}>Update Clinical Record</button>
      </form>

      <Link to="/read">Go back to Read Records</Link>
    </div>
  );
}

export default UpdateForm;

