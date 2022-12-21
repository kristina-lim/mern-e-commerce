import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='fixed-bottom text-center text-lg-start text-muted'>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <a href='https://github.com/kristina-lim/' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='github' />
        </a>
        <a href='https://linkedin.com/in/kristina-lim-01/' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='linkedin' />
        </a>
        <a href='https://instagram.com/' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='instagram' />
        </a>
        © 2022 Copyright Crystal Gems
      </div>
    </MDBFooter>
  );
}