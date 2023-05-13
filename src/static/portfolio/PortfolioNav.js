import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';
 
const PortfolioNav = _ => {
    const [showNav, setShowNav] = useState(false);
    return (
      <MDBNavbar expand='lg' dark bgColor='dark'>
      <MDBContainer fluid className="px-5">
        <MDBNavbarBrand href='#' style={{fontSize: "28px"}}>Cruz Chua</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav right fullWidth={false}>
            <MDBNavbarItem><MDBNavbarLink active aria-current='page' href="/">Home</MDBNavbarLink></MDBNavbarItem>
            <MDBNavbarItem><MDBNavbarLink active aria-current='page' href='/about'>About</MDBNavbarLink></MDBNavbarItem>
            <MDBNavbarItem><MDBNavbarLink active aria-current='page' href='/education'>Education</MDBNavbarLink></MDBNavbarItem>
            <MDBNavbarItem><MDBNavbarLink active aria-current='page' href='/work_experience'>Work Experience</MDBNavbarLink></MDBNavbarItem>
            <MDBNavbarItem><MDBNavbarLink active aria-current='page' href='/portfolio'>Portfolio</MDBNavbarLink></MDBNavbarItem>
            <MDBNavbarItem><MDBNavbarLink active aria-current='page' href='/contact'>Contact</MDBNavbarLink></MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    )
}

export default PortfolioNav;