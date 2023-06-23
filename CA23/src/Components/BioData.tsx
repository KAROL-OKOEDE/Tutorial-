import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const New: React.FC = () => {
    const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [surName, setSurName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [dateOfRegistration, setDateOfRegistration] = useState('');
  const [matriculationNumber, setMatriculationNumber] = useState('');
  const [clinicDate, setClinicDate] = useState('');
  const [natureOfAilment, setNatureOfAilment] = useState('');
  const [medicinePrescribed, setMedicinePrescribed] = useState('');
  const [procedureUndertaken, setProcedureUndertaken] = useState('');
  const [dateOfNextAppointment, setDateOfNextAppointment] = useState('');

  const changeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const changeSurName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurName(event.target.value);
  };

  const changeMiddleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMiddleName(event.target.value);
  };

  const changeDateOfBirth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateOfBirth(event.target.value);
  };

  const changeHomeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHomeAddress(event.target.value);
  };

  const changeDateOfRegistration = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateOfRegistration(event.target.value);
  };

  const changeMatriculationNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMatriculationNumber(event.target.value);
  };

  const changeClinicDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClinicDate(event.target.value);
  };

  const changeNatureOfAilment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNatureOfAilment(event.target.value);
  };

  const changeMedicinePrescribed = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMedicinePrescribed(event.target.value);
  };

  const changeProcedureUndertaken = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProcedureUndertaken(event.target.value);
  };

  const changeDateOfNextAppointment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateOfNextAppointment(event.target.value);
  };

  const postData = () => {
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('middleName', middleName);
    localStorage.setItem('lastName', surName);
    localStorage.setItem('dateOfBirth', dateOfBirth);
    localStorage.setItem('homeAddress', homeAddress);
    localStorage.setItem('dateOfRegistration', dateOfRegistration);
    localStorage.setItem('matriculationNumber', matriculationNumber);
    localStorage.setItem('natureOfAilment', natureOfAilment);
    localStorage.setItem('medicinePrescribed', medicinePrescribed);
    localStorage.setItem('procedureUndertaken', procedureUndertaken);
    localStorage.setItem('dateOfNextAppointment', dateOfNextAppointment);

    axios.post('http://localhost:3003/bio-data', {
      firstName,
      surName,
      middleName,
      homeAddress,
      matriculationNumber,
      dateOfBirth,
      dateOfRegistration,
    });

    axios.post('http://localhost:3003/clinical-record', {
      clinicDate,
      natureOfAilment,
      medicinePrescribed,
      procedureUndertaken,
      dateOfNextAppointment,
    });
    navigate("/Read")
  };

  return (
    <div>
      <h1 className="bold-text">Patient Information</h1>

      <label style={{ color: 'black' }}>First Name</label>
      <p>
        <input
          type="text"
          placeholder="Please Enter your First Name..."
          onChange={changeFirstName}
          style={{
            width: '400px',
            height: '25px',
            border: '0px',
            borderRadius: '10px',
            backgroundColor: '#f5f5f5',
          }}
        />
      </p>

      <label style={{ color: 'black' }}>Surname</label>
      <p>
        <input
          type="text"
          placeholder="Enter your Surname..."
          onChange={changeSurName}
          style={{
            width: '400px',
            height: '25px',
            border: '0px',
            borderRadius: '10px',
            backgroundColor: '#f5f5f5',
          }}
        />
      </p>

      <label style={{ color: 'black' }}>Middle Name</label>
      <p>
        <input
          type="text"
          placeholder="Enter your Middle Name..."
          onChange={changeMiddleName}
          style={{
            width: '400px',
            height: '25px',
            border: '0px',
            borderRadius: '10px',
            backgroundColor: '#f5f5f5',
          }}
        />
      </p>

      <label style={{ color: 'black' }}>Date of Birth</label>
      <p>
        <input
          type="date"
          placeholder="Enter your Date of Birth..."
          onChange={changeDateOfBirth}
          style={{
            width: '400px',
            height: '25px',
            border: '0px',
            borderRadius: '10px',
            backgroundColor: '#f5f5f5',
          }}
        />
      </p>

      <label style={{ color: 'black' }}>Home Address</label>
      <p>
        <input
          type="text"
          placeholder="Enter your Home Address..."
          onChange={changeHomeAddress}
          style={{
            width: '400px',
            height: '25px',
            border: '0px',
            borderRadius: '10px',
            backgroundColor: '#f5f5f5',
          }}
        />
      </p>

      <label style={{ color: 'black' }}>Date of Registration</label>
      <p>
        <input
          type="date"
          placeholder="Enter your Date of Registration..."
          onChange={changeDateOfRegistration}
          style={{
            width: '400px',
            height: '25px',
            border: '0px',
            borderRadius: '10px',
            backgroundColor: '#f5f5f5',
          }}
        />
      </p>

      <label style={{ color: 'black' }}>Matriculation Number</label>
      <p>
        <input
          type="number"
          placeholder="Enter your Matriculation Number..."
          onChange={changeMatriculationNumber}
          style={{
            width: '400px',
            height: '25px',
            border: '0px',
            borderRadius: '10px',
            backgroundColor: '#f5f5f5',
          }}
        />
      </p>

      <div className="ClinicRecord">
        <h1 className="bold-text">Medical Information</h1>

        <label style={{ color: 'black' }}>Clinic Date</label>
        <p>
          <input
            type="date"
            placeholder="Please enter the date of the patient's first consultation..."
            onChange={changeClinicDate}
            style={{
              width: '400px',
              height: '25px',
              border: '0px',
              borderRadius: '10px',
              backgroundColor: '#f5f5f5',
            }}
          />
        </p>

        <label style={{ color: 'black' }}>Nature of Ailment</label>
        <p>
          <input
            type="text"
            placeholder="Please enter a description of the patient's ailment..."
            onChange={changeNatureOfAilment}
            style={{
              width: '400px',
              height: '50px',
              border: '0px',
              borderRadius: '10px',
              backgroundColor: '#f5f5f5',
            }}
          />
        </p>

        <label style={{ color: 'black' }}>Medicine Prescribed</label>
        <p>
          <input
            type="text"
            placeholder="Please enter the prescribed medication for the patient..."
            onChange={changeMedicinePrescribed}
            style={{
              width: '400px',
              height: '25px',
              border: '0px',
              borderRadius: '10px',
              backgroundColor: '#f5f5f5',
            }}
          />
        </p>

        <label style={{ color: 'black' }}>Procedure Undertaken</label>
        <p>
          <input
            type="text"
            placeholder="Please enter the treatment/procedure undertaken..."
            onChange={changeProcedureUndertaken}
            style={{
              width: '400px',
              height: '50px',
              border: '0px',
              borderRadius: '10px',
              backgroundColor: '#f5f5f5',
            }}
          />
        </p>

        <label style={{ color: 'black' }}>Date of Next Appointment</label>
        <p>
          <input
            type="date"
            placeholder="Please enter the date of the patient's next appointment..."
            onChange={changeDateOfNextAppointment}
            style={{
              width: '400px',
              height: '25px',
              border: '0px',
              borderRadius: '10px',
              backgroundColor: '#f5f5f5',
            }}
          />
        </p>

        <button
          onClick={postData}
          type="submit"
          style={{
            width: '200px',
            height: '23px',
            border: '0px',
            borderRadius: '10px',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#708090',
          }}
        >
          Submit
        </button>
      </div>

      <Link to={'/ClinicalRecord'}>
        <button className="btn" onClick={postData}>
          Submit
        </button>
      </Link>
    </div>
  );
};

export default New;
