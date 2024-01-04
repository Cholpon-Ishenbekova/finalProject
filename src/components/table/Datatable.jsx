import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StaffService from "../../service/StaffService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./datatable.scss";

const Datatable = () => {
  const [staffArray, setStaffArray] = useState([]);

  useEffect(() => {
    getAllStaff();
  }, []);

  function getAllStaff() {
    StaffService.getAllStaff()
        .then(res => { setStaffArray(res.data); console.log(res) })
        .catch(e => console.log(e));
}
function deleteStaff(e, id) {
  e.preventDefault();
  
  if (window.confirm("Are you sure you want to delete this record?")) {
    StaffService.deleteStaff(id)
      .then(() => {
        getAllStaff();
        alert("Record deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting record:", error);
        alert("Error deleting record. Please try again.");
      });
  }
}


  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/add-staff" style={{ textDecoration: "none" }} className="link">
          Add New
        </Link>
      </div>

      <TableContainer component={Paper} className="tableContainer">
        <Table style={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">ID</TableCell>
              <TableCell className="tableCell">Fist Name</TableCell>
              <TableCell className="tableCell">Last Name</TableCell>
              <TableCell className="tableCell">Department</TableCell>
              <TableCell className="tableCell">Email</TableCell>
              <TableCell className="tableCell">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table">
            {staffArray.map((staff) => (
              <TableRow key={staff.id}>
                <TableCell className="tableCell">{staff.id}</TableCell>
                <TableCell className="tableCell">{staff.firstName}</TableCell>
                <TableCell className="tableCell">{staff.lastName}</TableCell>
                <TableCell className="tableCell">{staff.department}</TableCell>
                <TableCell className="tableCell">{staff.email}</TableCell>
                <TableCell className="tableActions">
                  <Link to={`/add-staff/${staff.id}`} className='editButton' href="">Update</Link> {" "}
                  <a onClick={(e) => deleteStaff(e, staff.id)} className='deleteButton'>Delete</a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Datatable;



