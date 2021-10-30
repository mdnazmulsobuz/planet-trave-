import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" className='fs-5 fw-normal' >
                <Container>
                <Navbar.Brand as={Link} to="/"><img src="/logo.png" width="200" height="60" alt="logo"/></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/package">Packages</Nav.Link>
                        <Nav.Link as={Link} to="/addpackage">Add Package</Nav.Link>
                        <Nav.Link as={Link} to="/managepackage">Manage Package</Nav.Link> 
                        <Nav.Link as={Link} to="/myorder">My Order</Nav.Link>
                        {user.email ?
                        <Nav.Link onClick={logOut} bg='light'>Logout</Nav.Link>:
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>}
                        <Button className='btn btn-light'>{user.displayName}</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;