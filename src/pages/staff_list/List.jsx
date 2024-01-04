import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/table/Datatable"

function List() {
    return (
        <div className='list'>
          <div className="listContainer">
            <Navbar />
            <div className="datatable">
              <Datatable />
            </div>
          </div>
        </div>
      )
}

export default List
