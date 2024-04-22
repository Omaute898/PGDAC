import React from 'react';
import NavBar from '../layout/Navbar'
const About = () => {

  return (
    <div>

      <NavBar />
      <div className="container-fluid">
        <div className="text-black" >

          <h1 style={{margin: 40}}><strong>About Us</strong></h1>
          <br></br>
      
          <pre style={{margin: 20}}>
            <h5>
              We provide bike services at pick up & drop at your convenient time.
            </h5>
            <h5>
              Our service persons have years of experience in this field. We do take care of your bike professionally.
            </h5>
            <h5>
              Bike Service at Pick up & Drop
            </h5>

            <ul>
              <h5><strong><li>Eco Car Spa provides Pick up & Drop services, now doesn’t worry about servicing your vehicle.</li></strong></h5>
              <h5><strong><li>Sit back and relax.</li></strong></h5>
              <h5><strong><li>Apart from service centre we also offer free bike pick-up and delivery service at your locations.</li></strong></h5>
            </ul>
            <h5> After years of owning and working at an advanced car spa & detailing, we decided to invest in bike complete bike care point. </h5>
            <h5>
              As our customers request and also offer remarkable benefits for our client. </h5>
            <h5>
              Now, in addition to encouraging the love of motorcycles, we also make it easier to maintain and repair the vehicles  </h5>
            <h5>
              thanks to our workshop and detailing facility. We care for the bikes and create hassle-free journeys!
            </h5>

          </pre>


        </div>
      </div>
    </div>
  );
};

export default About;
