import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'

const DashMenuBar = () => {
  return (

    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">

      <h3
        style={{
          color: '#196F3D',
          textAlign: 'center',
          margin: '2px 0 2px 20px'
        }}>MECHANIC DASHBOARD</h3>

      <div class="btn-group mr-3" role="group" aria-label="First group">
        <NavLink className="nav-link" exact to="/add-parts">
          <Button outline color="secondary">
            View Job Cards
          </Button>
        </NavLink>
      </div>

      </div>
  )
}

export default DashMenuBar
