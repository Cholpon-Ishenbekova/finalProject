import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./stlyes/addrecords.scss";
import "../../service/RecordService";
import RecordService from '../../service/RecordService';

const AddRecord = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState('');
  const [dayTime, setDayTime] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const recordData = { firstName, lastName, status, dayTime};

  function saveRecord(e) {
    e.preventDefault();

    if (recordData.firstName !== "" && recordData.lastName !== "" && recordData.status !== "" && recordData.dayTime != "") {
      if (id) {
          RecordService.updateRecord(id, recordData)
              .then(navigate("/records"))
              .catch(e => console.log(e));
      } else {
          RecordService.saveRecord(recordData)
              .then(navigate("/records"))
              .catch(e => console.log(e));
      }

  } else {
      alert("Please, fill in all inputes");
  }
  }

  useEffect(() => {
    if (id) {
        RecordService.getRecordById(id)
            .then(res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setStatus(res.data.status);
                setDayTime(res.data.dayTime);
            })
            .catch(e => console.log(e));
    }
}, []);

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Add New Record</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
                <div className="formInput">
                  <label>FirstName</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Cholpon"/>
              </div>
              <div className="formInput">
                  <label>LastName</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Ishenbekova"/>
              </div>
              <div className="formInput">
                  <label>Status</label>
                <input value={status} onChange={(e) => setStatus(e.target.value)} type="text" placeholder="In/Out"/>
              </div>
              <div className="formInput">
                  <label>Date Time</label>
                <input value={dayTime} onChange={(e) => setDayTime(e.target.value)} type='text' placeholder="01/01/2022 12:30:45"/>
              </div>
              <div className="buttons">
                <button onClick={(e) => saveRecord(e)} className='button'>Save</button> {" "}
                <Link to={"/records"} className='button link' href="">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddRecord;