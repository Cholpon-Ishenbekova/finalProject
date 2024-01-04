import React from "react";
import "./stlyes/record.scss";
import Navbar from "../../components/navbar/Navbar";
import AddRecord from "./addRecords";


function Record() {
  return (
    <div className="record">
      <div className="recordContainer">
        <Navbar />
        <div className="charts">
          <AddRecord />
        </div>
      </div>
    </div>
  );
}

export default Record;

