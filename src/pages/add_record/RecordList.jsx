import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./stlyes/list.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RecordService from "../../service/RecordService";
import Navbar from "../../components/navbar/Navbar";

const RecordList = () => {
  const [recordArray, setRecordArray] = useState([]);

  useEffect(() => {
    getAllRecord();
  }, []);

  function getAllRecord() {
    RecordService.getAllRecord()
      .then((res) => {
        setRecordArray(res.data);
        console.log(res);
      })
      .catch((e) => console.log(e));
  }

  function deleteRecord(e, id) {
    e.preventDefault();
    
    if (window.confirm("Are you sure you want to delete this record?")) {
      RecordService.deleteRecord(id)
        .then(() => {
          getAllRecord();
          alert("Record deleted successfully!");
        })
        .catch((error) => {
          console.error("Error deleting record:", error);
          alert("Error deleting record. Please try again.");
        });
    }
  }
  function formatDateTime(dateTimeString) {
    const [datePart, timePart] = dateTimeString.split(' ');
    const [month, day, year] = datePart.split('/');
    const [hour, minute, second] = timePart.split(':');

    return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
}

  return (
    <div className="recordList">
      <div className="recordContainer">
        <Navbar />
        <div className="datatableTitle">
          Add New Record
          <Link
            to="/add-record"
            style={{ textDecoration: "none" }}
            className="link"
          >
            Add New
          </Link>
        </div>
        <div className="table">
          <TableContainer component={Paper} className="table">
            <Table style={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">ID</TableCell>
                  <TableCell className="tableCell">FirstName</TableCell>
                  <TableCell className="tableCell">LastName</TableCell>
                  <TableCell className="tableCell">Status</TableCell>
                  <TableCell className="tableCell">Date Time</TableCell>
                  <TableCell className="tableCell">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recordArray.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell className="tableCell">{record.id}</TableCell>
                    <TableCell className="tableCell">
                      {record.firstName}
                    </TableCell>
                    <TableCell className="tableCell">
                      {record.lastName}
                    </TableCell>
                    <TableCell className="tableCell">
                      <span className={`status ${record.status.toUpperCase()}`}>
                        {record.status}
                      </span>
                    </TableCell>
                    <TableCell className="tableCell">
                    {formatDateTime(record.dayTime)}
                    </TableCell>

                    <TableCell className="tableActions">
                      <Link
                        to={`/add-record/${record.id}`}
                        className="editButton"
                        href=""
                      >
                        Update
                      </Link>{" "}
                      <a
                        onClick={(e) => deleteRecord(e, record.id)}
                        className="deleteButton"
                      >
                        Delete
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default RecordList;
