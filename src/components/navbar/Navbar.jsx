import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <Link to="/add-record" style={{ textDecoration: "none" }}>
            <div className="item">Add Record</div>
          </Link>
          <Link to="/records" style={{ textDecoration: "none" }}>
            <div className="item">Records</div>
          </Link>
          <Link to="/staff" style={{ textDecoration: "none" }}>
            <div className="item">Staff</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;