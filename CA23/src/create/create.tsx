import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const navigate = useNavigate();
 const bioData: React.FC = () => {

  const [firstName, setfirstName] = useState('');
  const [surName, setsurname] = useState('');
  const [middleName, setmiddleName] = useState('');
  const [dateOfBirth, setdateOfBirth] = useState('');
  const [homeAddress, sethomeAddress] = useState('');
  const [dateOfRegistration, setdateOfRegistration] = useState('');
  const [matriculationNumber, setmatriculationNumber] = useState('');
  const { id } = useParams< { id: string}>();
  const changefirstName = (event:any) => {
    setfirstName(event.target.value);
}
const changesurname = (event: any) => {
    setsurname(event.target.value);
}
const changemiddleName = (event:any) => {
    setmiddleName(event.target.value);
}
const changedateOfBirth = (event: any) =>{
    setdateOfBirth(event.target.value);
}
const changehomeAddress = (event:any) =>{
    sethomeAddress(event.target.value);
}
const changedateOfRegistration = (event: any) =>{
    setdateOfRegistration(event.target.value);
}
const changematriculationNumber = (event: any) =>{
    setmatriculationNumber(event.target.value);
}


const postData = () => {
  axios.post(`http://localhost:3003/bio-data`,{
      firstName,
      surName,
      middleName,
      dateOfBirth,
      homeAddress,
      dateOfRegistration,
      matriculationNumber,

  })
}
const handleClick = () => {
  navigate('/create1'); // Navigate to '/other-page' when clicked
};

 return (
    
    <div className="create-form">
        <label style= {{color:'white'}}>
            First Name
        </label>
        <p>
            <input
            type="text"
            placeholder="Please Enter your First Name..."
            onInput={changefirstName}
            style={{width: '400px', height:'25px', border: '0px', borderRadius:'10px', backgroundColor: '#f5f5f5'}}
            />
        </p>
        <label style= {{color:'white'}}>
            Surname
        </label>
        <p>
            <input
            type="text"
            placeholder="Enter your Surname..."
            onInput={changesurname}
            style={{width: '400px', height:'25px', border: '0px', borderRadius:'10px', backgroundColor: '#f5f5f5'}}
            />
        </p>
        <label style= {{color:'white'}}>
            Middle Name
        </label>
        <p>
            <input
            type="text"
            placeholder="Enter your Middle Name..."
            onInput={changemiddleName}
            style={{width: '400px', height:'25px', border: '0px', borderRadius:'10px', backgroundColor: '#f5f5f5'}}
            />
        </p>
        <label style= {{color:'white'}}>
            Date of Birth
        </label>
        <p>
            <input
            type="Date"
            placeholder="Enter your Date of Birth..."
            onInput={changedateOfBirth}
            style={{width: '400px', height:'25px', border: '0px', borderRadius:'10px', backgroundColor: '#f5f5f5'}}
            />
        </p>
        <label style= {{color:'white'}}>
            Home Address
        </label>
        <p>
            <input
            type="text"
            placeholder="Enter your Home Address..."
            onInput={changehomeAddress}
            style={{width: '400px', height:'25px', border: '0px', borderRadius:'10px', backgroundColor: '#f5f5f5'}}
            />
        </p>
        <label style= {{color:'white'}}>
            Date of Registration
        </label>
        <p>
            <input
            type="Date"
            placeholder="Enter your Date of Registration..."
            onInput={changedateOfRegistration}
            style={{width: '400px', height:'25px', border: '0px', borderRadius:'10px', backgroundColor: '#f5f5f5'}}
            />
        </p>
        <label style= {{color:'white'}}>
            Matriculation Number
        </label>
        <p>
            <input
            type="number"
            placeholder="Enter your Matriculation Number..."
            onInput={changematriculationNumber}
            style={{width: '400px', height:'25px', border: '0px', borderRadius:'10px', backgroundColor: '#f5f5f5'}}
            />
        </p>

        <button onClick={postData} type="submit" style={{width: '200px', height: '23px', border: '0px', borderRadius: '10px', alignItems: 'center', justifyContent:'center', backgroundColor: '#708090' }}>
          <button onClick={handleClick}>
         Submit   
        </button>
        </button>
        <button>
        <Link to={'/read1'}>
          READ DATA1
        </Link>
        </button>

        

    </div>
);
};
export default bioData;

