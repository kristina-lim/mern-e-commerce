import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md={5} className='about-bg'></MDBCol>
        <MDBCol md={7} className='d-flex align-items-center justify-content-center flex-direction-column'>
          <MDBRow>
            <h4>About Us</h4>
            <p>Welcome to Universe's wardrobe! This costume e-commerce site is inspired by the cartoon show: Steven Universe. Come explore Universe's wardrobe and shop for costumes!</p>
          </MDBRow>
        </MDBCol>
        <MDBRow>
        </MDBRow>
      </MDBRow>
    </MDBContainer>
  )
}