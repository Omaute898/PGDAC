import React from 'react';
import NavBar from '../layout/Navbar'

const Contact = () => {
  return (
    <div>
      <NavBar/>
    <div className="container-fluid" >
      <div className="py text-black blocktext">
     
        <h1><b>CONTACT US</b></h1>
        
        <br></br><br></br>
        <h4><strong>Name</strong>:- Kailash Somase</h4><br/>
        <p>
        <h4><strong>Contact Number</strong> :<a href=""> +91 8605386753</a></h4></p><br/>
        <p>
        <h4><strong>Email </strong>:<a href=""> kailashsomasepatil@gmail.com</a></h4></p><br/>
        <h4><strong>Address</strong> : Near Jatra Hotel Konark Nagar Adagaon , Nashik -	422003

</h4>
      </div>
    </div>
    </div>
  );
};

export default Contact;