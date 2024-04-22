import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'

const ServiceAdvMenu = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor:'Moccasin'
        }}>
          <NavLink className="nav-link" exact to="/serviceadvisor-dash">
            <h5 style={{color:'#00BFFF'}}>
              {/* <i className="fa fa-dashboard"></i> */}
              <p><center>Service DashBoard</center></p>
            </h5>
          </NavLink>
        </ListGroupItem>
        <ListGroupItem
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor:'Moccasin'
          }}>
          <NavLink className="nav-link" exact to="/add-job-cards">
            <Button outline color="secondary">
              Add new Job Cards
            </Button>
          </NavLink>
        </ListGroupItem>
        <ListGroupItem
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor:'Moccasin'
          }}>
          {' '}
          <NavLink className="nav-link" exact to="/fetch-job-cards">
            <Button outline color="secondary">
              Fetch recent job cards
            </Button>
          </NavLink>
        </ListGroupItem>
        <ListGroupItem
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor:'Moccasin'
          }}>
          {' '}
          <NavLink className="nav-link" exact to="/fetch-service-request">
            <Button outline color="secondary">
              Fetch Service Request
            </Button>
          </NavLink>
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default ServiceAdvMenu
