import React from 'react'
import { NavLink } from 'react-router-dom'

const DashMenuBar = () => {
  return (

    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">

      <h3
        style={{
          color: '#196F3D',
          textAlign: 'center',
          margin: '2px 0 2px 20px'
      }}>ADMIN DASHBOARD</h3>

      <div class="btn-group mr-3" role="group" aria-label="First group">
        <NavLink className="nav-link" exact to="/add-new-admin">
          <button class="btn btn-md btn-outline-secondary" type="button">New Admin</button>
        </NavLink>
      </div>

      <div class="btn-group mr-3" role="group" aria-label="Second group">
        <NavLink className="nav-link" exact to="/pending-mechanic-req">
          <button class="btn btn-md btn-outline-secondary" type="button">Mechanic requests</button>
        </NavLink>z
      </div>

      <div class="btn-group mr-3" role="group" aria-label="First group">
        <NavLink className="nav-link" exact to="/view-customer-enq">
          <button class="btn btn-md btn-outline-secondary" type="button">View Enquiries</button>
        </NavLink>
      </div>

      <div class="btn-group mr-3" role="group" aria-label="Second group">
        <NavLink className="nav-link" exact to="/view-customer-service-req">
          <button class="btn btn-md btn-outline-secondary" type="button">View Service Request</button>
        </NavLink>
      </div>

      <div class="btn-group mr-3" role="group" aria-label="First group">
        <NavLink className="nav-link" exact to="/view-service-advisor">
          <button class="btn btn-md btn-outline-secondary" type="button">View Admin</button>
        </NavLink>
      </div>

      <div class="btn-group mr-3" role="group" aria-label="Second group">
        <NavLink className="nav-link" exact to="/view-mechanics">
          <button class="btn btn-md btn-outline-secondary" type="button">View Mechanics</button>
        </NavLink>
      </div>

    </div>


  )
}

export default DashMenuBar
