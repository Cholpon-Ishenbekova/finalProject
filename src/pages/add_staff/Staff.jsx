import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./staff.scss"
import "../../service/StaffService"
import Navbar from '../../components/navbar/Navbar';
import StaffService from '../../service/StaffService';


const Staff = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const staffData = { firstName, lastName, department, email};

  function saveStaff(e) {
    e.preventDefault();

    if (staffData.firstName !== "" && staffData.lastName !== "" && staffData.department !== "" && staffData.email != "") {
      if (id) {
          StaffService.updateStaff(id, staffData)
              .then(navigate("/staff"))
              .catch(e => console.log(e));
      } else {
          StaffService.saveStaff(staffData)
              .then(navigate("/staff"))
              .catch(e => console.log(e));
      }

  } else {
      alert("Please, fill in all inputes");
  }
  }

  useEffect(() => {
    if (id) {
        StaffService.getStaffById(id)
            .then(res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setDepartment(res.data.department);
                setEmail(res.data.email);
            })
            .catch(e => console.log(e));
    }
}, []);

  return (
    <div className="new">
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add New Staff</h1>
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
                  <label>Department</label>
                <input value={department} onChange={(e) => setDepartment(e.target.value)} type="text" placeholder="IT"/>
              </div>
              <div className="formInput">
                  <label>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="cholpon@gmail.com"/>
              </div>
              <div className="buttons">
                <button onClick={(e) => saveStaff(e)} className='button'>Save</button> {" "}
                <Link to={"/staff"} className='button link' href="">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Staff
