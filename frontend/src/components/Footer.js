import React from 'react';

function Footer() {
  return (
    <footer className="text-white py-4">
    
      <div className='container-fluid text-center text-md-start mt-5 py-3 bg-secondary'>
        <div className='row mt-3'>
          <div className='mx-auto mb-4 col md=3 lg=4 xl=3'>
            <h3 className='mb-4 text-uppercase fw-bold'>
              <u>Guru Automobiles</u>
            </h3>
            <p>
              Our top priority is client satisfaction, which is guaranteed.
              Our goal is to make a lasting impression for a continuing relationship. Using top quality products…
            </p>
          </div>

          <div className='mx-auto mb-4 col md=3 lg=4 xl=3'>
            <h3 className='mb-4 text-uppercase fw-bold'>
              <u>Our Services</u>
            </h3>
            <p>
              <a href='https://ecocarspa.xyz/car-services' className='text-reset'>
                car service
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                bike service
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                modifying
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                washing
              </a>
            </p>
          </div>

          <div className='mx-auto mb-4 col md=3 lg=4 xl=3'>
            <h3 className='text-uppercase fw-bold mb-4'><u>Contact us</u></h3>
              <p>
              Near Jatra Hotel,
              Konark Nagar Adagaon,
              Nashik - 422003
              </p>
              <p>
              kailashsomasepatil@gmail.com
              </p>
              <p>
              Kailash Somase
              </p>
              <p>
              +91 8605386753
              </p>
          </div>

        </div>
      </div>

      <div className="container-fluid">
        <div className="row bg-secondary">
          <div className="col text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} <strong>GURU AUTOMOBILE</strong> Repairing and Services</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



