import React, { useState } from 'react';
import * as userService from '../../utilities/users-service';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function NavBar({ user, setUser }) {
  const [showNavRight, setShowNavRight] = useState(false);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <MDBIcon far icon='star' /> Welcome, {user.name}! <MDBIcon far icon="star" />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/about'>
                <MDBIcon fas icon='info-circle' /> About
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/orders/new'>
                <MDBIcon fas icon='mask' /> Costumes
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/orders'>
                <MDBIcon fas icon='history' /> Order History
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink to='' onClick={handleLogOut}>
                <MDBIcon fas icon='sign-out-alt' /> Log Out
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
