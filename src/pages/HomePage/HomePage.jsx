import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import './HomePage.css';

export default function HomePage() {
  return (
    <MDBRow>
      <MDBCol md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
        <div>
          <h1>Welcome to Universe's Wardrobe~</h1>
          <p>Pick what suits your eyes, I'm sure it looks lovely.</p>
          <Link to="/orders/new">
            <MDBBtn color="danger">
              Get Started <MDBIcon fas icon="star" className="star-icon"/>
            </MDBBtn>
          </Link>
        </div>
      </MDBCol>
      <MDBCol md={6} className="home-bg"></MDBCol>
    </MDBRow>
  );
}