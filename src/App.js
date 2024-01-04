import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from './pages/staff_list/List';
import Staff from './pages/add_staff/Staff';
import RecordList from './pages/add_record/RecordList';
import Record from './pages/add_record/Record';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<List />} />
          <Route path="/staff" element={<List />} />
          <Route path="/add-staff" element={<Staff />} />
          <Route path="/add-staff/:id" element={<Staff />} />
          <Route path="/records" element={<RecordList />} />
          <Route path="/add-record" element={<Record />} />
          <Route path="/add-record/:id" element={<Record />} />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
