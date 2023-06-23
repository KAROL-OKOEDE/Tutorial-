import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const clinicalRecords: React.FC = () => {
  const [clinicDate, setclinicDate] = useState('');
  const [natureOfAilment, setnatureOfAilment] = useState('');
  const [medicinePrescribed, setmedicinePrescribed] = useState('');
  const [procedureUndertaken, setprocedureUndertaken] = useState('');
  const [dateOfNextAppointment, setdateOfNextAppointment] = useState('');
  const { id } = useParams< { id: string}>();
  
const changeclinicDate = (event: React.ChangeEvent<HTMLInputElement>) => {
  setclinicDate(event.target.value);
}

const changenatureOfAilment = (event: React.ChangeEvent<HTMLInputElement>) => {
  setnatureOfAilment(event.target.value);
}

const changemedicinePrescribed = (event: React.ChangeEvent<HTMLInputElement>) => {
  setmedicinePrescribed(event.target.value);
}

const changeprocedureUndertaken = (event: React.ChangeEvent<HTMLInputElement>) => {
  setprocedureUndertaken(event.target.value);
}

const changedateOfNextAppointment = (event: React.ChangeEvent<HTMLInputElement>) => {
  setdateOfNextAppointment(event.target.value);
}

  const postData = () => {
    axios.post(`http://localhost:3007/clinical-record`,{
      clinicDate,
      natureOfAilment,
      medicinePrescribed,
      procedureUndertaken,
      dateOfNextAppointment,

    })
  }
  
  return (
    
    <div className="create-form">
      <label style={{ color: 'white' }}>
        Clinic Date
        </label>
      <p>
        <input
          type="date"
          placeholder="Please enter the date of the patient's first consultation..."
          onChange={changeclinicDate}
          style={{width: '400px', height:'25px', border: '0px', borderRadius:'10px', backgroundColor: '#f5f5f5'}}
         />
      </p>
      <label style={{ color: 'white' }}>
        Nature of Ailment
        </label>
      <p>
        <input
          type="text"
          placeholder="Please enter a description of the patient's ailment..."
          onChange={changenatureOfAilment}
          style={{width: '400px', height:'50px', border: '0px', borderRadius:'10px', backgroundColor: '#f5f5f5'}}
        />
      </p>
      <label style={{ color: 'white' }}>
        Medicine Prescribed
        </label>
      <p>
        <input
          type="text"
          placeholder="Please enter the prescribed medication for the patient..."
          onChange={changemedicinePrescribed}
          style={{width: '400px', height:'25px', border: '0px', borderRadius:'10px', backgroundColor: '#f5f5f5'}}
        />
      </p>
      <label style={{ color: 'white' }}>
        Procedure Undertaken
        </label>
      <p>
        <input
          type="text"
          placeholder="Please enter the treatment/procedure undertaken..."
          onChange={changeprocedureUndertaken}
          style={{width: '400px', height:'50px', border: '0px', borderRadius:'10px', backgroundColor: '#f5f5f5'}}
        />
      </p>
      <label style={{ color: 'white' }}>
        Date of Next Appointment
        </label>
      <p>
        <input
          type="date"
          placeholder="Please enter the date of the patient's next appointment..."
          onChange={changedateOfNextAppointment}
          style={{width: '400px', height:'25px', border: '0px', borderRadius:'10px', backgroundColor: '#f5f5f5'}}
        />
      </p>
        <button onClick={postData} type="submit" style={{width: '200px', height: '23px', border: '0px', borderRadius: '10px', alignItems: 'center', justifyContent:'center', backgroundColor: '#708090' }}>
         Submit   
        </button>
        

    </div>
  );
};
export default clinicalRecords;


