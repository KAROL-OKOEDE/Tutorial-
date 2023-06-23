import axios from "axios";
import { response } from "express";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ThankYouForDelete: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [readData, setReadData] = useState<any>(null);
  const matriculationNumber = readData?.PatientDatum?.matriculationNumber;
  useEffect(() => {
    const getClinicalRecords = () => {
      // alert(id);
      axios
        .get(`http://localhost:3002/clinical-record/${id}`)
        .then((response) => {
          setReadData(response.data);
        })
        .catch((error) => {
          alert('Error retrieving clinical records:');
        });
    };

    getClinicalRecords();
  }, []);

  const deleteData = async () => {
    try {
      
      if (matriculationNumber) {
        await axios.delete(`http://localhost:3002/clinical-record/${matriculationNumber}`);
        localStorage.clear();
        navigate('/thanksForUsingOurData');
      } else {
        throw new Error("Matriculation number is undefined");
      }
    } catch (error) {
      alert("There was an error deleting the data");
    }
  };

  return (
    <div>
      <h2>THANK YOU FOR Updating Your Data WITH ISESEN CLINIC</h2>
      <h4>Click me if you want to delete your data</h4>
      <button className="bars" onClick={deleteData}>
        Delete Records
      </button>
    </div>
  );
};

export default ThankYouForDelete;
