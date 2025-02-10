import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Search } from 'react-bootstrap-icons'
import { PersonFill } from 'react-bootstrap-icons';

function Header() {
        return (
                <div>
                        <Navbar bg="transparent" data-bs-theme="transparent" className='z-3 w-100  border' >
                                <Container className=' grid row m-auto' >
                                        <Navbar.Brand className=' col ' href="#home">Finexo</Navbar.Brand>
                                        <Nav className="me-auto col ">
                                                <Nav.Link href="home">Home</Nav.Link>
                                                <Nav.Link href="About">About</Nav.Link>
                                                <Nav.Link href="Services">Services</Nav.Link>
                                                <Nav.Link href="WhyUs">Why us</Nav.Link>
                                                <Nav.Link href="Team">Team</Nav.Link>
                                                <Nav.Link href="Login">Login <PersonFill></PersonFill></Nav.Link>
                                                <Nav.Link href="search"><Search></Search></Nav.Link>


                                        </Nav>
                                </Container>
                        </Navbar>
                </div>
        );
}

export default Header
