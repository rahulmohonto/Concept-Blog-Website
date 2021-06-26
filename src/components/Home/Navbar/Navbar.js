import React, { useState, useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import './Navbar.css';
// import Anime from 'react-anime';
// import Reveal from 'react-reveal/Reveal';
import logo1 from '../../../images/logo1.png';
import { UserContext } from '../../../App';
const NavbarTop = () => {

    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section className="container navbar-section shadow-lg">
            <div className="row shadow-lg">
                {/* <Anime opacity={[0, 1]}> */}
                < Navbar fixed="top" collapseOnSelect expand="lg" className="text-dark" style={{ backgroundColor: "#E6E1D0" }}>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        {/* <Reveal duration={3000}>
                            <h3 duration={3000} delay={2000} className="nav-title">Concept Blog Publish </h3>
                        </Reveal> */}
                        <div className="logo-holder" >
                            <img src={logo1} alt="/" className="logo " style={{ height: "120px", width: "120px" }} />
                        </div>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto text-dark">

                                <Nav.Link className="homer" href="/home">Home</Nav.Link>
                                <Nav.Link className="homer" href="/admin">Admin</Nav.Link>
                                <Nav.Link className="homer" href="#contact-section">Contact</Nav.Link>
                                <Nav.Link className="homer" href="#blogs">Blogs</Nav.Link>
                            </Nav>

                            <Nav className="text-dark">
                                <Nav.Link className="text-dark homer" href="/login">Sign Up / </Nav.Link>
                                <Nav.Link className="text-dark homer" href="/login"> Sign In</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>

                    </Container>
                </  Navbar>
                {/* </Anime> */}
                <div className="dashed-line-box">
                    <hr className="new1"></hr>
                </div>
            </div >
            <div className="dashed-line-box">
                <hr className="new1"></hr>
            </div>
        </section >
    );
};

export default NavbarTop;