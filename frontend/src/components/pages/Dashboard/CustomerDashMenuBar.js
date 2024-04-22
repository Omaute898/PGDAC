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
        }}>CUSTOMER DASHBOARD</h3>

      <div class="btn-group mr-3" role="group" aria-label="First group">
        <NavLink className="nav-link" exact to="/new-enquiry">
          <Button outline color="secondary">
             New Enquiry
          </Button>
        </NavLink>
      </div>

      <div class="btn-group mr-3" role="group" aria-label="Second group">
        <NavLink className="nav-link" exact to="/enquiry-status">
          <Button outline color="secondary">
             Enquiry Status
          </Button>
        </NavLink>
      </div>


      <div class="btn-group mr-3" role="group" aria-label="First group">
        <NavLink className="nav-link" exact to="/add-service-req">
          <Button outline color="secondary">
             Service Request
          </Button>
        </NavLink>
      </div>

      <div class="btn-group mr-3" role="group" aria-label="Second group">
        <NavLink className="nav-link" exact to="/previous-request">
          <Button outline color="secondary">
            View Request
          </Button>
        </NavLink>
      </div>

      
    </div>









    //   <div>
    //     <ListGroup>
    //       <ListGroupItem
    //       style={{
    //         display: 'flex',
    //         justifyContent: 'center',
    //         backgroundColor:'Moccasin'
    //       }}>
    //         <NavLink className="nav-link" exact to="/customer-dash">
    //           <h5 style={{color:'#00BFFF'}}>
    //             {' '}
    //             <i className="fa fa-dashboard"></i>
    //             <p>Customer DashBoard</p>
    //           </h5>
    //         </NavLink>
    //       </ListGroupItem>

    //       <ListGroupItem
    //       style={{
    //         display: 'flex',
    //         justifyContent: 'center',
    //         backgroundColor:'Moccasin'
    //       }}>
    //         <NavLink className="nav-link" exact to="/new-enquiry">
    //           <Button outline color="secondary">
    //             Add New Enquiry
    //           </Button>
    //         </NavLink>
    //       </ListGroupItem>

    //       <ListGroupItem
    //       style={{
    //         display: 'flex',
    //         justifyContent: 'center',
    //         backgroundColor:'Moccasin'
    //       }}>
    //         <NavLink className="nav-link" exact to="/enquiry-status">
    //           <Button outline color="secondary">
    //             View Enquiry Status
    //           </Button>
    //         </NavLink>
    //       </ListGroupItem>

    //       <ListGroupItem
    //       style={{
    //         display: 'flex',
    //         justifyContent: 'center',
    //         backgroundColor:'Moccasin'
    //       }}>
    //         <NavLink className="nav-link" exact to="/add-service-req">
    //           <Button outline color="secondary">
    //             Add Service Request
    //           </Button>
    //         </NavLink>
    //       </ListGroupItem>

    //       <ListGroupItem
    //       style={{
    //         display: 'flex',
    //         justifyContent: 'center',
    //         backgroundColor:'Moccasin'
    //       }}>
    //         <NavLink className="nav-link" exact to="/previous-request">
    //           <Button outline color="secondary">
    //             View Previous Service Request
    //           </Button>
    //         </NavLink>
    //       </ListGroupItem>

    //       <ListGroupItem
    //       style={{
    //         display: 'flex',
    //         justifyContent: 'center',
    //         backgroundColor:'Moccasin'
    //       }}>
    //         <NavLink className="nav-link" exact to="/previous-request">
    //           <Button outline color="secondary">
    //             View Previous Service Request
    //           </Button>
    //         </NavLink>
    //       </ListGroupItem>
    //     </ListGroup>
    //   </div>
  )
}

export default DashMenuBar
