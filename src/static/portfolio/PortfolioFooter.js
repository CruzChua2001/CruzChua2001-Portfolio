import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const PortfolioFooter = _ => {
  return (
    <MDBFooter bgColor='light' className='w-100 h-25 position-absolute bottom-0 mt-3 text-center text-lg-start text-muted border-top'>
     <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Cruz Chua
              </h6>
              <p>
                I aspire to be a Software Developer and to continue to improve as one. I appreciate you taking the time to visit my portfolio.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Socials</h6>
              <p> <a href='#!' className='text-reset'>LinkedIn</a> </p>
              <p> <a href='#!' className='text-reset'>GitHub</a> </p>
              <p> <a href='#!' className='text-reset'>Instagram</a> </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p> <a href='#!' className='text-reset'>About</a> </p>
              <p> <a href='#!' className='text-reset'>Education</a> </p>
              <p> <a href='#!' className='text-reset'>Work Experience</a> </p>
              <p> <a href='#!' className='text-reset'>Portfolio</a> </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p> <MDBIcon icon="home" className="me-2" /> 795, Yishun Ring Road, S760795 </p>
              <p> <MDBIcon icon="envelope" className="me-3" /> <a href="mailto:2001cruzchua@gmail.com">2001cruzchua@gmail.com</a> </p>
              <p> <MDBIcon icon="phone" className="me-3" /> <a href="tel:+6592773372">+65 9277 3372</a> </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright: 
        <a className='text-reset fw-bold'>Cruz Chua - Portfolio CruzC</a>
      </div>
    </MDBFooter>
  );
}

export default PortfolioFooter;