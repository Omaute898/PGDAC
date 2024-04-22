import React from 'react';
import '../../App.css';
import Navbar from '../layout/Navbar';
const Home = () => {
  return (
    <div>
      <Navbar /><br/>
      <div className="container-fluid">
        <div className='row'>
          <img class="d-block w-100" src="/images/project images/05-1-1536x512.webp" alt="First slide" />
        </div><br/><br/>

        <div className='row'>
          <div className='col-6'>
            <img class="d-block w-100" src="/images/project images/paint.jpg" alt="second slide" />
          </div>
          <div className='col-6 py-5' style={{ color: '#1A5276' }}>
            <h1 className='py-3'><b>Don’t have time for car and bike maintenance?</b></h1>
            <br /><br />
            <h1><b>Now relax at your Home, Office or Anywhere.</b></h1>
            <br /><br />
            <h4>Just call or Whatsapp</h4>
            <h4>+91 8605386753</h4>
          </div>
        </div>
        <br /><br />

        <center><h1 style={{ color: '#1A5276' }}><b>GURU AUTOMOBILES</b></h1><br /><br /></center>

        <div className='row'>
          <div className='col-6'>
          <img class="d-block w-100" src="/images/project images/Steam wash _ Eco Car Spa_files/staff-8-e1658123091143.jpg" alt="third slide" />
          </div>
          <div className='col-6'>
            <h6>
              Eco car spa is the first exclusive Semi-Automatic Auto Spa in Pondicherry alias Puducherry.
              We use the latest and Eco-friendly steam technology to clean cars and bikes.
            </h6><br />
            <h6>
              We are constantly looking for ways to improve our efficiency and customer experience.
              We are committed to providing excellent service and customer satisfaction.
            </h6><br />
            <h6>
              Our staffs are well trained in providing excellent service as well as good customer care.
            </h6><br />
            <h6>
              We Serve Our Customers through:<br /><br /><b>
                1. Welcome to Our Service Center<br />
                2. Pick up & Drop Service<br />
                3. Doorstep Service</b>
            </h6>
          </div>
        </div> <br /><br />

        <div className='row'>
          <div className='col-6 py-5' style={{ color: '#1A5276' }}>
            <h1 className='py-3'><b>Why Choose GURU AUTOMOBILES ?</b></h1>
            <br /><br />
            <h4><i class='fas fa-car'></i>
              <b> We specialize ourselves in offering a wide range of ECO friendly Car and bike detailing services with Steam Technology.
                Checked on various parameters, our range is in compliance with international quality standards..</b></h4>
          </div>
          <div className='col-6'>
            <img class="d-block w-100" src="/images/project images/Steam wash _ Eco Car Spa_files/staff-12.webp" alt="third slide" />
          </div>
        </div>


      </div>
    </div>
  );
};

export default Home;
